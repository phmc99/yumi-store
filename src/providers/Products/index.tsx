import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import toast from "react-hot-toast";
import api from "../../services";
import { IProducts } from "../../types";
import { useCartContext } from "../CartProvider";

interface IProductsProps {
  children: ReactNode;
}

interface ProductsData {
  products: IProducts[];
  addProduct: (prod: IProducts) => void;
}

const ProductsContext = createContext<ProductsData>({} as ProductsData);

export const ProductsProvider = ({ children }: IProductsProps) => {
  const [products, setProducts] = useState<IProducts[]>([]);

  const { cartProducts, setCartProducts, updateTotal } = useCartContext();

  const getProducts = async () => {
    await api
      .get("/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addProduct = (product: IProducts) => {
    localStorage.setItem("@yumistore:cart", JSON.stringify(cartProducts));

    const find = cartProducts.find((item) => item.product._id === product._id);

    if (find === undefined) {
      setCartProducts([...cartProducts, { product, quantity: 1 }]);
    } else {
      const prod = cartProducts.map((item) => {
        if (item.product._id === product._id) {
          item.quantity++;
        }
        return item;
      });
      setCartProducts([...prod]);
    }
    updateTotal();
    toast.success("Produto adicionado ao carrinho!");
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
