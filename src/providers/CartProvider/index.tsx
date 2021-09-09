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
