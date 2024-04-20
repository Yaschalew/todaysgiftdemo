import { Flex, Select, Tag } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { MdStars } from "react-icons/md";

const TransactionProfile = () => {
  return (
    <Flex className="flex-col space-y-4 pt-10">
      <Flex className="space-x-4">
        <FaUserCircle className="text-[#C4C4C4]" size={90} />
        <Flex className="flex-col space-y-2 items-start">
          <p className="font-bold">Achmod Fiqrih</p>
          <Tag bordered={false} color="processing" className="font-semibold">
            verfied
          </Tag>
        </Flex>
      </Flex>
      <p className="font-bold">Balance</p>
      <Flex className="justify-around">
        <Flex className="flex-col items-center space-y-2">
          <GiWallet className="text-[#2BA0AF]" size={35} />
          <p>ETB 3,999.000</p>
          <p className="text-[0.8rem]">Purpay</p>
        </Flex>
        <Flex className="flex-col items-center space-y-2">
          <MdStars className="text-[#2BA0AF]" size={35} />
          <p>ETB 199.000</p>
          <p className="text-[0.8rem]">Points</p>
        </Flex>
      </Flex>
      <hr />
      <Flex className="flex-col text-[#9D9D9D] text-[0.9rem] space-y-3">
        <Select
          placeholder={<p className="text-black font-semibold">Transaction</p>}
          variant="borderless"
          style={{ flex: 1, width: 300 }}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
          ]}
        />
        <p className="px-2">Waiting for payment</p>
        <p className="px-2">Ongoing transaction</p>
        <p className="px-2">All transaction</p>
      </Flex>
      <hr />
      <Flex className="flex-col text-[#9D9D9D] text-[0.9rem] space-y-3">
        <Select
          placeholder={<p className="text-black font-semibold">Inbox</p>}
          variant="borderless"
          style={{ flex: 1, width: 300 }}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
          ]}
        />
         <p className="px-2">Chat</p>
        <p className="px-2">Discussion</p>
        <p className="px-2">Review</p>
        <p className="px-2">Customer help</p>
        <p className="px-2">Update</p>
        </Flex>
      <hr />
      <Flex className="flex-col text-[#9D9D9D] text-[0.9rem] space-y-3">
        <Select
          placeholder={<p className="text-black font-semibold">Favorites</p>}
          variant="borderless"
          style={{ flex: 1, width: 300 }}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
          ]}
        />
        <p className="px-2">Wishlist</p>
        <p className="px-2">Recently viewed</p>
        <p className="px-2">Review</p>
        <p className="px-2">Customer help</p>
        <p className="px-2">Update</p>
      </Flex>
    </Flex>
  );
};
export default TransactionProfile;
