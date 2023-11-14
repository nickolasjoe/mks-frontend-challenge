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

  if (isLoading) return <p>Carregando...</p>;

  if (isError) return <p>Error!</p>;

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
