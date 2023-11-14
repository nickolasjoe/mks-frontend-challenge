import styled from "styled-components";

import ProductList from "./ProductList";

const Products = () => {
  return (
    <Wrapper>
      <ProductList />
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div`
  min-height: calc(100vh - 131.59px);
  display: grid;
  place-items: center;
  padding: 15px;
`;
