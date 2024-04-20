import { useQuery } from '@tanstack/react-query';
import { getCategory } from '../api/apiCategory';
export function useCategory () {
    const {isLoading, data: category, error} =  useQuery({
        queryKey: ['Category'],
        queryFn: getCategory
       }) ;
       return {isLoading, error, category} 
    }