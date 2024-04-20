import { Flex } from "antd";
import { useRef, useEffect, useState } from "react";
import images from "../../constants";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Cards from "../../ui/Cards";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


const sliders = [
  { image: `${images.gift2}`, id: "gallery-item-5", labelId: "5" },
  { image: `${images.slider4}`, id: "gallery-item-3", labelId: "3" },
  { image: `${images.slider2}`, id: "gallery-item-1", labelId: "1" },
  { image: `${images.Slide1}`, id: "gallery-item-2", labelId: "2" },
  { image: `${images.Slide2}`, id: "gallery-item-4", labelId: "4" },
  { image: `${images.slider3}`, id: "gallery-item-1", labelId: "6" },
]

function Slide() {
  // const [selectedIndex, setSelectedIndex] = useState(0);

  // const checkNext = () => {
  //   const labels = document.querySelectorAll("#slider label");

  //   const nextIndex =
  //     selectedIndex === labels.length - 1 ? 0 : selectedIndex + 1;
  //   setSelectedIndex(nextIndex);
  // };

  // const check = (index: number) => {
  //   setSelectedIndex(index);
  // };


  // const [currentIndex, setCurrentIndex] = useState(0);
  // const containerRef = useRef<HTMLDivElement>(null);

  // const updateGallery = () => {
  //   if (containerRef.current) {
  //     containerRef.current.childNodes.forEach((el: Node, i: number) => {
  //       if (el.nodeType === 1 && el instanceof HTMLElement) {
  //         el.classList.remove(`gallery-item-${i + 1}`);
  //       }
  //     });
  //     if (containerRef.current.childNodes[currentIndex].nodeType === 1 && containerRef.current.childNodes[currentIndex] instanceof HTMLElement) {
  //       //containerRef.current.childNodes[currentIndex].classList.add(`gallery-item-${currentIndex + 1}`);
  //     }
  //   }
  // };

  // const setCurrentState = (direction: string) => {
  //   const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex < 0 ? sliders.length - 1 : newIndex % sliders.length);
  // };

  // const setControls = () => {
  //   return (
  //     <div className="gallery-controls">
  //       <button className="gallery-controls-previous" onClick={() => setCurrentState('previous')}>
  //         Previous
  //       </button>
  //       <button className="gallery-controls-next" onClick={() => setCurrentState('next')}>
  //         Next
  //       </button>
  //     </div>
  //   );
  // };

  // useEffect(() => {
  //   updateGallery();
  // }, [currentIndex]);


  return (
    <>
      <Flex className="flex-col  space-y-8 ">
        <Flex className="flex-col text-center justify-center pt-4">
          <p className="font-bold text-4xl py-2">Seasonal Sales here</p>
          <p>Unwarp Today's Joy, </p>
          <p>Shop the Perfect Present Online!</p>
        </Flex>
        {/* {setControls()} ref={containerRef}*/}

        <Flex className="container " >
           <Swiper
       effect={'coverflow'}
       autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
       grabCursor={true}
       centeredSlides={true}
       loop={true}
       slidesPerView={4}
       coverflowEffect={{
         rotate: 0,
         stretch: 0,
         depth: 200,
         modifier: 2.5,
       }}
       pagination={{ el: '.swiper-pagination', clickable: true }}
       navigation={{
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
         //clickable: true,
       }}
       modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
       className="swiper_container"
      > 
      
        {sliders.map((item, index) =>
       
              <SwiperSlide >
                <div >
                <img className="swiper-slide" src={item.image}  data-index={item.labelId} alt={`img ${index}`} />
                </div>
              </SwiperSlide>
              
            )}
            
            <div className="slider-controler">
              {/* <div className="swiper-button-prev slider-arrow">
                <p>{`<`}</p>
              </div>
              <div className="swiper-button-next slider-arrow">
                <p>{`>`}</p>
              </div> */}
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </Flex>
        {/* <div className="gallery-controls"></div> */}

      </Flex>
    </>


    //     <Flex className="flex-col text-center ">
    //       <Flex className="flex-col justify-center pt-4">
    //         <p className="font-bold text-4xl py-2">Seasonal Sales here</p>
    //         <p>Unwarp Today's Joy, </p>
    //         <p>Shop the Perfect Present Online!</p>
    //       </Flex>
    //       <Flex className="flex-col items-center  sm:px-6 px-2 ">
    //         <Flex className="flex-col items-center space-y-3">
    //           <Flex className="flex-col text-center items-center">
    //           <section id="slider" className="w-16 h- inline-flex items-center justify-center mb-5 flex-shrink-0">

    //     <input
    //         type="radio"
    //         name="slider"
    //         id="s1"
    //         checked={selectedIndex === 0}
    //         onClick={() => check(0)}
    //     />
    //     <input
    //         type="radio"
    //         name="slider"
    //         id="s2"
    //         checked={selectedIndex === 1}
    //         onClick={() => check(1)}
    //     />
    //     <input
    //         type="radio"
    //         name="slider"
    //         id="s3"
    //         checked={selectedIndex === 2}
    //         onClick={() => check(2)}
    //     />
    //     <input
    //         type="radio"
    //         name="slider"
    //         id="s4"
    //         checked={selectedIndex === 3}
    //         onClick={() => check(3)}
    //     />
    //     <input
    //         type="radio"
    //         name="slider"
    //         id="s5"
    //         checked={selectedIndex === 4}
    //         onClick={() => check(4)}
    //     />
    //     <label htmlFor="s1" id="slide1">
    //         <img
    //             className="fea rounded-lg"
    //             src={images.slider2}
    //             alt="slide1"
    //             height="592px"
    //             width="100%"
    //         />
    //     </label>
    //     <label htmlFor="s2" id="slide2">
    //         <img
    //             className="fea rounded-lg"
    //             src={images.slider2}
    //             alt="slide2"
    //             height="592px"
    //             width="100%"
    //         />
    //     </label>
    //     <label htmlFor="s3" id="slide3">
    //         <img
    //             className="fea rounded-lg"
    //             src={images.Slide4}
    //             alt="slide3"
    //             height="592px"
    //             width="100%"
    //         />
    //     </label>
    //     <label htmlFor="s4" id="slide4">
    //         <img
    //             className="fea"
    //             src={images.Slide2}
    //             alt="slide4"
    //             height="100%"
    //             width="100%"
    //         />
    //     </label> 
    //     <label htmlFor="s5" id="slide5">
    //         <img
    //             className="fea"
    //             src={images.Slide1}
    //             alt="slide5"
    //             height="100%"
    //             width="100%"
    //         /> 
    //      </label>
    // </section>
    //           </Flex>
    //         </Flex>
    //         <Flex>
    //           <Flex className="text-center items-center">
    //             <button onClick={checkNext} className=" ">
    //               <IoIosArrowRoundBack  size={25} className="text-[#9F9F9F]" />
    //             </button>
    //           </Flex>
    //           <Flex className="text-center items-center">
    //             <button onClick={checkNext} className="">
    //               <IoIosArrowRoundForward size={25} className="text-[#9F9F9F]" />
    //             </button>
    //           </Flex>
    //         </Flex>
    //       </Flex>
    //     </Flex>
  );
}

export default Slide;
