import Search from "./Search.js";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../context/UserContext.js";
import {useSelector} from 'react-redux';



const Header = ({ onSearch }) => {
  let signIn = "Sign In";
  const [isSignedIn, setIsSignedIn] = useState(signIn);
  const onlineStatus = useOnlineStatus();
  //show alert only when status changes
  useEffect(() => {
    if (!onlineStatus) {
      alert("You are offline. Please check your internet connection.");
    }
  }, [onlineStatus]);

  const { loggedinUser } = useContext(UserContext);
  

  //subscribing to the store using useSelector
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="flex items-center justify-between px-5 py-2 bg-red-700 text-white sticky top-0 z-[9999] shadow-md">
      <Link to="/" className="logo-container-link">
        <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-300">
          <div className="text-5xl leading-none transform transition-transform hover:scale-110 pb-3">
            🍔
          </div>
          <div className="text-xl font-bold uppercase tracking-wide mr-2">
            Delicia{" "}
            <small style={{ borderRadius: "50%", backgroundColor: "white" }}>
              {onlineStatus ? "🟢" : "🔴"}
            </small>
          </div>
        </div>
      </Link>
      <div className="search-container">
        <Search onSearch={onSearch} />
      </div>
      <div className="nav-container">
        <ul className="flex flex-wrap gap-5 ml-2 list-none">
          <li>
            <Link
              className="flex item-center gap-1 font-medium text-white hover:text-yellow-300"
              to="/"
            >
              <i className="fas fa-home pt-1"></i> Home
            </Link>
          </li>
          <li>
            <Link
              className="flex item-center gap-1 font-medium text-white hover:text-yellow-300"
              href="#"
            >
              <i className="fas fa-tags pt-1"></i> Offer
            </Link>
          </li>
          <li>
            <Link
              className="flex item-center gap-1 font-medium text-white hover:text-yellow-300"
              to="/grocery"
            >
              <i className="fa fa-shopping-basket pt-1"></i> Grocery
            </Link>
          </li>
          <li>
            <Link
              className="flex item-center gap-1 font-medium text-white hover:text-yellow-300"
              to="#"
              onClick={() => {
                setIsSignedIn(
                  isSignedIn === "Sign In" ? "Sign Out" : "Sign In"
                );
              }}
            >
              <i className="fas fa-user pt-1"></i>
              {isSignedIn}
              <p> User: {loggedinUser}</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-1 font-medium text-white hover:text-yellow-300 relative"
              to="/cart"
            >
              <div className="relative">
                {/* Cart Icon */}
                <i className="fas fa-shopping-cart text-xl"></i>

                {/* Badge */}
                {cartItems.length>0 && (
                  <span className="absolute -top-3 -right-1 bg-green-600/60  text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                    {cartItems.length}
                  </span>
                )}
              </div>
              <span >Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
