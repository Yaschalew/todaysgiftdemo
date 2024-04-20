import "./AddProducts.css";
import client from "../../api/Axios";
import { Input, Form, Select, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CloseCircleOutlined, CameraFilled } from "@ant-design/icons";

const { TextArea } = Input;

const { Option } = Select;
const AddProduct = () => {
  const [remoteImages, setRemoteImages] = useState<any[]>([]);
  const [localImages, setLocalImages] = useState<any[]>([]);

  const navigate = useNavigate();
  const { id } = useParams();
  const [form] = Form.useForm();

  const [categories, setCategory] = useState([]);
  useEffect(() => {
    client.get("/categories").then((response) => {
      setCategory(response.data);
    });
    if (id !== "new") {
      client.get("/products/" + id).then((response) => {
        if (response.status === 200) {
          let tempData = response.data;
          if (tempData?.Images?.length > 0) {
            setRemoteImages(tempData?.Images);
          }
          form.setFieldsValue({ ...tempData });
        }
      });
    }
  }, []);
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    if (values.parentCategoryId === undefined) {
      values.parentCategoryId = 0;
    }
    if (values.categoryId === undefined) {
      values.categoryId = 0;
    }

    if (id !== "new") {
      client
        .patch("/products/" + id, values)
        .then((response1) => {
          if (response1.status === 200 && localImages.length > 0) {
            localImages.map((value, index, array) => {
              let formData = new FormData();
              formData.append("fileData", value);
              client.post("/fileUpload", formData).then((response2) => {
                let fileBody = {
                  productId: id,
                  fileName: response2.data.filename,
                  fileType: response2.data.mimetype,
                  area: "product",
                };
                if (response2.status === 200) {
                  client.post("/saveFile", fileBody).then((response3) => {});
                }
              });
            });
          }
        })
        .finally(() => {
          navigate("/admin/product");
        });
    } else {
      client
        .post("/products", values)
        .then((response1) => {
          if (response1.status === 200 && localImages.length > 0) {
            localImages.map((value, index, array) => {
              let formData = new FormData();
              formData.append("fileData", value);
              client.post("/fileUpload", formData).then((response2) => {
                let fileBody = {
                  productId: response1.data.id,
                  fileName: response2.data.filename,
                  fileType: response2.data.mimetype,
                  area: "product",
                };
                if (response2.status === 200) {
                  client.post("/saveFile", fileBody).then((response3) => {});
                }
              });
            });
          }
        })
        .finally(() => {
          navigate("/admin/product");
        });
    }
  };

  const onImageChange = (event: any) => {
    if (event.target.files) {
      setLocalImages([...localImages, ...event.target.files]);
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
      <h1 className="title">Add Product</h1>
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
            <Form.Item name="parentCategoryId" label="Parent Category">
              <Select placeholder="Select parent category" allowClear>
                {categories.map((item: any) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="categoryId" label="Category">
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
            <Form.Item name="specification" label="Specification">
              <TextArea rows={2} />
            </Form.Item>
            <Form.Item
              name="quantity"
              label="Quantity"
              rules={[{ required: true, message: "Please input quantity!" }]}
            >
              <Input placeholder="enter quantity" />
            </Form.Item>
            <Form.Item
              name="price"
              label="Price"
              rules={[{ required: true, message: "Please input price!" }]}
            >
              <Input placeholder="enter price" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div>
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
    </div>
  );
};

export default AddProduct;
