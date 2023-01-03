import { createSelector } from "reselect";

const cartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [cartReducer],
  (cartSlice) => cartSlice.isCartOpen
);

export const selectCartItems = createSelector(
  [cartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => (total += item.quantity * item.price), 0)
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((count, item) => (count += item.quantity), 0)
);
