import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = process.env.REACT_APP_BASE_URL;

interface Product{
    name: string;
    description : string;
    price: number;
    quantity: number;
}
type CreateProduct = Product;
type GetProduct = Product[];

const api = axios.create({
    baseURL: API_BASE_URL,
  });

 export const getProduct =  async () : Promise<GetProduct> =>{
    try{
        const response: AxiosResponse<GetProduct> = await api.get('/products');
        return response.data;
    }catch(error){
        console.error('Error fetching product:', error);
        throw error;
    }

 };
 export const createProduct = async (productData: Partial<Product>): Promise<CreateProduct> => {
    try {
      const response: AxiosResponse<CreateProduct> = await api.post('/products', productData);
      return response.data;
    } catch (error) {
      console.error('Error creating Product:', error);
      throw error;
    }
  };