import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },   
    reducers: {
        addItem: (state, action) => {//here state means cart state and action means payload which is the dish.
            const newItem = action.payload;
            //check if the item already exists in the cart
            const existingItem = state.items.find((item) => item.dishId === newItem.dishId);
            if (existingItem) {
                //if exists, just increase its quantity
                existingItem.quantity += 1;
                
            } else {
                
                state.items.push({...newItem, quantity: 1});
            }
        },
        removeItem: (state, action) => {
            const dishId = action.payload;
            const existingItem = state.items.find((item) => item.dishId === dishId);
            if(existingItem.quantity > 1){
                //Decrease quantity
                existingItem.quantity -= 1;
            } else {
                state.items = state.items.filter((item) => item.dishId !== action.payload);
            }
        },
        clearCart: (state) => {
            //state.items = []; code also works
            //state = []; wont make any difference since it effects on the local state not the global.
            state.items.length = 0; 
        },
        
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;   