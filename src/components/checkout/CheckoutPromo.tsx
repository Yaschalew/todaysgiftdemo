import { Button, Card, Flex } from "antd";
import { IoTicketSharp } from "react-icons/io5";

const CheckoutPromo = () => {
  return (
    <>
      <Flex className="md:basis-2/5 basis-1/4 flex-warp items-start pt-8">
        <Card>
            <Flex className="flex-col space-y-2">
          <Button className=" flex flex-row space-x-6 items-center p-6">
              <IoTicketSharp className="text-[#2BA0AF] " />
              <p>Use Promo Code</p>
          </Button>
          <p>Shopping summary</p>
          <Flex className="justify-between space-x-10">
          <p>Total Price(items)</p>
          <p>ETB 348.00</p>
          </Flex>
          <Flex className="justify-between space-x-10">
          <p>Shipping Fee</p>
          <p>ETB 38.00</p>
          </Flex>
          <Flex className="justify-between space-x-10">
          <p>Discount Promo</p>
          <p>-ETB 348.00</p>
          </Flex>
          <hr />
          <Flex className="justify-between space-x-10">
          <p>GrandTotal</p>
          <p>ETB 3,348.00</p>
          </Flex>
          <Button type="primary" className="bg-[#4096FF] flex p-5 items-center justify-center">Proceed to payment</Button>
          </Flex>
        </Card>
        
      </Flex>
    </>
  );
};

export default CheckoutPromo;
