import { publicRequest, userRequest } from "../requestMethods";
import { 
  registerStart,
  registerSuccess,
  registerFailure,
  loginFailure, 
  loginStart, 
  loginSuccess } from "./userSlice"
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productSlice";

import {
  getOrderFailure,
  getorderstart,
  getordersuccess,
  deleteOrderFailure,
  deleteorderstart,
  deleteordersuccess,
  updateOrderFailure,
  updateorderstart,
  updateordersuccess,
  addorderstart,
  addordersuccess,
  addOrderFailure,
} from "./orderSlice";


// Auth...
export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post("/auth/login", user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}

export const register = (username, email, password) => async (dispatch) => {
  dispatch(registerStart())
  try {
    const res = await publicRequest.post(
      '/auth/register',
      { 'username': username, 'email': email, 'password': password })
      dispatch(registerSuccess(res.data), loginSuccess(res.data), res.data.save())

    localStorage.setItem('user', JSON.stringify(res.data))
    console.log(res.data)
  } catch (error) {
    dispatch(registerFailure())
  }
}


// Products...
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(res));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
// Add
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};


// Orders...
export const getOrders = async (dispatch) => {
  dispatch(getorderstart());
  try {
    const res = await publicRequest.get("/orders");
    dispatch(getordersuccess(res.data));
  } catch (err) {
    dispatch(getOrderFailure());
  }
};

export const deleteOrder = async (id, dispatch) => {
  dispatch(deleteorderstart());
  try {
    // const res = await userRequest.delete(`/orders/${id}`);
    dispatch(deleteordersuccess(id));
  } catch (err) {
    dispatch(deleteOrderFailure());
  }
};

export const updateOrder = async (id, order, dispatch) => {
  dispatch(updateorderstart());
  try {
    // update
    dispatch(updateordersuccess({ id, order }));
  } catch (err) {
    dispatch(updateOrderFailure());
  }
};
// Add
export const addOrder = async (order, dispatch) => {
  dispatch(addorderstart());
  try {
    const res = await userRequest.post(`/orders`, order);
    dispatch(addordersuccess(res.data));
  } catch (err) {
    dispatch(addOrderFailure());
  }
};

