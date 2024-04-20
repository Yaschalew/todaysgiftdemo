import { Typography } from "antd";
import { Flex } from "antd";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Cards from "../../ui/Cards";
import { useProducts } from "../home/useProduct";

type  ProductProps ={
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
function OtherProduct() {
  const { Title } = Typography;
  const [currentIndex, setCurrentIndex] = useState(0);
  const{isLoading, product} =  useProducts();

  if(isLoading){
    return <h1>Loading ...</h1>
  }

  
  const handleNext = (index:number) => {
    setCurrentIndex(index);
  };

  const handlePrevious = (index: number) => {
    setCurrentIndex(index);
  };

  const displayProduct = product?.products.slice(currentIndex, currentIndex + 3);
  return (
    <Flex className="flex-col">
      <div className="md:px-36 px-4">
        <Title level={1}>Other combos From This Category</Title>
      </div>
      <Flex className=" relative ">
      {currentIndex !== 0 && (
        <Flex className=" items-center z-10 bg-white md:w-32 sm:w-16 absolute inset-y-0">
          <button
            onClick={() =>
              handlePrevious(
                currentIndex === 0 ? product?.products.length - 1 : currentIndex -1
              )
            }
            className="bg-[rgb(59,186,202)] sm:p-2 p-1 rounded-full absolute md:left-[6rem] sm:left-[3rem] left-[1rem]  hover:animate-pulse"
          >
            <IoIosArrowBack className="text-white text-4xl" />
          </button>
        </Flex>
      )}

      <Flex className="truncate overflow-hidden  md:pl-[5rem] sm:pl-[2rem] pl-[1rem]">
      {displayProduct.map((products:ProductProps, index: number) => (
          <Cards Products={products}  key={index} />
        ))}
      </Flex>
      {currentIndex !== product?.products.length - 2 && (
        <Flex className="custom-shadow items-center md:w-32 sm:w-16 w-9 absolute bg-white inset-y-0 right-0 ">
          <button
            onClick={() =>
              handleNext(currentIndex === product?.products.length - 2 ? 0 : currentIndex + 1)
            }
            className=" bg-[rgb(59,186,202)] sm:p-2 p-1 rounded-full absolute right-[1rem] sm:right-[3rem] md:right-[6rem]   hover:animate-pulse"
          >
            <IoIosArrowForward className="text-white text-4xl" />
          </button>
        </Flex>
      )}
        </Flex>
    </Flex>
  );
}

export default OtherProduct;
