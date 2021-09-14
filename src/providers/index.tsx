import { ReactNode } from "react";
import { ProductsProvider } from "./Products";
import { CartProvider } from "./CartProvider";
import { FavoriteProvider } from "./Favorites";
import {LocalizaCepProvider} from "./CepProvider";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <CartProvider>
      <ProductsProvider>
        <FavoriteProvider>
         <LocalizaCepProvider> {children} </LocalizaCepProvider> 
        </FavoriteProvider>
      </ProductsProvider>
    </CartProvider>
  );
};

export default Providers;
