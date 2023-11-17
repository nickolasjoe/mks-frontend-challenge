import styled from "styled-components";

import Counter from "./Counter";
import { formatCurrency } from "../../../utils/numbers";
import useMKSContext from "../../../hooks/useMKSContext";
import { SelectedProduct } from "../../../context/MKSContext";

const CartItem = ({ product }: { product: SelectedProduct }) => {
  const { selected, setSelected } = useMKSContext();

  const handleClick = (product: SelectedProduct) => {
    setSelected(selected.filter((obj) => obj.id !== product.id));
  };

  const calculateTotalPrice = () =>
    formatCurrency(Number(product.price) * product.quantity);

  return (
    <CartCard>
      <CartImage src={product.photo} alt={product.name} />
      <CartProduct>{product.name}</CartProduct>
      <Counter product={product} />
      <TotalPrice>{calculateTotalPrice()}</TotalPrice>
      <CloseButton onClick={() => handleClick(product)}>X</CloseButton>
    </CartCard>
  );
};

export default CartItem;

const CartCard = styled.li`
  grid-row: 1;
  grid-column: 1;
  background-color: var(--white-1);
  border-radius: 8px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  position: relative;
  @media (max-width: 380px) {
    padding: 10px;
    gap: 5px;
  }
`;

const CartImage = styled.img`
  max-height: 60px;
`;

const CartProduct = styled.p`
  font-size: 13px;
  line-height: 1.3;
  color: var(--black-2);
`;

const TotalPrice = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: var(--black-3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -1px;
  right: -1px;
  font-size: 12px;
  font-weight: 300;
  color: var(--white-1);
  background-color: var(--black-3);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: 0.2s ease-out;
  &:hover {
    color: var(--black-3);
    background-color: var(--white-1);
  }
`;
