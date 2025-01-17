import { createSlice } from '@reduxjs/toolkit';
import { CartSliceState, Status } from './../types/index';
import {
  changeQuantityProduct,
  deleteProductFromCart,
  getCart,
} from './asyncActions';

const initialState: CartSliceState = {
  cartId: null,
  totalPrice: 0,
  items: [],
  status: Status.IDLE,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearLocalCart: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state) => {
      state.status = Status.LOADING;
      state.cartId = null;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.cartId = action.payload.id;
      state.items = action.payload.cartItems;
      state.totalPrice = action.payload.totalPrice;
    });
    builder.addCase(getCart.rejected, (state) => {
      state.status = Status.ERROR;
      state.cartId = null;
    });

    builder.addCase(deleteProductFromCart.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(deleteProductFromCart.fulfilled, (state, action) => {
      state.items = state.items.filter(
        (item) => item.products!.id !== action.payload.productId,
      );
      state.totalPrice = action.payload.returnedPrice;
      state.status = Status.SUCCESS;
    });
    builder.addCase(deleteProductFromCart.rejected, (state) => {
      state.status = Status.ERROR;
    });

    builder.addCase(changeQuantityProduct.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(changeQuantityProduct.fulfilled, (state, action) => {
      state.items = state.items.map((item) => {
        if (item.products!.id === action.payload.productId) {
          item.quantity = action.payload.returnedQuantity;
        }
        return item;
      });
      state.totalPrice = action.payload.returnedPrice!;
      state.status = Status.SUCCESS;
    });
    builder.addCase(changeQuantityProduct.rejected, (state) => {
      state.status = Status.ERROR;
    });
  },
});

export const { clearLocalCart } = cartSlice.actions;

export default cartSlice.reducer;
