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

function Cards({ Products }: Listprops) {
  const {addToCart, cart} = useCart();
  const navigate = useNavigate();
  const handleClick = (id: string, e:any) => {
    e.preventDefault();
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <Flex
      className="space-y-2 flex-col md:w-[390px] w-[300px] h-auto m-4 ">
        <button onClick={(e) => handleClick(Products.id, e)}>
          <img
            alt="example"
            src={Products.thumbnail}
            className="md:h-[250px] md:w-[520px]  h-[150px] rounded"
          />
        </button>
        <button onClick={(event) =>  addToCart(Products, event)} className="lg:pl-[21.2rem]">
        <IoMdCart className="text-[#2BA0AF] absolute top-[14rem] rounded" style={{ fontSize: 34, backgroundColor: 'white', borderRadius: 4, padding: 2 }} />
      </button>
    <Flex className="flex-col">
      
      <Flex className="items-end justify-between flex-wrap">
        <p className="font-semibold text-center capitalize text-[16px] leading-4  truncate">
          Gift {Products.title}
        </p>
        <Flex className="font-semibold text-center capitalize text-[14px] leading-4  truncate">
          <p>{Products.price} ETB</p>
        </Flex>
      </Flex>
      <Flex className="items-end justify-between flex-wrap">
        <div>
          <p className='text-[#797979]'>Gift for him</p>
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

export default Cards;
