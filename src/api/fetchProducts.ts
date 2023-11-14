const url =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC";

const fetchProducts = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

export default fetchProducts;
