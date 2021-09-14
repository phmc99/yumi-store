import { useState } from "react";
import { useProducts } from "../../providers/Products";
import {
  ContainerProd,
  ContainerCart,
  ContainerInfo,
  ContainerPrice,
  SideImage,
  MainImage,
} from "./style";
import { Modal, Image, Select } from "antd";
import { AiFillHeart, AiTwotoneStar } from "react-icons/ai";
import { useFavoriteContext } from "../../providers/Favorites";

// import { CepCard } from "../../components/CepSearch";

export const Products = () => {
  const { products, addProduct } = useProducts();
  const { handleAddFavorite } = useFavoriteContext();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { Option } = Select;

  return (
    <div>
      {/* <CepCard /> */}
      {products.map((prod, index) => (
        <ContainerProd key={index}>
          <SideImage>
            <div onClick={showModal}>
              <img src={prod.image_url} alt={prod.image_url} />
            </div>
            <div onClick={showModal}>
              <img src={prod.image_url} alt={prod.image_url} />
            </div>
          </SideImage>
          <MainImage onClick={showModal}>
            <img src={prod.image_url} alt={prod.image_url} />
          </MainImage>

          <Modal
            className="show-room"
            title="Showroom"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={"700px"}
            mask={false}
            footer={null}
            bodyStyle={{ boxShadow: "revert" }}
            centered={true}
          >
            <Image.PreviewGroup>
              <Image
                width={200}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              />
              <Image
                width={200}
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
              />
              <Image
                src={prod.image_url}
                alt={prod.image_url}
                width={"200px"}
              />
            </Image.PreviewGroup>
          </Modal>
          <ContainerCart>
            <ContainerInfo key={prod.id}>
              <h4>
                {prod.name}
                <div className="stars">
                  <AiTwotoneStar color="var(--yellow)" />
                  <AiTwotoneStar color="var(--yellow)" />
                  <AiTwotoneStar color="var(--yellow)" />
                  <AiTwotoneStar color="var(--yellow)" />
                  <AiTwotoneStar color="var(--yellow)" />
                </div>

                <button
                  className="favButton"
                  onClick={() => handleAddFavorite(prod)}
                >
                  <AiFillHeart />
                </button>
              </h4>

              <p>
                Descrição: <br></br>
                <br></br>
                {prod.description}
              </p>
            </ContainerInfo>
            <ContainerPrice>
              <Select
                placeholder={"Tamanhos"}
                labelInValue
                style={{ width: 200 }}
              >
                <Option value="jack">{prod.sizes} (P)</Option>
                <Option value="lucy">{prod.sizes} (M)</Option>
              </Select>
              <h4>R${prod.price}</h4>
              <h4 className="club-price">
                R${prod.member_price} <span className="club-logo">Yumi</span>
                Club
              </h4>
              <button onClick={() => addProduct(prod)}>Comprar</button>
            </ContainerPrice>
          </ContainerCart>
        </ContainerProd>
      ))}
      {/* <div>
          {products.map((prod, index) => (
            <ContainerProd key={index}>
           <ContainerComment>
          <p> {prod.rating.comments}</p>
          </ContainerComment>
        </ContainerProd>
      ))}
      </div> */}
    </div>
  );
};
