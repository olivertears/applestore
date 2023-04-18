export const calcMonthPayment = (price: number) => (Math.ceil(price / 12) - 0.01).toFixed(2);
