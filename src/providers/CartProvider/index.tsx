import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from "react";

interface Product {
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
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
