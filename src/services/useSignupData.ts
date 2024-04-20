import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../api/apiService';
export function useSignupData () {
    const {isLoading, data: users, error} =  useQuery({
        queryKey: ['Users'],
        queryFn: getUsers
       }) ;
       return {isLoading, error, users} 
    }