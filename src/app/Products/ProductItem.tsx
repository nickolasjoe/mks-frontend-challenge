import styled from "styled-components";

import Bag from "../../assets/bag.svg?react";

import { Product } from "../../context/MKSContext";
import { formatCurrency } from "../../utils/numbers";
import useMKSContext from "../../hooks/useMKSContext";
import { useState } from "react";

export type TProduct = {
  product: Product;
};

type THandleLoad = {
  target: EventTarget;
};

const ProductItem = ({ product }: TProduct) => {
  const { photo, name, price, description } = product;

  const [isLoading, setLoading] = useState(true);
  const { selected, setSelected } = useMKSContext();

  const handleClick = () => {
    const arr = [...selected];
    const i = arr.findIndex((obj) => obj.id === product.id);
    const hasProduct = arr[i];

    if (!hasProduct) {
      setSelected([...selected, { ...product, quantity: 1 }]);
    } else {
      arr[i].quantity += 1;
      setSelected(arr);
    }
  };

  const handleLoad = ({ target }: THandleLoad) => {
    setLoading(false);
    if (target instanceof HTMLImageElement) target.style.opacity = "1";
  };

  return (
    <ProductCard onClick={handleClick}>
      <button>
        <ImageWrapper>
          {isLoading && <Skeleton />}
          <ProductImg src={photo} alt={name} onLoad={handleLoad} />
        </ImageWrapper>
        <Wrapper>
          <div>
            <ProductTitle>{name}</ProductTitle>
            <ProductPrice>{formatCurrency(price)}</ProductPrice>
          </div>
          <ProductDescription>{description}</ProductDescription>
          <ProductButton>
            <Bag />
            Comprar
          </ProductButton>
        </Wrapper>
      </button>
    </ProductCard>
  );
};

export default ProductItem;

const ProductCard = styled.li`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  transition: 0.3s ease-in;
  transition-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  &:hover {
    transform: translateY(-0.375rem);
  }

  button {
    width: 100%;
    background-color: var(--white-1);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ImageWrapper = styled.div`
  display: grid;
  align-self: center;
  width: 100%;
  padding-bottom: 15px;
`;

const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    var(--white-2) 0,
    var(--white-1) 50%,
    var(--white-2) 100%
  );
  background-color: var(--white-2);
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;
`;

const ProductImg = styled.img`
  grid-area: 1/1;
  max-height: 138px;
  margin-inline: auto;
  padding-top: 18px;
  opacity: 0;
  transition: 0.2s;
`;

const Wrapper = styled.div`
  width: 100%;

  div {
    padding-inline: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
`;

const ProductTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: var(--black-2);
  text-align: left;
`;

const ProductPrice = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: var(--white-1);
  padding: 5px;
  background-color: var(--black-3);
  border-radius: 5px;
`;

const ProductDescription = styled.p`
  font-size: 10px;
  color: var(--black-2);
  text-align: left;
  padding: 8px 15px 12px;
`;

const ProductButton = styled.span`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
  background: var(--blue);
  text-transform: uppercase;
  color: var(--white-1);
  font-size: 14px;
  font-weight: 600;
  padding: 8px;
`;
