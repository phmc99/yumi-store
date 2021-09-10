import { useContext, useState, createContext, ReactNode } from "react";

import { IProducts } from "../../types";

interface CartProviderProps {
  children: ReactNode;
}

interface CartProviderData {
  cartProducts: IProducts[];
  setCartProducts: any;
  addCart: (cart: IProducts) => void;
  removeCart: (cart: IProducts) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartProducts, setCartProducts] = useState<IProducts[]>([]);

  // useEffect(() => {
  //   api
  //     .get("/orders")
  //     .then((response) => setCartProducts([...response.data]))
  //     .catch((err) => console.log("erro"));
  // }, []);

  const addCart = (cart: IProducts) => {
    setCartProducts([...cartProducts, cart]);
  };

  const removeCart = (cartDeleted: IProducts) => {
    const newList = cartProducts.filter(
      (remove) => remove.name !== cartDeleted.name
    );
    setCartProducts(newList);
  };

  return (
    <CartContext.Provider
      value={{ cartProducts, addCart, removeCart, setCartProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
