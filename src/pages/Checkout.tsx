import { Flex } from "antd"
import CheckoutList from "../components/checkout/CheckoutList"
import CheckoutPromo from "../components/checkout/CheckoutPromo"

const Checkout = () => {
    return (
    <Flex className="pt-24">
        <CheckoutList/>
        <CheckoutPromo/>
    </Flex>
    )
}
export default Checkout