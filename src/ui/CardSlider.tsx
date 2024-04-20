/* eslint-disable react/prop-types */
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Card, Flex } from "antd";
import { IoIosNotifications, IoMdCart } from "react-icons/io";
import { Progress } from "antd";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/home/useCart";

type Listprops = {
  Products: ProductProps;
};
interface ProductProps {
  id: string;
  brand: string;
  category: string;
  description: string;
  images: [];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

function CardSlider({ Products }: Listprops) {
  const {addToCart, cart} = useCart();
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <Flex
      className="space-y-2 flex-col md:w-[450px] w-[300px] h-auto m-4 ">
        <button onClick={() => handleClick(Products.id)}>
          <img
            alt="example"
            src={Products.thumbnail}
            className="md:h-[290px] md:w-[520px]  h-[150px] rounded"
          />
        </button>
        <button onClick={(event) =>  addToCart(Products, event)} className="truncate lg:pl-[20rem]">
        <IoMdCart className=" text-[#2BA0AF] absolute top-[20rem] rounded" style={{ fontSize: 34, backgroundColor: 'white', borderRadius: 4, padding: 2 }} />
      </button>
    <Flex className="flex-col">
      
      <Flex className=" text-white items-end justify-between flex-wrap">
        <p className="font-semibold text-center capitalize text-[16px] leading-4  truncate">
          Gift {Products.title}
        </p>
        <Flex className="font-semibold text-center capitalize text-[14px] leading-4  truncate">
          <p>{Products.price} ETB</p>
        </Flex>
      </Flex>
      <Flex className="text-white items-end justify-between flex-wrap">
        <div>
          <p className=''>Gift for him</p>
        </div>
        <Flex className="items-center">
          <MdOutlineStarPurple500 className="text-[#FFC540]"/>
          <p className="font-semibold">{Products.rating}</p>
        </Flex>
      </Flex>
      </Flex>
      </Flex>
  );
}

export default CardSlider;
