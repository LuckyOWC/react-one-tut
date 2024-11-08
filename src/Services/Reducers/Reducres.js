import { ADD_TO_CART, REMOVED_TO_CART } from "../Constants";
const initialState = {
  cardData: [],
};
export default function cardItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("reducer", action);
      return [...state, { cardData: action.data }];
    case REMOVED_TO_CART:
      console.warn("Removed to cart", action);
      state.pop();
      return [...state];
    default:
      return state;
  }
}
