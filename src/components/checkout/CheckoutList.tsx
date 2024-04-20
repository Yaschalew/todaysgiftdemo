import {
  Button,
  Card,
  Flex,
  Input,
  Radio,
  Select,
  message,
  Steps,
  theme,
  Typography,
} from "antd";
import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaShop, FaPaypal } from "react-icons/fa6";
import { FaShippingFast, FaBolt } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { GrVisa } from "react-icons/gr";

const { Title } = Typography;
const steps = [
  {
    title: "Set the order",
    content: (
      <>
        <Flex className="flex-col space-y-5">
          <Card>
            <Flex className="flex-col space-y-4">
              <Flex className="items-center space-x-2">
                <IoLocationSharp size={23} className="text-[#2BA0AF]" />
                <p className="font-bold">Shipping Address</p>
              </Flex>
              <p>Ach,od Fiqrih At Rochmoan (Home)</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                veritatis voluptatum neque temporibus sequi, ipsum iure quasi,
                repudiandae nam quidem eligendi omnis, nesciunt sed corporis
                molestias aliquam magni quod! Modi.
              </p>
              <Flex className="items-center">
                <Button size={"large"}>Edit Address</Button>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex className="flex-col ">
              <Flex className="items-center space-x-2">
                <FaShop size={23} className="text-[#2BA0AF]" />
                <p className="font-bold">Nike Official</p>
              </Flex>
              <p className="pb-6 px-7">Jokarta</p>
              <Flex className="justify-between">
                <Flex className="space-x-5 ">
                  <img src="card1.jpg" className="w-32 rounded-lg" alt="img" />
                  <Flex className="flex-col space-y-2">
                    <p className="font-bold">Shoes Waffle One</p>
                    <p>ETB 1,899.00</p>
                    <p>1154 gram</p>
                  </Flex>
                </Flex>
                <p>1 Item(s)</p>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex className="flex-col  space-y-4">
              <Flex className="items-center space-x-2">
                <FaShippingFast size={23} className="text-[#2BA0AF]" />
                <p className="font-bold">Shipment</p>
              </Flex>
              <Select
                size="large"
                placeholder={
                  <p className="text-black p-3">Regular(2-3 week days)</p>
                }
                style={{ flex: 1 }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
              <Select
                size="large"
                placeholder={
                  <Flex className="justify-between items-center">
                    <span className="text-black">
                      <p className="font-semibold px-6">Courier</p>
                      <Flex className="p-4">
                        <FaBolt
                          className="text-[#FFC540] p-1"
                          size={40}
                          style={{ marginRight: "5px" }}
                        />
                        <p>Flaship</p>
                      </Flex>
                    </span>
                    <p className="text-black">Rp 23.00</p>
                  </Flex>
                }
                style={{ flex: 1 }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </Flex>
          </Card>
        </Flex>
      </>
    ),
  },
  {
    title: "set the payment",
    content: (
      <>
        <Flex className="flex-col space-y-5">
          <Title>Payment Method</Title>
          <Card>
            <Flex className="flex-col space-y-3 w-full">
              <Flex className="justify-between items-center">
                <Radio className="font-semibold">Credit Card</Radio>
                <Flex className="items-center">
                <GrVisa size={40} className="text-[#499DE3]"/>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="80"
                  height="50"
                  viewBox="0 0 16 16"
                >
                  <circle cx="5.5" cy="8.5" r="5.5" fill="#fe3155"></circle>
                  <ellipse
                    cx="8"
                    cy="8.5"
                    fill="#fe3155"
                    rx="3"
                    ry="4.895"
                  ></ellipse>
                  <path
                    fill="#fedb29"
                    d="M10.5,3C9.599,3,8.751,3.221,8,3.605C7.329,3.948,6.739,4.425,6.262,5h3.476 c0.48,0.579,0.841,1.257,1.052,2H5.21C5.075,7.477,5,7.979,5,8.5C5,8.67,5.02,8.834,5.036,9h5.929c-0.065,0.718-0.273,1.39-0.587,2 H5.615C6.143,12.025,6.973,12.869,8,13.395C8.751,13.779,9.599,14,10.5,14c3.038,0,5.5-2.462,5.5-5.5C16,5.462,13.538,3,10.5,3z"
                  ></path>
                </svg>
                </Flex>
              </Flex>
              <Flex className="space-x-3">
                <Flex className="flex-col space-y-3">
                  <p className="font-semibold">First name</p>
                  <Input size="large" />
                </Flex>
                <Flex className="flex-col space-y-3">
                  <p className="font-semibold">Last name</p>
                  <Input size="large" />
                </Flex>
              </Flex>
              <Flex className="space-x-3">
                <Flex className="flex-col space-y-3">
                  <p className="font-semibold">Card Number</p>
                  <Input size="large" />
                </Flex>
                <Flex className="flex-col space-y-3">
                  <p className="font-semibold">Expiry Date</p>
                  <Input size="large" />
                </Flex>
                <Flex className="flex-col space-y-3">
                  <p className="font-semibold">CVV</p>
                  <Input size="large" />
                </Flex>
              </Flex>
              <Flex className="space-x-3 ">
                <Flex className="flex-col space-y-3">
                  <p className="font-semibold">Country</p>
                  <Input size="large" />
                </Flex>
                <Flex className="flex-col space-y-3">
                  <p className="font-semibold">Zip Code</p>
                  <Input size="large" />
                </Flex>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex className="flex-col space-y-3">
              <Flex className="justify-between">
                <Radio className="font-semibold">Paypal</Radio>
                <FaPaypal size={30} className="text-[#499DE3]" />
              </Flex>
              <Flex className="flex-col space-y-3">
                <p className="font-semibold">Email</p>
                <Input size="large" />
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex className="justify-between">
              <Radio className="font-semibold">Bank Tansfer</Radio>
              <BiTransfer size={25} className="text-[#499DE3]" />
            </Flex>
          </Card>
        </Flex>
      </>
    ),
  },
];

const CheckoutList = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    color: token.colorTextTertiary,
    marginTop: 16,
  };
  return (
    <Flex className="flex-col md:basis-3/5 basis-3/4 md:px-20 px-5 py-3 space-y-6">
      <h1 className="font-bold text-2xl pt-3">Checkout</h1>
      <Flex className="flex-col space-y-5">
        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button
              className="bg-[#4096FF]"
              type="primary"
              onClick={() => next()}
            >
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              className="bg-[#4096FF]"
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </Flex>
    </Flex>
  );
};
export default CheckoutList;
