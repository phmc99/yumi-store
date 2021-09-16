import { useEffect, useState } from "react";
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
import axios from "axios";
import { useHistory } from "react-router";

interface IProductProps {
  prod: IProducts;
}

interface ICat {
  breeds: [];
  id: string;
  url: string;
  width: number;
  height: number;
}

const ProductDetail = ({ prod }: IProductProps) => {
  const history = useHistory();
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

  const [catImage, setCatImage] = useState<ICat[]>([]);
  const [dogImage, setDogImage] = useState<ICat[]>([]);

  useEffect(() => {
    const getImage = async () => {
      await axios
        .get(`https://api.thecatapi.com/v1/images/search`)
        .then((response) => setCatImage(response.data));
    };
    getImage();
  }, []);

  useEffect(() => {
    const getImage = async () => {
      await axios
        .get(`https://api.thedogapi.com/v1/images/search`)
        .then((response) => setDogImage(response.data));
    };
    getImage();
  }, []);

  return (
    <div>
      <ContainerProd key={prod._id}>
        <ContainerInfo>
          <h4>{prod.name}</h4>
          <div>
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
            <span className="rating">({prod.rating.grades.length})</span>
          </div>
        </ContainerInfo>

        <div className="all">
          <div className="images">
            <SideImage>
              <div onClick={showModal}>
                <img
                  src={catImage[0] && catImage[0].url}
                  alt={catImage[0] && catImage[0].id}
                />
              </div>
              <div onClick={showModal}>
                <img
                  src={dogImage[0] && dogImage[0].url}
                  alt={dogImage[0] && dogImage[0].id}
                />
              </div>
            </SideImage>
            <MainImage onClick={showModal}>
              <img src={prod.image_url} alt={prod.image_url} />
            </MainImage>
          </div>

          <Modal
            className="show-room"
            title={prod.name}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={"700px"}
            mask={true}
            footer={null}
            bodyStyle={{
              boxShadow: "revert",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            centered={true}
          >
            <Image.PreviewGroup>
              <Image
                width={200}
                src={catImage[0] && catImage[0].url}
                alt={catImage[0] && catImage[0].id}
              />
              <Image
                src={prod.image_url}
                alt={prod.image_url}
                width={"200px"}
              />
              <Image
                width={200}
                src={dogImage[0] && dogImage[0].url}
                alt={dogImage[0] && dogImage[0].id}
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
              <button
                onClick={() => {
                  addProduct(prod);
                  history.push("/cart");
                }}
              >
                Comprar
              </button>
            </ContainerPrice>
          </ContainerCart>
        </div>
      </ContainerProd>
    </div>
  );
};

export default ProductDetail;
