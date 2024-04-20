import { Divider, Flex, Typography } from "antd";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { useSearchParams } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import { IoStar, IoStarHalfOutline, IoStarOutline } from "react-icons/io5";
import images from "../../constants";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useState } from "react";
type review = {
  asin: string;
  body: string;
  body_html: string;
  date: {};
  id: string;
  position: string;
  profile: {
    name: string;
  };
  rating: number;
  review_country: string;
  title: string;
  verified_purchase: boolean;
  vine_program: boolean;
};

interface ReviewsProps {
  product: {};
  request_info: {};
  request_metadata: {};
  request_parameters: {};
  reviews: review[];
  summary: {
    rating: number;
  };
}
interface Review {
  review?: ReviewsProps;
}
const ProductReview = ({ review }: Review) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const { Title } = Typography;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const renderStarRating = (rating: any) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 1; i <= fullStars; i++) {
      stars.push(
        <span key={i} className="star-filled">
          <IoStar className="text-[#FFC540] sm:text-2xl text-xl" />
        </span>
      );
    }

    if (halfStar) {
      stars.push(
        <span key="half" className="star-half">
          <IoStarHalfOutline className="text-[#FFC540] sm:text-2xl text-xl" />
        </span>
      );
    }

    for (let i = 1; i <= emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star-empty">
          <IoStarOutline className="text-[#FFC540] sm:text-2xl text-xl" />
        </span>
      );
    }
    return stars;
  };
  const boldAndShadowStyle = {
    fontWeight: "bold",
    boxShadow: "1px 0.5px 0px 0px rgba(0, 0, 0, 0.4)",
  };

  const ratingreview = review?.reviews;
  const reviewCount = ratingreview?.length;
  const reviewproduct = ratingreview?.slice(currentIndex, currentIndex + 4);
  const pageCount = reviewCount !== undefined ? Math.ceil(reviewCount / 4) : 0;
  const handleReviewNext = () => {
    //
    //   console.log(currentIndex);
    //   console.log(ratingreview.length);
    //
    // }
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
    if (currentPage <= pageCount) {
    setCurrentIndex(currentIndex + 4);
    }
  };
  console.log(currentPage)
  console.log(pageCount)
  const handleReviewPrevious = () => {
    //
    //   console.log(currentIndex);
    //   console.log(ratingreview.length);

    // }
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev.toString());
    setSearchParams(searchParams);
  
    if (currentPage <= pageCount  ) {
      setCurrentIndex(currentIndex - 4);
    }
  };
  if (pageCount <= 1) return null;
  return (
    <Flex className="justify-center">
      <Flex className="flex-col lg:w-[80%] sm:w-[90%] px-5 m-auto">
        <Title level={2}>Product Review</Title>
        <Flex className="lg:space-x-12 space-y-3 lg:flex-row flex-col ">
          <div style={{ width: "7rem", height: "7rem" }}>
            <CircularProgressbarWithChildren
              value={100}
              strokeWidth={3}
              styles={buildStyles({
                pathColor: "#FFC540",
              })}
            >
              <div style={{ fontSize: 12, marginTop: 2 }}>
                <h1 className="text-blue-600 text-2xl">rate</h1>
                <p>Complete</p>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <Flex className="flex-col space-y-3 ">
            <Flex>{renderStarRating(review?.summary.rating)}</Flex>
            <Flex className="space-x-1 ">
              <button className="border border-gray-300 py-2 md:px-6 sm:px-3 px-1 rounded-md">
                All(139)
              </button>
              <button className="border border-gray-300 py-2 md:px-6 sm:px-3 px-1 rounded-md">
                With Images(69)
              </button>
            </Flex>
            <Flex className="space-x-1 flex-wrap sm:space-y-0 ">
              {[5, 4, 3, 2, 1].map((number) => (
                <button
                  key={number}
                  className="border border-gray-300 py-2 md:px-6 sm:px-3 px-1 rounded-md "
                >
                  {number} Stars
                </button>
              ))}
            </Flex>
          </Flex>
        </Flex>
        <Divider />
        <Flex className="flex-col space-y-10 w-[90%] ">
          {reviewproduct?.map((reviews: review, i: number) => (
            <>
              <Flex key={i} className="justify-between items-center space-x-2">
                <Flex className="flex-col space-y-2">
                  <p className="font-semibold w-[80%]">
                    {reviews.profile.name}
                  </p>
                  <Flex>{renderStarRating(reviews.rating)}</Flex>
                </Flex>
                <div className="bg-[#E9F5F7] p-5 md:w-[60%] w-[100%]">
                  <p>{reviews.body}</p>
                </div>
                <div>
                  <img
                    src={images.person}
                    alt=""
                    className="w-[5rem] md:block hidden"
                  />
                </div>
              </Flex>
              <Divider style={boldAndShadowStyle} />
            </>
          ))}
        </Flex>
        <Flex className="text-2xl text-[#B6B6B6] space-x-20 mt-4 justify-center">
          <button onClick={handleReviewPrevious}>
            <CiCircleMinus size={40} />
          </button>
          <p>
            Showing <span>{(currentPage - 1) * 4 + 1}</span> to{" "}
            <span>
              {" "}
              {currentPage === pageCount ? reviewCount : currentPage * 4}
            </span>
            of <span>{reviewCount}</span> results
          </p>
          <button
            onClick={handleReviewNext}
            disabled={currentPage === pageCount}
          >
            <CiCirclePlus size={40} />
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default ProductReview;
