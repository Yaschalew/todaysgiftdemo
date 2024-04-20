import { Button, Card, Flex, Modal } from "antd";
import { useState } from "react";
import { IoTicketSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Promo = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate('/checkout')
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Flex className="md:basis-2/5 basis-1/4 ">
        <Card>
            <Flex className="flex-col space-y-2">
          <Button className=" flex flex-row space-x-6 items-center p-6">
              <IoTicketSharp className="text-[#2BA0AF] " />
              <Button type="primary" onClick={showModal}>
              <p>Use Promo Code</p>
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
           
          </Button>
          <p>Shoping summary</p>
          <Flex className="justify-between space-x-10">
          <p>Total Price</p>
          <p>ETB 348.00</p>
          </Flex>
          <Flex className="justify-between space-x-10">
          <p>Total Discount Item(s)</p>
          <p>-ETB 348.00</p>
          </Flex>
          <hr />
          <Flex className="justify-between space-x-10">
          <p>GrandTotal</p>
          <p>ETB 1348.00</p>
          </Flex>
          <Button type="primary" onClick={handleCheckout} className="bg-[#4096FF] flex p-5 items-center justify-center"> Checkout </Button>
          </Flex>
        </Card>
      </Flex>
    </>
  );
};

export default Promo;
