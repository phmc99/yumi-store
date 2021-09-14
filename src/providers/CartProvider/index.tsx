import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from "react";

import { IProductCart } from "../../types";

interface CartProviderProps {
  children: ReactNode;
}

interface CartProviderData {
  cartProducts: IProductCart[];
  setCartProducts: any;
  total: any;
  setTotal: (item: any) => void;
  removeCart: (product: IProductCart) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartProducts, setCartProducts] = useState<IProductCart[]>(
    JSON.parse(localStorage.getItem("@yumistore:cart") || "[]")
  );
  const [total, setTotal] = useState<any>(
    cartProducts
      .map(
        (item) => Number(item.product.price.replace(",", ".")) * item.quantity
      )
      .reduce((acc, current) => acc + current, 0)
      .toFixed(2)
  );

  useEffect(() => {
    localStorage.setItem("@yumistore:cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const removeCart = (cartDeleted: IProductCart) => {
    const newList = cartProducts.filter(
      (remove) => remove.product.name !== cartDeleted.product.name
    );
    setCartProducts(newList);
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        removeCart,
        setCartProducts,
        total,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
