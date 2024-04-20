import { UserOutlined, MessageFilled } from "@ant-design/icons";
import { IoIosNotifications, IoMdCart } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Flex, Badge, Button, Menu, Dropdown } from "antd";
import images from "../constants";
import { useState } from "react";
import { useCart } from "../components/home/useCart";
import { MdOutlineMoreHoriz } from "react-icons/md";


import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const Notification = [
  { image:`${images.gift1}`, title: "Today's Recommendations", description: "Gift recommendations for graduation selected by today's team", time: "8 min"},
  { image: `${images.gift2}`, title: "Valentine's special collection", description: "Trendy valentine Gifts for you ordered by most members", time: "10 min"},
  { image:`${images.gift3}`, title: "Today's Recommendations", description: "Gift recommendations for graduation selected by today's team", time: "18 min"}
]

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'All',
    children: (
      <Flex className="flex-col space-y-4">
        {Notification?.map((items)=> 
        <Flex className="p-2 space-x-5 bg-[#EEF8F9] hover:bg-[#87D4DD] rounded">
          <img src={items.image} className="h-[110px] w-[35%] rounded" alt="images" />
          <Flex className="flex-col space-y-2 ">
            <p className="font-semibold text-xl">{items.title}</p>
            <p className="text-[#707070] font-semibold text-[1.1rem]">{items.description}</p>
            <p className="text-[#707070]">{items.time}</p>
          </Flex>
        </Flex>
        )}
      </Flex>
    ),
  },
  {
    key: '2',
    label: 'Unread',
    children: (
      <Flex className="flex-col space-y-4">
        {Notification?.map((items)=> 
        <Flex className="p-2 space-x-5 bg-[#EEF8F9] hover:bg-[#87D4DD] rounded">
          <img src={items.image} className="h-[110px] w-[35%] rounded" alt="images" />
          <Flex className="flex-col space-y-2 ">
            <p className="font-semibold text-xl">{items.title}</p>
            <p className="text-[#707070] font-semibold text-[1.1rem]">{items.description}</p>
            <p className="text-[#707070]">{items.time}</p>
          </Flex>
        </Flex>
        )}
      </Flex>
    ),
  },
  {
    key: '3',
    label: 'Archived',
    children: (
      <Flex className="flex-col space-y-4">
        {Notification?.map((items)=> 
        <Flex className="p-2 space-x-5 bg-[#EEF8F9] hover:bg-[#87D4DD] rounded">
          <img src={items.image} className="h-[110px] w-[35%] rounded" alt="images" />
          <Flex className="flex-col space-y-2 ">
            <p className="font-semibold text-xl">{items.title}</p>
            <p className="text-[#707070] font-semibold text-[1.1rem]">{items.description}</p>
            <p className="text-[#707070]">{items.time}</p>
          </Flex>
        </Flex>
        )}
      </Flex>
    ),
  },
];


function Nabvar() {
  const [notification, setNotification] = useState(false);
  const [searchParams, setSearchParams] = useState<string>('');
  const [notify, setNotify] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
    window.scrollTo(0, 0);
  };
  const handlenotify = () => {
    setNotify(!notify);
  }
  const handleSearch = (searchPrams: string) => {
    navigate(`/search/${searchPrams}`);
    window.scrollTo(0, 0);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(event.target.value);
  };
  const handleprofile =()=> {
  navigate("/profile");
  window.scrollTo(0, 0);

  }

  return (
    <Flex className="flex-col fixed  w-[100%]  z-20">
      <Flex className="justify-center bg-[#2BA0AF]">
        <p className="text-white p-1">Sale | Save up to Half Price <span className="animate-bounce w-6 h-0">{'>'}</span></p>
      </Flex>
      <Flex className="shadow-md justify-between items-center py-2 bg-white">
        <button onClick={handleHome}>
          <img
            src={images.todays}
            className="sm:w-[45px] w-[35px] sm:mx-12 ml-2"
            alt="logo"
          />
        </button>
        {/* <Flex className="md:inline-flex hidden ">
        <p className="mx-2">Virtual Product</p>
        <p className="mx-2">Product Category</p>
      </Flex> */}
        <label className="relative block">
          <input
            className="placeholder:text-slate-400 block md:w-[28rem] w-full rounded-full py-2 sm:pl-7 pl-2 sm:pr-3 shadow-md focus:outline-none border-sky-500  focus:ring-sky-500 ring-1 sm:text-sm"
            placeholder="Search today's gift"
            type="text"
            name="search"
            value={searchParams}
            onChange={handleChange}
          />
          <button className="absolute inset-y-0 right-2 flex items-center pl-2" onClick={() => handleSearch(searchParams)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </button>
        </label>
        <Flex className="items-center space-x-1 sm:mr-12 mr-2">
          <button onClick={handlenotify}>
            <Flex className="flex-col">
              <Badge dot offset={[-7, 2]} color="#FFC540">
                <IoIosNotifications className="sm:text-3xl text-xl text-[#2BA0AF]" />
              </Badge>
            </Flex>
          </button>
          {notify &&
            <Menu className="flex-col absolute top-[6rem] right-10 p-2 w-[35%] rounded-lg">
              <Flex className="justify-between items-center">
                <Flex className="space-x-4 items-center p-1">
                  <p className="p-2 font-semibold text-xl">Notification</p>
                  <Badge count={3} showZero color='#2DABC2' className="text-2xl" />
                </Flex>
                <Flex className="space-x-5 items-center  z-10">
                  <p className="text-[#2BA0AF] font-semibold cursor-pointer">Mark all as read</p>
                  <MdOutlineMoreHoriz className="text-4xl cursor-pointer" onClick={hanldeclick => (setNotification(!notification))} />
                  {notification &&
                    <Menu className="flex-col absolute top-[4rem] w-[40%] right-10 bg-[#D9D9D9] p-2 rounded-lg">
                      <Flex className="flex-col p-1 space-y-2">
                        <Button size="large" className="text-[#2BA0AF] bg-white font-semibold">Mute Notification</Button>
                        <Button size="large" className="text-[#2BA0AF] bg-white font-semibold">Notification Setting</Button>
                      </Flex>
                    </Menu>
                  }
                </Flex>
              </Flex>
              <Tabs defaultActiveKey="1" className="z-20" items={items} onChange={onChange} />
            </Menu>
          }
          {/* <button onClick={handleprofile => navigate("/cart")}>
            <Badge count={cart.length} className="mx-2" >
              <IoMdCart className="sm:text-3xl text-xl text-[#2BA0AF]" />
            </Badge>
          </button> */}
          {/* <Badge dot className="mx-2" offset={[0, 2]} color="#FFC540">
          <MessageFilled className="text-xl text-[#2BA0AF]" />
        </Badge>  */}
          <button onClick={handleprofile }>
            <IoPersonCircleSharp className="sm:text-4xl text-xl text-[#2BA0AF]" />
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Nabvar;
