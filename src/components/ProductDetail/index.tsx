import { useState } from "react";
import { useProducts } from "../../providers/Products";
import {
  ContainerProd,
  ContainerCart,
  ContainerInfo,
  ContainerPrice,
  SideImage,
  MainImage,
} from "./styles";
import { Modal, Image, Select } from "antd";
import { AiFillHeart, AiTwotoneStar } from "react-icons/ai";
import { useFavoriteContext } from "../../providers/Favorites";
import ShowMoreText from "react-show-more-text";
import Rating from "react-rating";
import { IProducts } from "../../types";

interface IProductProps {
  prod: IProducts;
}

const ProductDetail = ({ prod }: IProductProps) => {
  const { addProduct } = useProducts();
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
      <ContainerProd key={prod._id}>
        <ContainerInfo>
          <h4>{prod.name}</h4>
          <div className="stars">
            <Rating
              initialRating={
                prod.rating.grades.reduce((sum, num) => sum + num, 0) /
                prod.rating.grades.length
              }
              readonly
              emptySymbol={<AiTwotoneStar color="var(--gray)" />}
              placeholderSymbol={<AiTwotoneStar color="var(--yellow)" />}
              fullSymbol={<AiTwotoneStar color="var(--yellow)" />}
            />
          </div>
        </ContainerInfo>

        <div className="all">
          <div className="images">
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
          </div>

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
            <div>
              <h4>Descrição</h4>

              <div className="text-description">
                <ShowMoreText
                  lines={4}
                  more="Ler mais"
                  less="Recolher"
                  className="content-css"
                  anchorClass="my-anchor-css-class"
                  expanded={false}
                  width={300}
                >
                  {prod.description}
                </ShowMoreText>
              </div>

              <button
                className="favButton"
                onClick={() => handleAddFavorite(prod)}
              >
                <AiFillHeart />
              </button>
            </div>

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
              <div className="club">
                <h4 className="club-price">R${prod.member_price}</h4>
                <span className="club-span">
                  Yumi
                  <span className="club-logo">Club</span>
                </span>
              </div>
              <button onClick={() => addProduct(prod)}>Comprar</button>
            </ContainerPrice>
          </ContainerCart>
        </div>
      </ContainerProd>
    </div>
  );
};

export default ProductDetail;
