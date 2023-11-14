export const formatCurrency = (
  value: string | number,
  count?: number,
): string => {
  let v = value;
  if (typeof v === "string") v = Number(v);
  if (count) v *= count;

  const result = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(v);

  return result;
};
