import { ReactNode } from "react";
import { ProductsProvider } from "./Products";
import { CartProvider } from "./CartProvider";
import { FavoriteProvider } from "./Favorites";
import { ProfileProvider } from "./Profile";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <CartProvider>
      <ProductsProvider>
        <ProfileProvider>
        <FavoriteProvider>{children}</FavoriteProvider>
        </ProfileProvider>
      </ProductsProvider>
    </CartProvider>
  );
};

export default Providers;
