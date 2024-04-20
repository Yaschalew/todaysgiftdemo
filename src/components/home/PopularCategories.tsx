import { Flex } from "antd";
import { Typography } from "antd";
import { IoTicketSharp } from "react-icons/io5";
import { BiSolidJoystick } from "react-icons/bi";
import { FaBasketball } from "react-icons/fa6";
import { AiFillAppstore } from "react-icons/ai";
import { FaBolt } from "react-icons/fa";
import { ImMobile } from "react-icons/im";

function PopularCategories() {
  const { Title } = Typography;
  return (
    <Flex className=" flex-col">
      <Title level={2} className="sm:indent-28 px-8">
        Popular Categories
      </Title>
      <Flex className="mt-5 m-auto grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 place-items-center">
        <Flex className="items-center flex-col space-y-2">
          <div className="bg-[#d5def9] p-6 mx-10 rounded-2xl">
            <IoTicketSharp className="text-[#456ED6] text-5xl" />
          </div>
          <Title level={5} className="">
            Birthday
          </Title>
        </Flex>
        <Flex className="items-center flex-col space-y-2">
          <div className="bg-[#d5def9] p-6 rounded-2xl">
            <ImMobile className="text-[#456ED6] text-5xl" />
          </div>
          <Title level={5} className="">
            Wedding
          </Title>
        </Flex>
        <Flex className="items-center flex-col space-y-2">
          <div className="bg-[#d5def9] p-6 rounded-2xl">
            <BiSolidJoystick className="text-[#456ED6] text-5xl" />
          </div>
          <Title level={5} className="">
            Anniversary
          </Title>
        </Flex>
        <Flex className="items-center flex-col space-y-2">
          <div className="bg-[#d5def9] p-6 rounded-2xl">
            <FaBasketball className="text-[#456ED6] text-5xl" />
          </div>
          <Title level={5} className="">
            Graduation
          </Title>
        </Flex>
        <Flex className="items-center flex-col space-y-2">
          <div className="bg-[#d5def9] p-6 rounded-2xl">
            <FaBolt className="text-[#456ED6] text-5xl" />
          </div>
          <Title level={5} className="">
            Fun Gift
          </Title>
        </Flex>
        <Flex className="items-center flex-col space-y-2">
          <div className="bg-gray-200 p-6 rounded-2xl">
            <AiFillAppstore className="text-gray-400 text-5xl" />
          </div>
          <Title level={5} className="">
            View
          </Title>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PopularCategories;
