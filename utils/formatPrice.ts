export const formatPrice = (amount: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};