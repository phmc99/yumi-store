import { ReactNode } from "react";
import { ProductsProvider } from "./Products";
import { CartProvider } from "./CartProvider";
import { FavoriteProvider } from "./Favorites";
import { ProfileProvider } from "./Profile";
import { LocalizaCepProvider } from "./CepProvider";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <ProfileProvider>
      <CartProvider>
        <ProductsProvider>
          <FavoriteProvider>
            <LocalizaCepProvider>{children}</LocalizaCepProvider>
          </FavoriteProvider>
        </ProductsProvider>
      </CartProvider>
    </ProfileProvider>
  );
};

export default Providers;
