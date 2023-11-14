import styled from "styled-components";

import Bag from "../../assets/bag.svg?react";

import { formatCurrency } from "../../utils/numbers";
import useMKSContext from "../../hooks/useMKSContext";

export type Product = {
  id: number;
  name: "string";
  description: "string";
  photo: "string";
  price: "string";
};

export type TProduct = {
  product: Product;
};

const ProductItem = ({ product }: TProduct) => {
  const { photo, name, price, description } = product;

  const { selectedProducts, setSelectedProducts, setIsNavbarOpen } =
    useMKSContext();

  return (
    <ProductCard
      onClick={() => {
        setSelectedProducts([...selectedProducts, product]);
        setIsNavbarOpen(true);
      }}
    >
      <button>
        <ProductImg src={photo} alt={name} />
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

const ProductImg = styled.img`
  max-height: 138px;
  margin-top: 18px;
  margin-bottom: 15px;
  align-self: center;
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
