

import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../redux/cartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  
  // Accessing cart items from Redux store
  const cartItems = useSelector((store) => store.cart.items);

  // Function to remove a single item
  const handleRemoveItem = (dishId) => {
    dispatch(removeItem(dishId));
  };

  // Function to clear all items
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // If cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-10 mb-50">
        <h2 className="text-2xl font-semibold text-gray-700 ">🛒 Your cart is empty</h2>
            <p className="text-gray-500 mt-2">Add some delicious dishes to get started!</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5 bg-gray-200 shadow-lg rounded-lg mb-10 ">
      <h1 className="text-3xl font-bold mb-6 text-center underline">🛍️ Your Cart</h1>

      {/* List of Cart Items */}
      <ul className="divide-y divide-gray-300">
        {cartItems.map((item, index) => (
          <li key={index} className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500">₹{item.price}</p>
                <p className="text-gray-500">Qty: {item.quantity}</p>

              </div>
            </div>
            <button
              onClick={() => handleRemoveItem(item.dishId)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

          {/* Total and Clear Cart Button */}
        <hr/>
      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          Total: ₹
          {cartItems.reduce((acc, curr) => acc + (curr.price*curr.quantity || 0), 0)}
        </h2>
        <button
          onClick={handleClearCart}
          className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-md transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
