import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from "react";

import api from "../../services";

interface Products {
  name: string;
  price: number;
  image_url: string;
}

interface ProducutsCart {
  children: ReactNode;
}

interface CartProduct {
  cartProduct: Product[];
  setCartProduct: any;
  addCart: (cart: Product) => void;
  removeCart: (cart: Product) => void;
}

const CartContext = createContext<CartProduct>({} as CartProduct);

export const CartProvider = ({ children }: ProducutsCart) => {
  const [cartProduct, setCartProduct] = useState<Product[]>([]);

  const addCart = (cart: Product) => {
    setCartProduct([...cartProduct, cart]);
  };

  const removeCart = (cartDeleted: Product) => {
    const newList = cartProduct.filter(
      (remove) => remove.name !== cartDeleted.name
    );
    setCartProduct(newList);
  };

  useEffect(() => {
        localStorage.get("cart", JSON.stringify(cartProduct))
    }, [cartProduct])


  return (
    <CartContext.Provider value={{ cartProduct, addCart, removeCart, setCartProduct }}>
interface CartProducts {
  cartProducts: Products[];
  addCart: (cart: Products) => void;
  removeCart: (cart: Products) => void;
}

const CartContext = createContext<CartProducts>({} as CartProducts);

export const CartProvider = ({ children }: ProducutsCart) => {
  const [cartProducts, setCartProducts] = useState<Products[]>([]);

  useEffect(() => {
    api
      .get("/orders")
      .then((response) => setCartProducts([...response.data]))
      .catch((err) => console.log("erro"));
  }, []);

  const addCart = (cart: Products) => {
    setCartProducts([...cartProducts, cart]);
  };

  const removeCart = (cartDeleted: Products) => {
    const newList = cartProducts.filter(
      (remove) => remove.name !== cartDeleted.name
    );
    setCartProducts(newList);
  };

  return (
    <CartContext.Provider value={{ cartProducts, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
