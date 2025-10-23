import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";//cartReducer — comes from the default export (export default cartSlice.reducer)
//Load saved state from local storage
const loadState = () => {
    try {
      const serializedState = localStorage.getItem('cartState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
        console.error("Error loading cart state from localStorage", err);
        return undefined;
    }
}
//Save state to local storage whenever it changes
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartState', serializedState);
    } catch (err) {
        console.error("Error saving cart state to localStorage", err);
    }
}

//create store and preload cart state from local storage

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },

    preloadedState: loadState(),//load from local storage on app startup
  
});

// Whenever the store updates, save new cart state
appStore.subscribe(() => {
    saveState({
        cart: appStore.getState().cart
    });
});


export default appStore;