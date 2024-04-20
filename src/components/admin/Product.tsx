import "./Category.css";
import React from "react";
import { Table, Button } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../services/useProduct";

interface DataType {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  }
];


const Product = () => {
  const navigate = useNavigate();
  const {isLoading, product}= useProduct();
  const handleAddProduct = () => {
    navigate('/admin/add-product/new');
  }
  const paginationConfig = {
    pageSize: 5,
  };
  
  if (isLoading) {
    return <div>Loading...</div>; 
  }
  return (
    <div>
      <div className="table-header">
        <h1 className="title">Products</h1>
        <Button onClick={handleAddProduct}>
          {" "}
          <PlusOutlined />
          Add
        </Button>
      </div>
      <Table columns={columns} dataSource={product}  pagination={paginationConfig}/>
    </div>
  );
};

export default Product;
