import { Flex } from "antd"
import TransactionProfile from "../components/profile/TransactionProfile"
import UserProfile from "../components/profile/UserProfile"

const Profile =() => {
    return (
        <Flex className="md:p-24 pt-24 p-10">
        <Flex className="basis-1/4">
        <TransactionProfile/>
        </Flex>
        <Flex className="basis-3/4">
        <UserProfile/>
        </Flex>
        </Flex>
    )
}
export default Profile