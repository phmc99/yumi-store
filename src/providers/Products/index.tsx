import { useContext, createContext, useState, useEffect, ReactNode } from "react"
import api from "../../services";
import {useCartContext} from "../CartProvider"

interface Product {
    name: string;
    image_url: string;
    description: string;
    price: number;
    member_price: number;
    sizes: string;
    comments: string;

}

interface IProductsProps {
    children: ReactNode
}

interface ProductsData {
    products: Product[];
    addProduct: (prod: Product) => void;
} 

const ProductsContext = createContext<ProductsData>({} as ProductsData)

export const ProductsProvider = ({ children }: IProductsProps ) => {

    const [products, setProducts] = useState<Product[]>([]);

    const {cartProduct, setCartProduct} = useCartContext()
    
    useEffect(() => {
        api
        .get("/products")
        .then(res => setProducts([...res.data]))
        .then(res => console.log(res))
        .catch(err => console.log(err))

    }, [])
    const addProduct = (prod: Product) => {
     
        setCartProduct([...cartProduct, prod])
            localStorage.setItem("cart", JSON.stringify(cartProduct))
        }

    return (
        <ProductsContext.Provider value={{products, addProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)