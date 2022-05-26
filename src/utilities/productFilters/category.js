const getCategorizedProducts = (products, categories) => {
  const categorizedList = [];
  let flag = false;
  for (let category in categories) {
    if (categories[category]) {
      flag = true;
      let newList = products.filter(
        (product) => product.categoryName === category
      );
      categorizedList.push(...newList);
    }
  }
  return flag ? categorizedList : products;
};

export { getCategorizedProducts };
