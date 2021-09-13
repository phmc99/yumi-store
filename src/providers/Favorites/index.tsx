import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from "react";

import { IProducts } from "../../types";

interface FavoriteProviderProps {
  children: ReactNode;
}

interface FavoriteProviderData {
  favorite: boolean;
  favoritesProducts: IProducts[];
  handleAddFavorite: (item: IProducts) => void;
  handleRemoveFavorite: (item: IProducts) => void;
}

const FavoriteContext = createContext<FavoriteProviderData>(
  {} as FavoriteProviderData
);

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favorite, setFavorite] = useState(false);

  const [favoritesProducts, setFavoritesProducts] = useState<IProducts[]>(
    JSON.parse(localStorage.getItem("@yumishop:favorites") || "[]")
  );

  const handleAddFavorite = (item: IProducts) => {
    setFavorite(true);
    setFavoritesProducts([...favoritesProducts, item]);
  };

  const handleRemoveFavorite = (item: IProducts) => {
    setFavorite(false);
    setFavoritesProducts(
      favoritesProducts.filter((remove) => remove.name !== item.name)
    );
  };

  useEffect(() => {
    localStorage.setItem(
      "@yumishop:favorites",
      JSON.stringify(favoritesProducts)
    );
  }, [favoritesProducts]);

  console.log(favoritesProducts);

  return (
    <FavoriteContext.Provider
      value={{
        favorite,
        favoritesProducts,
        handleAddFavorite,
        handleRemoveFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = () => useContext(FavoriteContext);
