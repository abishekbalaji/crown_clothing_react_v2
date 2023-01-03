import CART_REDUCER_TYPES from "./cartTypes";
import { createAction } from "../../utils/helpers/reducer";

export const setIsCartOpen = () =>
  createAction(CART_REDUCER_TYPES.SET_IS_CART_OPEN);

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => productToAdd.id === item.id
  );
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const removeCartItem = (cartItems, itemToRemove) => {
  const newCartItems = cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
  return newCartItems.filter((item) => item.quantity > 0);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_REDUCER_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const newCartItems = removeCartItem(cartItems, itemToRemove);
  return createAction(CART_REDUCER_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearCartItem = (cartItems, itemToClear) => {
  const newCartItems = cartItems.filter((item) => item.id !== itemToClear.id);
  return createAction(CART_REDUCER_TYPES.SET_CART_ITEMS, newCartItems);
};

export const emptyCart = () =>
  createAction(CART_REDUCER_TYPES.SET_CART_ITEMS, []);
