import { v4 as uuid } from "uuid";
import { chair, lamp, shelf, coffeeTable } from "../../assets/index";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "category1",
    categoryImage: chair,
  },
  {
    _id: uuid(),
    categoryName: "category2",
    categoryImage: chair,
  },
  {
    _id: uuid(),
    categoryName: "category3",
    categoryImage: chair,
  },
  {
    _id: uuid(),
    categoryName: "category4",
    categoryImage: chair,
  },
];
