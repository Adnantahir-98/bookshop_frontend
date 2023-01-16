import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    // updateProductQuantity: (state, action) => {
    //   if(action.payload.quantity <= 0){
    //     action.payload.quantity = 1;
    //   }
    //   const id = action.payload.id;
    //   const type = action.payload.type;
    //   const index = state.cart.findIndex(p=>p._id === id);
    //   const currentProduct = state.cart[index];
      
    //   // Increase
    //   if(type === "up"){
    //     currentProduct.quantity += 1;
    //     state.total += currentProduct.price;
    //   }
    //   // Decrease
    //   if(type === 'down' && state.cart[index].quantity > 1){
    //     currentProduct.quantity -= 1;
    //     state.total -= state.cart[index].price;
    //   }
    //   // Update Amount
    //   if(type === 'updateQuantity'){
    //     if(currentProduct.quantity > action.payload.quantity){
    //       state.total -= (currentProduct.quantity - action.payload.quantity) * currentProduct.price;
    //     }else{
    //       state.total += (action.payload.quantity - currentProduct.quantity) * currentProduct.price;
    //     }
    //     currentProduct.quantity = action.payload.quantity
    //   }

    // },
    removeProduct: (state, action) => {
      const index = state.products.findIndex(product=>product._id === action.payload)
      state.quantity -= 1;
      state.total -= state.products[index].price * state.products[index].quantity;
      state.products.splice(index, 1);
      
    }
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
