import Promo from "../components/cart/Promo";
import CartList from "../components/cart/CartList";
import { Flex } from "antd";

const Cart = () => {
  return (
    <Flex className="pt-[7rem] md:px-[2rem] items-start space-x-4">
        <CartList />
        <Promo />
    </Flex>
  );
};
export default Cart;
