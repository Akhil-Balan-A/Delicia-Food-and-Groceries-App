import {useState} from "react";
import FoodCarousel from "./FoodCarousel";
import Filter from "./Filter";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer/ShimmerMain.js";
import { useOutletContext } from "react-router-dom";
import ErrorPage from "./ErrorPage.js";
import useRestaurantCards  from "../utils/useRestaurantCards.js";


const Main = () => {
  const { searchTerm } = useOutletContext();
  const {restaurants, allRestaurants, dishes, setRestaurants, error} = useRestaurantCards();
  const [filterType, setFilterType] = useState("all"); // track filter state

  const filteredRestaurants = restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()));


  if(error) return <ErrorPage error={error}/>
  //showing spinner if the data is not loaded in the state else use shimmer UI
  if(!restaurants||restaurants.length === 0){
    return <Shimmer/>
  }

  const applyFilter = (type) => {
       if (type === "veg") {
      setRestaurants(allRestaurants.filter((r) => r.isVeg));
    } else if (type === "nonveg") {
      setRestaurants(allRestaurants.filter((r) => !r.isVeg));
    } else {
      setRestaurants(allRestaurants); // all restaurants
    }
    setFilterType(type);
  }

  const sortByRating = () => {
    const sorted = [...restaurants].sort((a, b) => b.rating - a.rating);
    setRestaurants(sorted)
  }
  const sortByPriceLowToHigh = () => {
    const sorted = [...restaurants].sort((a, b) => a.priceStartsFrom - b.priceStartsFrom);
    setRestaurants(sorted);
  }
  const sortByPriceHighToLow = () => {
    const sorted = [...restaurants].sort((a, b) => b.priceStartsFrom - a.priceStartsFrom);
    setRestaurants(sorted);
  }
  const sortByOffer = () => {
    const sorted = [...restaurants].sort((a, b) => b.offer - a.offer);
    setRestaurants(sorted)
  }
  const sortByDelivery = () => {
    const sorted = [...restaurants].sort((a,b)=>a.maxDeliveryTime-b.maxDeliveryTime);
    setRestaurants(sorted)
  }
  const onClearAllFilterAndSort = () => {
    setFilterType('all');
    setRestaurants(allRestaurants)
  }
  
  
  return (
    <div className="main">
      <section className="food-carousel-section">
        <h2>Trending Food Items</h2>
        <div className="food-item-carousel">
          {dishes.map((food) => (
            <FoodCarousel key={food.id} foodData={food} />
          ))}
        </div>
      </section>

      <div className="filer-section">
        <Filter
          onSortByRating={sortByRating}
          onSortByPriceLowToHigh={sortByPriceLowToHigh}
          onSortByPriceHighToLow={sortByPriceHighToLow}
          onFilterByVegOnly={applyFilter}
          onFilterByNonVeg={applyFilter}
          onSortByOffer={sortByOffer}
          onSortByDelivery={sortByDelivery}
          onClearAllFilterAndSort={onClearAllFilterAndSort}
        
        />
    
      </div>

      <div className="restaurant-cards-section">
        {filteredRestaurants.map((res) => (
          <RestaurantCards key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Main;
