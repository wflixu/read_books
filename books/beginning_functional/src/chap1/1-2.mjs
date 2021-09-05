export let calculateTax = (value, percentValue) => {
  return (value / 100) * (100 + percentValue);
};

