import Search from "./Search.js";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Header = ({onSearch}) => {
  let signIn = "Sign In";
  const [isSignedIn, setIsSignedIn] = useState(signIn);
  const onlineStatus = useOnlineStatus();
  //show alert only when status changes
  useEffect(() => {
    if(!onlineStatus){
      alert("You are offline. Please check your internet connection.");
    } 
  }, [onlineStatus]);
  
  return (
    <div className="header">
      <Link to="/" className="logo-container-link">
      <div className="logo-container">
        <div className="logo">🍔</div>
          <div className="brand">Delicia <small style={{ borderRadius: "50%", backgroundColor: "white"}}>{onlineStatus ?"🟢":"🔴" }</small></div>
      </div>
        </Link>
      <div className="search-container">
        <Search onSearch={onSearch} />
      </div>
      <div className="hamburger">
        <i className="fas fa-bars"></i>
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>
            <Link to="/">
            <i className="fas fa-home"></i> Home
            </Link>
            
          </li>
          <li>
            <a href="#">
              <i className="fas fa-tags"></i> Offer
            </a>
          </li>
              <li>
            <Link to="/grocery">
              <i className="fa fa-shopping-basket"></i> Grocery
            </Link>
          </li>
          <li>
            <a href="#" className="signIn-button" onClick={() => {setIsSignedIn(isSignedIn === "Sign In" ? "Sign Out" : "Sign In")}}>
              <i className="fas fa-user"></i>{isSignedIn}
            </a>
          </li>
          <li>
            <a href="#" >
              <i className="fas fa-shopping-cart"></i> Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header