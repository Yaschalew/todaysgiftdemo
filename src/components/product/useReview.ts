import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { apiReview } from '../../services/apiReview';
interface review  {
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
  }
  
  interface ReviewsProps  {
    product: {};
    request_info: {};
    request_metadata: {};
    request_parameters: {};
    reviews: review[]; 
    summary: {
      rating: number;
    };
  };


export function useReview(){
    const {isLoading, data: review , error}:UseQueryResult< ReviewsProps, Error>  =  useQuery< ReviewsProps, Error>({
        queryKey: ['Review'],
        queryFn: apiReview
       });
       return {isLoading, error, review} 
       
}