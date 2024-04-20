/* eslint-disable eqeqeq */
import { Flex, Typography } from "antd";
import { IoStar } from "react-icons/io5";
import { Image } from "antd";
import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";
import { IoShareSocial } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useCart } from "../home/useCart";
import { useProducts } from "../home/useProduct";

interface ProductProps  {
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
};

type Productsprop = {
  filterProduct: ProductProps[];
}
type Params = {
  id: string;
}

const ProductDisplay = ({ filterProduct }: Productsprop) => {
  const {addToCart, cart} = useCart();
  const {id} =  useParams<Params>();
  const { Text } = Typography;
  const {product} = useProducts();
  const [checkHeart, setCheckHeart] = useState(false);
  //  check the below code 
  const imageProduct = filterProduct[0]?.images?.map((image) => image);
  const productsList = product?.products?.filter((item: ProductProps) => item.id == id);

  const [buttons, setButtons] = useState([
    { ids: 1, label: "Button 1", checked: false, color: "bg-[#F15025]" },
    { ids: 2, label: "Button 2", checked: false, color: "bg-[#456ED6]" },
    { ids: 3, label: "Button 3", checked: false, color: "bg-[#56C8EB]" },
  ]);

  const handleChecked = (i: number) => {
    const updatedButtons = buttons.map((button: any) => {
      if (button.ids === i) {
        return { ...button, checked: !button.checked };
      }
      if (button.ids !== i) {
        return { ...button, checked: false };
      }
      return button;
    });
    setButtons(updatedButtons);
  };

  const handleCheckedHeart = () => {
    setCheckHeart(!checkHeart);
  };

  return (
    <Flex className="justify-center">
      <Flex className="pt-[3rem] lg:space-x-32 space-x-8 md:flex-row flex-col">
        <div className="py-8 px-2 ">
          {/* not satisfied check the code later */}
          <Image.PreviewGroup
            items={[
              `${filterProduct[0]?.thumbnail}`,
              `${imageProduct?.[0]}`,
              `${imageProduct?.[1]}`,
              `${imageProduct?.[2]}`,
              `${imageProduct?.[3]}`,
            ]}
          >
            <div className="md:w-[25rem] w-auto h-auto ">
              <Image src={filterProduct[0]?.thumbnail} />
            </div>
          </Image.PreviewGroup>
        </div>
        <Flex className="flex-col text-[#BCBCBC] space-y-7 font-semibold">
          <p>{filterProduct[0]?.category} &gt; {filterProduct[0]?.brand}</p>
          <Flex className="flex-col space-x-1">
            <p className="font-bold text-3xl text-black">{filterProduct[0]?.title}</p>
            <p>{filterProduct[0]?.category}</p>
            <Flex className="space-x-2">
              <IoStar className="text-[#FFC540] text-xl" /> <Text>{filterProduct[0]?.rating}</Text>
              <p className="underline">(139Reviews)</p>
            </Flex>
          </Flex>
          <p className="font-bold text-3xl text-black">{filterProduct[0]?.price} ETB</p>
          {/* <Flex className="space-x-2 h-8 ">
            <Text className="pr-6 py-1">Colors</Text>
            {buttons.map((button) => (
              <button
                key={button.ids}
                onClick={() => handleChecked(button.ids)}
                className={`${button.color} w-8  p-2 rounded-sm`}
              >
                {button.checked && (
                  <ImCheckmark className="text-lg text-white" />
                )}
              </button>
            ))}
          </Flex> */}
          {/* <Flex className="space-x-2 h-8 items-center">
            <Text className="pr-6">Size</Text>
            <button className="h-10 w-10 border-[1px] border-gray-300 rounded-md hover:bg-blue-50 hover:text-blue-400 hover:border-none">
              40
            </button>
            <button className="h-10 w-10 border-[1px] border-gray-300 rounded-md hover:bg-blue-50 hover:text-blue-400 hover:border-none">
              39
            </button>
            <button className="h-10 w-10 border-[1px] border-gray-300 rounded-md hover:bg-blue-50 hover:text-blue-400 hover:border-none">
              38
            </button>
            <button className="h-10 w-10 border-[1px] border-gray-300 rounded-md hover:bg-blue-50 hover:text-blue-400 hover:border-none">
              37
            </button>
          </Flex> */}
          <Flex className="lg:space-x-5 space-x-2 py-3 flex-wrap">
            {filterProduct[0]?.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="images 1"
                className="sm:w-[5rem] w-auto sm:h-[4rem] h-[2.5rem] border border-gray-500 rounded-md"
              />
            ))}
          </Flex>
          <Flex className="lg:space-x-4 space-x-2">
            <button onClick={(event) =>  addToCart(productsList[0], event)}className="bg-[#2798a7] border-[#2798a7] border-2 hover:bg-white hover:text-[#2798a7] text-white sm:px-6 px-4 sm:py-3 py-2 rounded-md ">
              <Flex className="item-center space-x-7">
                <p>Add to cart </p>
                <IoMdCart size={25} />
              </Flex>
            </button>
            <button
              onClick={handleCheckedHeart}
              className="sm:px-4 px-2 rounded-md bg-[#dff0f3] text-[#2798a7] "
            >
              {checkHeart ? (
                <PiHeartFill size={24} />
              ) : (
                <PiHeartBold size={24} />
              )}
            </button>
            <button className=" sm:w-[3.2rem] w-[2.5rem]  sm:px-3 px-2 rounded-md bg-[#dff0f3] text-[#2798a7] ">
              <IoShareSocial className="text-2xl ease-in delay-200 transition duration-200   hover:scale-125" />
            </button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default ProductDisplay;
