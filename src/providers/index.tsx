import { ReactNode } from "react";
import {ProductsProvider} from "./Products"

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <ProductsProvider>
        {children}
    </ProductsProvider>
    
  );
};

export default Providers;
