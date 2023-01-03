import CART_REDUCER_TYPES from "./cartTypes";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_REDUCER_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case CART_REDUCER_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
