module.exports = () => {
  const data = {
    products: [],
  };

  for (let i = 1; i <= 1000; i++) {
    data.products.push({
      id: i,
      name: `Product ${i}`,
      price: 123.45,
    });
  }

  return data;
};
