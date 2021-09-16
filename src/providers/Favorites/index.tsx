import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import toast from "react-hot-toast";

import { IProducts } from "../../types";

interface FavoriteProviderProps {
  children: ReactNode;
}

interface FavoriteProviderData {
  favoritesProducts: IProducts[];
  handleAddFavorite: (item: IProducts) => void;
  handleRemoveFavorite: (item: IProducts) => void;
}

const FavoriteContext = createContext<FavoriteProviderData>(
  {} as FavoriteProviderData
);

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favoritesProducts, setFavoritesProducts] = useState<IProducts[]>(
    JSON.parse(localStorage.getItem("@yumistore:favorites") || "[]")
  );

  const handleAddFavorite = (item: IProducts) => {
    const find = favoritesProducts.find((el) => el.name === item.name);

    if (find === undefined) {
      setFavoritesProducts([...favoritesProducts, item]);
      toast("Produto favoritado!", {
        icon: "❤️",
      });
    } else {
      toast.success("Produto já foi favoritado!");
    }
  };

  const handleRemoveFavorite = (item: IProducts) => {
    setFavoritesProducts(
      favoritesProducts.filter((remove) => remove.name !== item.name)
    );
    toast("Produto removido dos favoritos!", {
      icon: "💔",
    });
  };

  useEffect(() => {
    localStorage.setItem(
      "@yumistore:favorites",
      JSON.stringify(favoritesProducts)
    );
  }, [favoritesProducts]);

  return (
    <FavoriteContext.Provider
      value={{
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
