import { Button, Flex } from "antd";
import {useState } from "react";
import { FaBolt } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Cards from "../../ui/Cards";
import "./home.css";
import { useProducts } from "./useProduct";
import CardSlider from "../../ui/CardSlider";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Navigation } from 'swiper/modules';

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

function FlashSale() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const{isLoading, product} =  useProducts();
  if(isLoading){
    return <h1>Loading ...</h1>
  }
  const handleNext = (index: number) => {
    setCurrentIndex(index);
  };
  const handlePrevious = (index: number) => {
    setCurrentIndex(index);
  };
  
  const displayProduct = product?.products.slice(currentIndex, currentIndex + 3);
  
  
  return (
    <Flex className=" relative py-14 mt-10  bg-[rgb(59,186,202)] ">
      <Flex className="absolute md:inset-y-0 bg-[rgb(59,186,202)] top-[1.5rem] md:top-[0rem] md:py-32 lg:px-16 px-10 left-0 ">
        <Flex className="md:flex-col flex-row items-start gap-5 ">
          <div className="bg-white p-2 rounded-full">
            <FaBolt className="text-[#FFC540] lg:text-5xl text-4xl" />
          </div>
          <div>
            <p className="lg:text-5xl sm:text-4xl text-3xl text-white font-medium">
              Flash Sale
            </p>
            <p className="text-white font-light p-1">ends in 00 : 20 : 34 </p>

            <Button className="bg-white text-blue rounded-lg">View All</Button>
          </div>
        </Flex>
      </Flex>
      {currentIndex !== 0 && (
        <Flex className=" items-center z-10 bg-[rgb(59,186,202)] lg:w-28 top-[3rem] md:top-[0rem] absolute inset-y-0 lg:left-[18rem] md:left-[13rem] left-[0rem]">
          <button
            onClick={() =>
              handlePrevious(
                currentIndex === 0 ? product?.products.length - 1 : currentIndex - 1
              )
            }
            className="bg-white p-1 rounded-full absolute md:top-[12rem] top-[15.2rem] lg:left-[5rem] left-[0.7rem]  "
          >
            <IoIosArrowBack className="text-blue-500 text-4xl" />
          </button>
        </Flex>
      )}
        
      <Flex className="truncate lg:pl-[22rem] md:pl-[14rem] pl-[2.5rem] top-[3rem] md:top-[0rem] md:pt-0 pt-[4rem]">
      {/* <Swiper  
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }} 
      navigation={true} 
      slidesPerView={3}
      modules={[Navigation]} 
      className="mySwiper"> */}
        {displayProduct?.map((products:ProductProps, index: number) => (
        //  <SwiperSlide> 
          <CardSlider Products={products}  key={index} />
          // </SwiperSlide>
        ))}
        {/* </Swiper> */}
      </Flex>
      {/* {currentIndex !== product.length - 1 && (  */}
      <Flex className="items-center  lg:w-28 md:w-20 w-12 absolute inset-y-0 right-0 top-[6rem] md:top-[0rem]">
        <button
          onClick={() =>
            handleNext(currentIndex === product?.products.length - 1 ? 0 : currentIndex + 1)
          }
          className="bg-white p-1 rounded-full absolute top-[12rem] lg:right-[5rem] md:right-[3rem] right-[1rem]  "
        >
          <IoIosArrowForward className="text-blue-500 text-4xl" />
        </button>
      </Flex>
       {/* )}  */}
    </Flex>
  );
}

export default FlashSale;
