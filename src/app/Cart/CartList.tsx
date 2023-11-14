import styled from "styled-components";

import CartItem from "./CartItem";
import { Product } from "../Products/ProductItem";
import useMKSContext from "../../hooks/useMKSContext";

const CartList = () => {
  const { selectedProducts } = useMKSContext();

  return (
    <Wrapper>
      {selectedProducts.map((product: Product) => (
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
  height: 450px;
  overflow-y: scroll;
`;
