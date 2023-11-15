import styled from "styled-components";

import CartItem from "./CartItem";
import useMKSContext from "../../hooks/useMKSContext";
import { SelectedProduct } from "../../context/MKSContext";

const CartList = () => {
  const { selected } = useMKSContext();

  return (
    <Wrapper>
      {selected.map((product: SelectedProduct) => (
        <CartItem key={product.id} product={product} />
      ))}
    </Wrapper>
  );
};

export default CartList;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 40vh;
  padding-right: 20px;
  overflow-x: hidden;
  overflow-y: scroll;

  @media (max-width: 500px) {
    height: 350px;
  }
`;
