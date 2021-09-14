import { ReactNode } from "react";
import { ProductsProvider } from "./Products";
import { CartProvider } from "./CartProvider";
import { FavoriteProvider } from "./Favorites";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <CartProvider>
      <ProductsProvider>
        <FavoriteProvider>{children}</FavoriteProvider>
      </ProductsProvider>
    </CartProvider>
  );
};

export default Providers;
