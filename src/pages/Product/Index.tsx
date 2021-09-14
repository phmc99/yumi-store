import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FadeLoader } from "react-spinners";
import Footer from "../../components/Footer";
import { MenuSearch } from "../../components/MenuSearch";
import ProductDetail from "../../components/ProductDetail";
import api from "../../services";
import { IProducts } from "../../types";
import { ContainerProd } from "./style";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<IProducts>();

  const getProducts = async (id: string) => {
    setLoading(true);
    await api.get(`/products/${id}`).then((res) => {
      setProduct(res.data.product);
      setLoading(false);
    });
  };

  useEffect(() => {
    getProducts(id);
  }, [id]);

  return (
    <>
      <MenuSearch />

      {loading && (
        <ContainerProd>
          <div className="spinner">
            <FadeLoader
              loading={loading}
              color="var(--purple)"
              height={20}
              radius={5}
            />
          </div>
        </ContainerProd>
      )}
      {product && <ProductDetail prod={product} />}

      <Footer />
    </>
  );
};

export default Product;
