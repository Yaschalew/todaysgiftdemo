import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../api/apiProduct';
export function useProduct () {
    const {isLoading, data: product, error} =  useQuery({
        queryKey: ['Product'],
        queryFn: getProduct
       }) ;
       return {isLoading, error, product} 
    }


    

