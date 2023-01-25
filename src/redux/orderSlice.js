import { createSlice } from "@reduxjs/toolkit";


export const orderslice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getorderstart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getordersuccess: (state, action) => {
      state.isFetching = false;
      state.orders = action.payload;
    },
    getOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteorderstart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteordersuccess: (state, action) => {
      state.isFetching = false;
      state.orders.splice(
        state.orders.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateorderstart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateordersuccess: (state, action) => {
      state.isFetching = false;
      state.orders[
        state.orders.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.Order;
    },
    updateOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //Add 
    addorderstart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addordersuccess: (state, action) => {
      state.isFetching = false;
      state.orders.push(action.payload);
    },
    addOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getorderstart,
  getordersuccess,
  getOrderFailure,
  deleteorderstart,
  deleteordersuccess,
  deleteOrderFailure,
  updateorderstart,
  updateordersuccess,
  updateOrderFailure,
  addorderstart,
  addordersuccess,
  addOrderFailure,
} = orderslice.actions;

export default orderslice.reducer;
