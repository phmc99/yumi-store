import { ReactNode } from "react";
import {ProductsProvider} from "./Products"
import {CartProvider} from "./CartProvider"

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <ProductsProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </ProductsProvider>
    
  );
};

export default Providers;
