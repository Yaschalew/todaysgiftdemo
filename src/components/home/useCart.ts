import { useState } from "react";
import { useProducts } from "./useProduct";
import { Navigate, useNavigate } from 'react-router-dom';

type ProductProps = {
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

type CartItem = {
  product: ProductProps; // Renamed from 'products'
  quantity: number;
};

export function useCart() {
  const navigate = useNavigate();
  

  const { isLoading, product } = useProducts();
  const [count, setCount] = useState(1);
  let cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

  const addToCart = (product: ProductProps, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    const existingCartItem = cart.find((item) => item.product.id === product.id);
    if (existingCartItem) {
      cart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + count }
          : item
      );
    } else {
      cart = [...cart, { product, quantity: count }];
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    

    
    event.preventDefault();
    window.location.reload(); // Note: Consider alternative ways to update UI
  };



    //  const CartList = product.products?.find((item:ProductProps) => item.id === products.id);
    //   console.log(CartList)
    //   // const Carts = cartItem.
    //   setCartItem([...cartItem, products]);



    //    const CartList = cartItem.find((item:Cart)=> item.id === products.id)
    //    console.log(CartList)
    //    console.log("hello")

    //    if(CartList){
    //        setCartItem(cartItem.map((item:Cart) => (item.id === product.id ? { ...CartList, qty: CartList.qty + 1 } :  item)))
    //     }else{
    //         setCartItem([... cartItem, { ...product, qty: 1}])
    //     }
  // }
  // console.log(cartItem)

  return { addToCart, cart }

}
