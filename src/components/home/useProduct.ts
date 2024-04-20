
import { useQuery } from '@tanstack/react-query';
import { apiProducts } from '../../services/apiProducts';

export function useProducts(){
  
    const {isLoading, data: products, error} =  useQuery({
        queryKey: ['product'],
        queryFn: apiProducts
       }) ;
       
       const product = products;
       return {isLoading, error, product} 
       
}

