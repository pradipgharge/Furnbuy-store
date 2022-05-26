import { actionTypes } from "../constants/actionTypes";

const initialProducts = {
  data: [],
  sortBy: "",
  price: 5000,
  rating: "",
  categories: {
    category1: false,
    category2: false,
    category3: false,
    category4: false,
  },
};

const {
  LOAD_DATA,
  SORT_BY,
  CATEGORY1,
  CATEGORY2,
  CATEGORY3,
  CATEGORY4,
  RATING,
  PRICE_RANGE,
  CLEAR_ALL,
} = actionTypes;

const productReducer = (productState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...productState,
        data: [...action.payload],
      };
    case SORT_BY:
      return { ...productState, sortBy: action.payload };
    case CATEGORY1:
      return {
        ...productState,
        categories: {
          ...productState.categories,
          category1: !productState.categories.category1,
        },
      };
    case CATEGORY2:
      return {
        ...productState,
        categories: {
          ...productState.categories,
          category2: !productState.categories.category2,
        },
      };
    case CATEGORY3:
      return {
        ...productState,
        categories: {
          ...productState.categories,
          category3: !productState.categories.category3,
        },
      };
    case CATEGORY4:
      return {
        ...productState,
        categories: {
          ...productState.categories,
          category4: !productState.categories.category4,
        },
      };
    case RATING:
      return {
        ...productState,
        rating: parseInt(action.payload),
      };
    case PRICE_RANGE:
      return { ...productState, price: action.payload };
    case CLEAR_ALL:
      return {
        ...productState,
        sortBy: "",
        categories: {
          category1: false,
          category2: false,
          category3: false,
          category4: false,
        },
        price: 5000,
        rating: "",
      };
  }
};

export { productReducer, initialProducts };
