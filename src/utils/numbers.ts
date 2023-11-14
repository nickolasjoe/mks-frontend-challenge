export const formatCurrency = (value: string | number): string => {
  let v = value;
  if (typeof v === "string") v = Number(v);

  const result = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(v);

  return result;
};
