import {
  addToCartError,
  addToCartRequest,
  addToCartSuccess,
  decrementSuccess,
  deleteSuccess,
  incrementSuccess,
} from "../reducers/CartReducer";

export const CartAction = (selectedProduct) => {
  return async (dispatch) => {
    try {
      dispatch(addToCartRequest());
      dispatch(addToCartSuccess(selectedProduct));
    } catch (error) {
      dispatch(addToCartError());
      console.log(`🚀 ~ file: CartAction.js:6 ~ return ~ error:\n =>`, error);
    }
  };
};

export const IncrementAction = (_id) => {
  return async (dispatch) => {
    try {
      dispatch(incrementSuccess(_id));
    } catch (error) {
      console.log(`🚀 ~ file: CartAction.js:21 ~ return ~ error:\n =>`, error);
    }
  };
};

export const DecrementAction = (_id) => {
  return async (dispatch) => {
    try {
      dispatch(decrementSuccess(_id));
    } catch (error) {
      console.log(`🚀 ~ file: CartAction.js:36 ~ return ~ error:\n =>`, error);
    }
  };
};

export const DeleteCartAction = (_id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteSuccess(_id));
    } catch (error) {
      console.log(`🚀 ~ file: CartAction.js:47 ~ return ~ error:\n =>`, error);
    }
  };
};
