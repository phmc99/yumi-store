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
    <CartProvider>
      <ProductsProvider>
        <ProfileProvider>
          <FavoriteProvider>
            <LocalizaCepProvider>{children}</LocalizaCepProvider>
          </FavoriteProvider>
        </ProfileProvider>
      </ProductsProvider>
    </CartProvider>
  );
};

export default Providers;
