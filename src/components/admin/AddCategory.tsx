import "./AddCategory.css";
import client from "./../../api/Axios";
import { Input, Form, Select, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CloseCircleOutlined, CameraFilled } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

const AddCategory = () => {
  const navigate = useNavigate();
  const [localImages, setLocalImages] = useState<any[]>([]);
  const [remoteImages, setRemoteImages] = useState<any[]>([]);
  const { id } = useParams();
  const [form] = Form.useForm();

  const [categories, setCategory] = useState([]);
  useEffect(() => {
    client.get("/categories").then((response) => {
      setCategory(response.data);
    });
    if (id !== "new") {
      client.get("/categories/" + id).then((response) => {
        if (response.status === 200) {
          let temData = response.data;
          if (temData?.Images.length > 0) {
            setRemoteImages(temData?.Images);
          }
          form.setFieldsValue({ ...temData });
        }
      });
    }
  }, []);

  const onImageChange = (event: any) => {
    if (event.target.files) {
      setLocalImages([...localImages, ...event.target.files]);
    }
  };

  const onFinish = (values: any) => {
    if (values.parentId === undefined) {
      values.parentId = 0;
    }
    if (id !== "new") {
      client
        .patch("/categories/" + id, values)
        .then((response1) => {
          if (response1.status === 200 && localImages.length > 0) {
            localImages.map((value, index, array) => {
              let formData = new FormData();
              formData.append("fileData", value);
              client.post("/fileUpload", formData).then((response2) => {
                let fileBody = {
                  categoryId: id,
                  fileName: response2.data.filename,
                  fileType: response2.data.mimetype,
                  area: "category",
                };
                if (response2.status === 200) {
                  client.post("/saveFile", fileBody).then((response3) => {});
                }
              });
            });
          }
        })
        .finally(() => {
          navigate("/admin/category");
        });
    } else {
      client
        .post("/categories", values)
        .then((response1) => {
          if (response1.status === 200 && localImages.length > 0) {
            localImages.map((value, index, array) => {
              let formData = new FormData();
              formData.append("fileData", value);
              client.post("/fileUpload", formData).then((response2) => {
                let fileBody = {
                  categoryId: response1.data.id,
                  fileName: response2.data.filename,
                  fileType: response2.data.mimetype,
                  area: "category",
                };
                if (response2.status === 200) {
                  client.post("/saveFile", fileBody).then((response3) => {});
                }
              });
            });
          }
        })
        .finally(() => {
          navigate("/admin/category");
        });
    }
  };

  const removeLocalImage = (index: any) => {
    let images: any = [];
    let tempImage = localImages;
    tempImage.map((value, count, array) => {
      if (index !== count) {
        images = [...images, value];
      }
    });
    setLocalImages([...images]);
  };

  const removeRemoteImage = (index: any, id: any, name: string) => {
    let images: any = [];
    let tempImage = remoteImages;
    tempImage.map((value, count, array) => {
      if (index !== count) {
        images = [...images, value];
      }
    });
    setRemoteImages([...images]);
    client.get("/deleteFile/" + name).then((response4) => {});
    client.delete("/file/" + id).then((response4) => {});
  };

  return (
    <div className="add-category">
      <h1 className="title">Add Category</h1>
      <div className="forms">
        <div>
          <Form
            form={form}
            name="normal_login"
            className="login-form"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                { required: true, message: "Please input category name!" },
              ]}
            >
              <Input placeholder="enter category name" />
            </Form.Item>
            <Form.Item name="parentId" label="Parent Category">
              <Select placeholder="Select parent category" allowClear>
                {categories.map((item: any) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="description" label="Description">
              <TextArea rows={2} />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="second-form">
          <Form layout="vertical">
            <Form.Item name="images" className="inputfile">
              <Input
                type="file"
                onChange={onImageChange}
                placeholder="enter category name"
                multiple
                id="fileInput"
              />
            </Form.Item>
            <label htmlFor="fileInput" className="camera">
              <CameraFilled /> Attach Image
            </label>
          </Form>
          <div className="local-images">
            {localImages.map((value, index, array) => (
              <div className="img-btn">
                <button onClick={() => removeLocalImage(index)}>
                  <CloseCircleOutlined />
                </button>
                <img alt="preview image" src={URL.createObjectURL(value)} />
              </div>
            ))}
            {remoteImages.map((value3, index, array) => (
              <div className="img-btn">
                <button
                  onClick={() =>
                    removeRemoteImage(index, value3.id, value3.fileName)
                  }
                >
                  <CloseCircleOutlined />
                </button>
                <img
                  alt="preview image"
                  src={
                    process.env.REACT_APP_BASE_URL +
                    "/oneFiles/" +
                    value3.fileName
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
