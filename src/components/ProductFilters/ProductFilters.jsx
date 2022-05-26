import "./ProductFilters.css";
import { actionTypes } from "../../constants/actionTypes";
import { useProduct } from "../../context/product-context";

const {
  SORT_BY,
  CATEGORY1,
  CATEGORY2,
  CATEGORY3,
  CATEGORY4,
  RATING,
  PRICE_RANGE,
  CLEAR_ALL,
} = actionTypes;

const ProductFilters = () => {
  const { productState, productDispatch } = useProduct();
  return (
    <aside className="filter-container">
      <div class="filter-header">
        <p>Filters</p>
        <button
          className="btn btn-link-primary"
          onClick={() => {
            return productDispatch({ type: CLEAR_ALL });
          }}
        >
          Clear
        </button>
      </div>
      <hr />
      <div className="filter-body">
        <div className="filter-type">
          <h3 className="filter-type-heading">Price : {productState.price}</h3>
          <datalist id="steplist">
            <option value="1000" label="1K"></option>
            <option value="2000" label="2K"></option>
            <option value="3000" label="3K"></option>
            <option value="4000" label="4K"></option>
            <option value="5000" label="5K"></option>
          </datalist>
          <input
            className="range-slider"
            type="range"
            min="1000"
            max="5000"
            step="1000"
            value={productState.price}
            onChange={(e) => {
              return productDispatch({
                type: PRICE_RANGE,
                payload: e.target.value,
              });
            }}
          />
        </div>
        <hr />
        <div className="filter-type">
          <h3 className="filter-type-heading">Categories</h3>
          <div className="checkbox-input">
            <label for="chairs-sofas">
              <input
                id="chairs-sofas"
                type="checkbox"
                checked={productState.categories.category1}
                value="category1"
                onChange={() => {
                  return productDispatch({
                    type: CATEGORY1,
                  });
                }}
              />{" "}
              Chairs & Sofas
            </label>
          </div>
          <div className="checkbox-input">
            <label for="shelves">
              <input
                id="shelves"
                type="checkbox"
                checked={productState.categories.category2}
                value="category2"
                onChange={() => {
                  return productDispatch({
                    type: CATEGORY2,
                  });
                }}
              />{" "}
              Storage & Shelves
            </label>
          </div>
          <div className="checkbox-input">
            <label for="lightings">
              <input
                id="lightings"
                type="checkbox"
                checked={productState.categories.category3}
                value="category3"
                onChange={() => {
                  return productDispatch({
                    type: CATEGORY3,
                  });
                }}
              />{" "}
              Lamp & Lightings
            </label>
          </div>
          <div className="checkbox-input">
            <label for="living-room">
              <input
                id="living-room"
                type="checkbox"
                checked={productState.categories.category4}
                value="category4"
                onChange={() => {
                  return productDispatch({
                    type: CATEGORY4,
                  });
                }}
              />{" "}
              Living Room
            </label>
          </div>
        </div>
        <hr />
        <div className="filter-type">
          <h3 className="filter-type-heading">Rating</h3>
          <div className="radio-input">
            <label for="four-plus">
              <input
                id="four-plus"
                type="radio"
                name="rating"
                value="4"
                checked={productState.rating === 4}
                onChange={(e) => {
                  return productDispatch({
                    type: RATING,
                    payload: e.target.value,
                  });
                }}
              />{" "}
              4 stars & above
            </label>
          </div>
          <div className="radio-input">
            <label for="three-plus">
              <input
                id="three-plus"
                type="radio"
                name="rating"
                value="3"
                checked={productState.rating === 3}
                onChange={(e) => {
                  return productDispatch({
                    type: RATING,
                    payload: e.target.value,
                  });
                }}
              />{" "}
              3 stars & above
            </label>
          </div>
          <div className="radio-input">
            <label for="two-plus">
              <input
                id="two-plus"
                type="radio"
                name="rating"
                value="2"
                checked={productState.rating === 2}
                onChange={(e) => {
                  return productDispatch({
                    type: RATING,
                    payload: e.target.value,
                  });
                }}
              />{" "}
              2 stars & above
            </label>
          </div>
          <div className="radio-input">
            <label for="one-plus">
              <input
                id="one-plus"
                type="radio"
                name="rating"
                value="1"
                checked={productState.rating === 1}
                onChange={(e) => {
                  return productDispatch({
                    type: RATING,
                    payload: e.target.value,
                  });
                }}
              />{" "}
              1 star & above
            </label>
          </div>
        </div>
        <hr />
        <div className="filter-type">
          <h3 className="filter-type-heading">Sort by</h3>
          <div className="radio-input">
            <label for="low-to-high">
              <input
                id="low-to-high"
                type="radio"
                name="sort"
                value="lowToHigh"
                checked={productState.sortBy === "LOW_TO_HIGH"}
                onChange={() => {
                  return productDispatch({
                    type: SORT_BY,
                    payload: "LOW_TO_HIGH",
                  });
                }}
              />{" "}
              Price: Low to High
            </label>
          </div>
          <div className="radio-input">
            <label for="high-to-low">
              <input
                id="high-to-low"
                type="radio"
                name="sort"
                checked={productState.sortBy === "HIGH_TO_LOW"}
                onChange={() => {
                  return productDispatch({
                    type: SORT_BY,
                    payload: "HIGH_TO_LOW",
                  });
                }}
              />{" "}
              Price: High to Low
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export { ProductFilters };
