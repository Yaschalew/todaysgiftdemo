import './ProductList.css'
import client from '../../api/Axios'
import React, { useEffect, useState } from 'react';
import { Table, Button,Modal } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { PlusOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";
interface DataType {
  key: React.Key;
  name: string;
  description: string;
  math: string;
  english: string;
  action: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: '#',
    dataIndex: 'no',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];


const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};



const ProductList = () => {
  const [categories, setCategory] = useState([]);
  const navigate = useNavigate();
  
  const { confirm } = Modal;
  const editHandler = (id:any) => {
    navigate("/admin/add-product/" + id, { replace: true });
  };
  const showConfirm = (id: any) => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      title: "Are you sure to delete user?",
      content: "User data is not recoverable.",
      okButtonProps: { className: "custom-ok-button" },
      onOk() {
        client
          .delete("/products/" + id)
          .then((response) => {
            fetchCategories();
          });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const fetchCategories = () => {
    client.get("/products").then(response => {
      console.log(response);
      let localAdvertData:any = [];
      response?.data.forEach((element:any, index: any) => {
        localAdvertData = [
          ...localAdvertData,
          {
            ...element,
            no: index +1,
            createdAt: element.createdAt.split("T")[0],
            updatedAt: element.updatedAt.split("T")[0],
            action: (
              <div>
                <Button
              className='edit-button'
                  onClick={() => editHandler(element.id)}
                >
                  Edit
                </Button>{" "}
                <Button
                  onClick={() => showConfirm(element.id)}
                  type="primary"
                  danger
                >
                  Delete
                </Button>
              </div>
            ),
          },
        ];
        setCategory(localAdvertData);
        console.log(`localAdvertData`, localAdvertData);
      });
      // setCategory(response.data);
    })
  }
  useEffect(()=>{
  fetchCategories();
    }, [])

    const paginationConfig = {
      pageSize: 6,
    };
    return <div>
        <div className='table-header'>
            <h1 className='title'>Products</h1>
<Button> <Link to={"/admin/add-product/new"}><PlusOutlined className='icon' />Product</Link></Button>
        </div>
        <Table columns={columns}  dataSource={categories} onChange={onChange} pagination={paginationConfig}/>
    </div>
};

export default ProductList;