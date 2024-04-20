import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AddCategory from "./components/admin/AddCategory";
import AddProduct from "./components/admin/AddProduct";
import Dashboard from "./components/admin/Dashboard";
import Settings from "./components/admin/Settings";
import Category from "./components/admin/Category";
import Product from "./components/admin/Product";
import Users from "./components/admin/Users";
import PageNotFound from "./ui/PageNotFound";
import Admin from "./components/admin/Admin";
import { Toaster } from 'react-hot-toast';
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./ui/Header";
import Home from "./pages/Home";
import './baoutest-display.otf';



import ProductList from "./components/admin/ProductList";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
//import AddProduct from "./components/admin/AddProduct";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="product/:id" element={<Products />} />
            <Route path="cart" element={<Cart/>} />
            <Route path="search/:id" element={<Search/>} />
            <Route path="checkout" element={<Checkout/>} />
          
            <Route path="profile" element={<Profile/>} />
            <Route path="/admin" element={<Admin />}>
              <Route path="/admin/dashboard" element={<Dashboard/>} />
              <Route path="/admin/product" element={<Product/>} />
              <Route path="/admin/add-product" element={<AddProduct />} />
              <Route path="/admin/add-product/:id" element={<AddProduct />} />
              <Route path="/admin/category" element={<Category />} />
              <Route path="/admin/add-category" element={<AddCategory />} />
              <Route path="/admin/add-category/:id" element={<AddCategory />} />
              <Route path="/admin/user" element={<Users/>} />
              <Route path="/admin/settings" element={<Settings/>} />
              <Route path="/admin/product" element={<ProductList />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
