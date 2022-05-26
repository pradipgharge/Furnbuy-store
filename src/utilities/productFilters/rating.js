const getRatedProducts = (products, rating) => {
  if (rating) {
    return products.filter((product) => product.rating >= rating);
  }
  return products;
};

export { getRatedProducts };
