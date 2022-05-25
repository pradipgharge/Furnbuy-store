const productReducer = (productState, action) => {
  const actionType = action.type;
  switch (actionType) {
    case "LOAD_DATA":
      return {
        ...productState,
        data: [...action.payload],
      };
  }
};

export { productReducer };
