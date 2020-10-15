import * as actions from "./actionTypes";

import products from "./api/products";

function reducer(state = [...products], action) {
  switch (action.type) {
    case actions.UPDATE_FILTER:
      return products.filter((product) => {
        console.log(
          product.title,
          action.payload.term
        );
        return (
          product.title
            .toLowerCase()
            .indexOf(
              action.payload.term.toLowerCase()
            ) > -1
        );
      });
    default:
      return state;
  }
}

export default reducer;
