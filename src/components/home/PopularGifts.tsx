import { Button, Typography } from "antd";
import { Flex } from "antd";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Cards from "../../ui/Cards";
import { useProducts } from "./useProduct";
import { useNavigate } from "react-router-dom";
type ProductProps = {
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

function PopularGifts() {
  const { Title } = Typography;
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(4);
  const { isLoading, product } = useProducts();

  if (isLoading) {
    return <h1>Loading ...</h1>
  }

  const handleNext = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevious = (index: number) => {
    setCurrentIndex(index);
  };
  const handleClick = (items: string) => {
    navigate(`/search/${items}`)
  }


  const displayProduct = product?.products.slice(currentIndex, currentIndex + 3);

  return (
    <Flex className="flex-col pt-8">
      <Flex className="pt-4 md:px-20 justify-between">
        <Flex>
          <Title level={2} className="font-bold">Today's Featured Gifts</Title>
        </Flex>
        <Flex>
          <Button onClick={() => handleClick("View All")} >
            View All
          </Button>
        </Flex>
      </Flex>
      <Flex className=" relative ">
        <Flex className="truncate  justify-between md:pl-[7rem] sm:pl-[2rem] pl-[1rem]">
          {displayProduct?.map((products: ProductProps, index: number) => (
              <Cards Products={products} key={index}/>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PopularGifts;
