/* eslint-disable eqeqeq */
import { useProducts } from "../components/home/useProduct";
import Description from "../components/product/Description";
import ProductDisplay from "../components/product/ProductDisplay";
import ProductReview from "../components/product/ProductReview";
import { useParams } from "react-router-dom";
import { useReview } from "../components/product/useReview";
import PopularGifts from "../components/product/RelatedProduct";
import OtherProduct from "../components/product/OtherProduct";

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

type Params = {
  id: string;
};

function Products() {
  const{isLoading, product} =  useProducts();
  const{isLoading : isReviewing, review}=  useReview();
  const { id } = useParams<Params>();
  const filterProduct = product?.products.filter((item:ProductProps) => id == item.id);

  if(isLoading){
    if(isReviewing){
    return <h1>Loading ...</h1>
    }
  }
    return (

      <div className="space-y-7 pt-16">
       <ProductDisplay filterProduct={filterProduct}/>
       <Description filterProduct={filterProduct}/>
       <PopularGifts/>
       <ProductReview review={review}/>
       <OtherProduct/>
       </div>
    )
}
export default Products
