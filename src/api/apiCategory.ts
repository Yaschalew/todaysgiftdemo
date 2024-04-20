import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = process.env.REACT_APP_BASE_URL;

interface Category{
    name: string;
    description : string;
}
type CreateCategory = Category;
type GetCategory = Category[];

const api = axios.create({
    baseURL: API_BASE_URL,
  });

 export const getCategory =  async () : Promise<GetCategory> =>{
    try{
        const response: AxiosResponse<GetCategory> = await api.get('/categories');
        return response.data;
    }catch(error){
        console.error('Error fetching category:', error);
        throw error;
    }

 };
 export const createCategory = async (categoryData: Partial<Category>): Promise<CreateCategory> => {
    try {
      const response: AxiosResponse<CreateCategory> = await api.post('/categories', categoryData);
      return response.data;
    } catch (error) {
      console.error('Error creating Category:', error);
      throw error;
    }
  };