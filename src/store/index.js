import { reducer } from "./reducers";
import { numberAdd2 } from "./actions/number";

const inicialState = {
  cart: [],
  products: [],
  user: null,
  number: 0,
};

export { reducer, inicialState, numberAdd2 };
