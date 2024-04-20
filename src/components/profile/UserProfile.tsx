import { Button, Flex, Tabs, TabsProps, Tag } from "antd";
import { FaUserCircle } from "react-icons/fa";
const UserProfile = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Profile",
      children: (
        <Flex className=" items- space-x-16 ">
          <Flex className="flex-col space-y-2 text-[#C4C4C4]">
            <FaUserCircle className="" size={90} />
            <Button>Edit</Button>
          </Flex>
          <Flex className="space-x-8">
            <Flex className="flex-col space-y-2">
              <p>Username</p>
              <p>Date of birth</p>
              <p>Gender</p>
              <p>Email</p>
              <p>Phone Number</p>
              <p>Address</p>
            </Flex>
            <Flex className="flex-col space-y-2">
              <p>Achmod Fiqrih</p>
              <Flex className="items-start">
              <Button type="link" className="text-[#2BA0AF]">
                + Add
              </Button>
              </Flex>
              <p>Male</p>
              <Flex className="space-x-7">
                <p>vickyfikir@slab.com</p>
                <Tag
                  bordered={false}
                  color="processing"
                  className="px-3 font-semibold"
                >
                  verfied
                </Tag>
              </Flex>
              <Flex className="space-x-7">
                <p>0368992762</p>
                <Tag
                  bordered={false}
                  color="processing"
                  className="px-3 font-semibold"
                >
                  verfied
                </Tag>
              </Flex>
              <p className="w-[50%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                corrupti consequatur vel saepe, officia ipsam molestiae.
              </p>
            </Flex>
          </Flex>
        </Flex>
      ),
    },
    {
      key: "2",
      label: "Transaction List",
      children: (
        <div className="h-auto">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit specific.
            Nihil laboriosam facilis distinctio adipisci nam vitae repellendus
            deleniti fugit, tenetur totam quasi alias odit animi beatae eligendi
            dicta sit amet? Ipsum.
          </p>
        </div>
      ),
    },
    {
      key: "3",
      label: "Address",
      children: (
        <div className="h-auto">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit specific.
            Nihil laboriosam facilis distinctio adipisci nam vitae repellendus
            deleniti fugit, tenetur totam quasi alias odit animi beatae eligendi
            dicta sit amet? Ipsum.
          </p>
        </div>
      ),
    },
  ];

  return (
    <Flex className="pt-10">
      <Tabs defaultActiveKey="1" items={items} />
    </Flex>
  );
};
export default UserProfile;
