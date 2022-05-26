const getPriceRangedProducts = (products, price) => {
  return products.filter((product) => product.discountedPrice <= price);
};

export { getPriceRangedProducts };
