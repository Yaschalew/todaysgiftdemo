import { Button, Empty, Flex, Modal, Radio } from "antd";
import React, { useState, MouseEventHandler } from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { useCart } from "../home/useCart";
import { CiCircleMinus } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { ConsoleSqlOutlined } from "@ant-design/icons";
import { RiDeleteBin5Fill } from "react-icons/ri";

interface DataType {
  key: React.Key;
  name: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

const CartList = () => {
  const { cart } = useCart();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [popData, setPopData] = useState<DataType>();

  const showModal = (record: DataType) => {
    setIsModalVisible(true);
    setPopData(record);
  };
  //b/c it can't convert it to ReactNode 
  const productImages = popData?.thumbnail;
  const productName = popData?.name;
  const productPrice = popData?.price;
  const productQuantity = popData?.quantity;

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleMinus: MouseEventHandler<SVGElement> = (event) => {

  };


  const handlePlus: MouseEventHandler<SVGElement> = (event) => {

  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "Select",
      dataIndex: ["thumbnail", "name", "price", "quantity"],
      render: (text, record) => (
        <>
          <Flex className="items-center justify-between cursor-pointer" onClick={() => showModal(record)}>
            <Flex className="space-x-4 items-center">
              <Flex className="flex-col space-y-3">
                <p>Today's Official</p>
                <img src={record.thumbnail} alt="Product Thumbnail" className="w-[130px] rounded" />
              </Flex>
              <Flex className="flex-col">
                <p className="font-bold">{record.name}</p>
                <p>{record.price} ETB</p>
              </Flex>
            </Flex>
            <Flex className="space-x-8">
              <CiCircleMinus className="text-2xl text-[#2BA0AF]" onClick={handleMinus}
              />
              <p className="text-[#2BA0AF] font-bold">{record.quantity}</p>
              <FaCirclePlus className="text-2xl text-[#2BA0AF]" onClick={handlePlus} />
            </Flex>
          </Flex>
        </>
      ),
    },
    {
      title: "remove",
      dataIndex: "remove",
    },
  ];

  const data: DataType[] = cart.map((item) => ({
    key: item.product.id,
    name: item.product.title,
    price: item.product.price,
    thumbnail: item.product.thumbnail,
    quantity: item.quantity,
  }));


  return (
    <Flex className="flex-col md:basis-3/5 basis-3/4">
      <h1 className="font-bold text-2xl px-3 pt-3">Cart</h1>
      {cart.length > 0 ? (
        <Flex >
          <div className="w-full">
            <div style={{ marginBottom: 16 }}></div>
            <Table
              className="rounded"
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
            />
            <Modal
              open={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Flex className="space-y-6 flex-col p-1  h-[25rem]">
                <p className="font-bold text-2xl ">Cart</p>
                <Flex className="justify-between items-center">
                  <Flex className="items-center">
                    <img src={productImages} alt="img" className="w-[150px] rounded" />
                    <Flex className="flex-col space-y-2 px-4">
                      <p>Today's Official</p>
                      <p className="font-emibold text-[1.2rem]">{productName}</p>
                      <Flex className="space-x-8">
                        <CiCircleMinus className="text-2xl text-[#2BA0AF]" onClick={handleMinus}
                        />
                        <p className="text-[#2BA0AF] font-bold">{productQuantity}</p>
                        <FaCirclePlus className="text-2xl text-[#2BA0AF]" onClick={handlePlus} />
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex className="flex-col space-y-6 items-center">
                    <Flex className="border rounded-full border-[#F53F6B] p-2 ">
                    <RiDeleteBin5Fill className="text-[#F53F6B] "/>
                    </Flex>
                    <p>{productPrice} ETB</p>
                  </Flex>
                </Flex>
                <Flex className="flex-col pt-12 ">
                  <hr/>
                  <Flex className="justify-between">
                  <p className="font-bold p-1">Total Price</p>
                  <p>{productPrice} ETB</p>
                  </Flex>
                  <Flex className="justify-between">
                    <Button size="large"> See Cart</Button>
                    <Button type="primary"size="large" className="bg-[#2BA0AF]">Purchase</Button>
                  </Flex>
                </Flex>
              </Flex>
            </Modal>

          </div>
        </Flex>
      ) : (
        <Empty className="py-52" />
      )}
    </Flex>
  );
};
export default CartList;
