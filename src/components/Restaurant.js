import "../styles/restaurant.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer/RestaurantShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ErrorPage from "../components/ErrorPage";
const Restaurant = () => {
  const [showVegOnly, setShowVegOnly] = useState(false); //default set to non-veg
  const { restId } = useParams();

  const { restInfo,error } = useRestaurantMenu(restId);

  if(error) return <ErrorPage error={error} />
  if (!restInfo) return <Shimmer />; 

  const { name, cuisines, rating, deliveryTime, isVeg, place, Menu } = restInfo;

  // Filter top picks: dishes with ration >= 4.8
  const topPicks = Menu.filter((dish) => dish.rating >= 4.8);

  // apply filter based toggle state
  const filteredMenu = showVegOnly ? Menu.filter((dish)=>dish.isVeg) : Menu;
  return (
    <div className="restaurant-container">
      {/* Restaurant Basic Info */}
      <div className="restaurant-header">
        <h2>{name} </h2>
        <p>Cuisines:{cuisines} </p>
        <p>Address:{place} </p>
        <p className="rating">Rating:⭐{rating} </p>
        <div className="restaurant-meta">
          <span>Delivery Time:{deliveryTime}mins </span>
          <span>Type:{isVeg ? "Veg" : "Veg/Non-Veg"} </span>
        </div>
      </div>
      {/** Top Picks */}
      <section className="top-picks">
        <h3>Top Picks</h3>
        <br/>
        {topPicks.length > 0 ? (
          <div className="carousel">
            {topPicks.map((dish) => (
              <div key={dish.dishId} className="dish-card">
                <img src={dish.image} alt={dish.name} />
                <h4>{dish.name}</h4>
                <p>₹{dish.price}/-</p>
                <button>Add</button>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "red",fontSize:"20px" }} >No top picks available.</p>
        )}
      </section>
      {/** Menu section*/}
      <section className="restaurant-menu">
        <div className="menu-header">
          <h3>Full Menu</h3> 
          <label className="veg-toggle">
            <input
              type="checkbox"
              checked={showVegOnly}//initially here it set to false
              onChange={()=>setShowVegOnly(!showVegOnly)}//onclick it will set to true and veg only menu will show. on click again it will set to false
            />
            Veg Only
          </label>
        </div>
        <br />
        {filteredMenu.length > 0 ? (
          <div className="menu-list">
            {filteredMenu.map((item) => (
              <div key={item.dishId} className="menu-item">
                <img src={item.image} alt={item.name} />
                <div className="menu-item-details">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <span>₹{item.price}/-</span>
                  <button>Add</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "red",fontSize:"20px" }}>No menu available for this restaurant.</p>
        )}
      </section>
    </div>
  );
};

export default Restaurant;
