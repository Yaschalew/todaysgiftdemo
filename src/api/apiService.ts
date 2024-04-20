import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = process.env.REACT_APP_BASE_URL;

interface User {
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    password: string;
  }
  type GetUsers = User[];
  type CreateUser = User;
  
  const api = axios.create({
    baseURL: API_BASE_URL,
  });
  
  export const getUsers = async (): Promise<GetUsers> => {
    try {
      const response: AxiosResponse<GetUsers> = await api.get('/users');
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };
  export const deleteUser = async (userId: number): Promise<void> => {
    try {
      await api.delete(`/users/${userId}`);
      console.log(`User ${userId} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting user ${userId}:`, error);
      throw error;
    }
  };
  
  export const createUser = async (userData: Partial<User>): Promise<CreateUser> => {
    try {
      const response: AxiosResponse<CreateUser> = await api.post('/users', userData);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  };



//   user API
// GET: https://todaysgift.avolaict.com/api/users *
// DELETE: https://todaysgift.avolaict.com/api/users/id(e.g 1,2,3...)
// POST: https://todaysgift.avolaict.com/api/users  *
//  body:
// {
//  "firstName": "",
//  "lastName": "",
//  "userType": "",
//  "phone": "",
//  "email": "",
//   "password":""
// }

// POST:https://todaysgift.avolaict.com/api/users/login *
// BODY: 
// {
//  "email": "",
//   "password":""
// }
// Category API

// GET: https://todaysgift.avolaict.com/api/categories *
// GET: https://todaysgift.avolaict.com/api/categories/id to get one category
// DELETE: https://todaysgift.avolaict.com/api/categories/id
// POST: https://todaysgift.avolaict.com/api/categories *
// Body: 
// {
// parentId: 0(default),
// name:"",
// description:""
// }
// GET: https://todaysgift.avolaict.com/api/products //all products   *
// GET: https://todaysgift.avolaict.com/api/products/cat/:catId 
// GET: https://todaysgift.avolaict.com/api/products/cat/:catId/:parentId 
// GET: https://todaysgift.avolaict.com/api/products/id //get one product
// DELETE: https://todaysgift.avolaict.com/api/products/id
// POST: https://todaysgift.avolaict.com/api/products  *
// BODY: 
// {
//     "parentCategoryId": 0,
//     "categoryId": 0,
//     "name": "Tishert",
//     "description": "it is new",
//     "price": 3.5,
//     "quantity": 3
// }