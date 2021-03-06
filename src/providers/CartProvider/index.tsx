import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import toast from "react-hot-toast";

import { IProductCart } from "../../types";
import { useProfile } from "../Profile";

interface CartProviderProps {
  children: ReactNode;
}

interface CartProviderData {
  cartProducts: IProductCart[];
  setCartProducts: any;
  total: any;
  updateTotal: () => void;
  removeCart: (product: IProductCart) => void;
  resetCart: () => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const { userInfo } = useProfile();

  const [cartProducts, setCartProducts] = useState<IProductCart[]>(
    JSON.parse(localStorage.getItem("@yumistore:cart") || "[]")
  );

  const calculatePrice = () => {
    if (userInfo.yumiClub === true) {
      return cartProducts
        .map(
          (item) =>
            Number(item.product.member_price.replace(",", ".")) * item.quantity
        )
        .reduce((acc, current) => acc + current, 0)
        .toFixed(2);
    } else {
      return cartProducts
        .map(
          (item) => Number(item.product.price.replace(",", ".")) * item.quantity
        )
        .reduce((acc, current) => acc + current, 0)
        .toFixed(2);
    }
  };

  const [total, setTotal] = useState<any>(calculatePrice);

  const updateTotal = () => {
    setTotal(calculatePrice);
  };

  const removeCart = (cartDeleted: IProductCart) => {
    const newList = cartProducts.filter(
      (remove) => remove.product.name !== cartDeleted.product.name
    );
    localStorage.setItem("@yumistore:cart", JSON.stringify(cartProducts));
    setCartProducts(newList);
    updateTotal();
    toast.error("Produto removido do carrinho!");
  };

  const resetCart = () => {
    setCartProducts([]);
    localStorage.setItem("@yumistore:cart", JSON.stringify(cartProducts));
    setTotal("");
  };

  useEffect(() => {
    localStorage.setItem("@yumistore:cart", JSON.stringify(cartProducts));
    updateTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts, userInfo]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        removeCart,
        setCartProducts,
        total,
        updateTotal,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
