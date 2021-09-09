import { useContext, createContext, useState, useEffect, ReactNode } from "react"
import api from "../../services";

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
} 

const ProductsContext = createContext<ProductsData>({} as ProductsData)

export const ProductsProvider = ({ children }: IProductsProps ) => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        api
        .get<Product[]>("/products")
        .then(res => setProducts([...res.data]))
        .then(res => console.log(res))
        .catch(err => console.log(err))

    }, [])

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)