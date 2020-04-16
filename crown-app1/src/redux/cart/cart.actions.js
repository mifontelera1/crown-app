import CartActionTypes from './cart.types.js';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CARD_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
