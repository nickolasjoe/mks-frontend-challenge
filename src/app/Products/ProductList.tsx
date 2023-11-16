import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import fetchProducts from "../../api";
import ProductItem from "./ProductItem";
import { Product } from "../../context/MKSContext";

const ProductList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <Spinner />;

  if (isError) return <p>Um erro ocorreu!</p>;

  return (
    <Wrapper>
      {data.products.map((product: Product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Wrapper>
  );
};

export default ProductList;

const Wrapper = styled.ul`
  max-width: 938px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Spinner = styled.ul`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid rgba(150, 150, 150, 0.1);
  border-top-color: var(--blue);
  animation: spin 1s linear infinite;
`;
