import { ADD_TO_CART, REMOVED_TO_CART } from "../Constants";

export const addToCart = (data) => {
  console.warn("action", data);
  // console.warn("action",data)
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = () => {
  console.log("Action removed to cart ");
  return {
    type: "REMOVED_TO_CART",
  };
};
