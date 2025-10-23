import { useState, useContext } from "react";
import FoodCarousel from "./FoodCarousel";
import Filter from "./Filter";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer/ShimmerMain.js";
import { useOutletContext } from "react-router-dom";
import ErrorPage from "./ErrorPage.js";
import useRestaurantCards from "../utils/useRestaurantCards.js";
import withPromotedLable from "../hoc/withPromotedLabel.js";
import UserContext from "../context/UserContext.js";
const Main = () => {
  ///user context part
  const { loggedinUser, setUserName } = useContext(UserContext);

  const { searchTerm } = useOutletContext();
  const { restaurants, allRestaurants, dishes, setRestaurants, error } =
    useRestaurantCards();
  const [filterType, setFilterType] = useState("all"); // track filter state

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //promoted label (Higher order component pattern)
  const PromotedRestaurantCards = withPromotedLable(RestaurantCards);

  if (error) return <ErrorPage error={error} />;
  //showing spinner if the data is not loaded in the state else use shimmer UI
  if (!restaurants || restaurants.length === 0) {
    return <Shimmer />;
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
  };

  const sortByRating = () => {
    const sorted = [...restaurants].sort((a, b) => b.rating - a.rating);
    setRestaurants(sorted);
  };
  const sortByPriceLowToHigh = () => {
    const sorted = [...restaurants].sort(
      (a, b) => a.priceStartsFrom - b.priceStartsFrom
    );
    setRestaurants(sorted);
  };
  const sortByPriceHighToLow = () => {
    const sorted = [...restaurants].sort(
      (a, b) => b.priceStartsFrom - a.priceStartsFrom
    );
    setRestaurants(sorted);
  };
  const sortByOffer = () => {
    const sorted = [...restaurants].sort((a, b) => b.offer - a.offer);
    setRestaurants(sorted);
  };
  const sortByDelivery = () => {
    const sorted = [...restaurants].sort(
      (a, b) => a.maxDeliveryTime - b.maxDeliveryTime
    );
    setRestaurants(sorted);
  };
  const onClearAllFilterAndSort = () => {
    setFilterType("all");
    setRestaurants(allRestaurants);
  };

  return (
    <div className="main">
      <section className="p-5 ">
        <div>
          <label>User:</label>
          <input
            type="text"
            placeholder="Enter user name"
            className="border rounded ml-1 p-2"
            value={loggedinUser}
            onChange={(e) => {
              setUserName(e.target.value);
              localStorage.setItem("user", e.target.value);
            }}
          />
        </div>
        <h2 className="mt-5 text-xl font-semibold">Trending Food Items</h2>
        <div className="flex overflow-x-auto scroll-smooth  bg-gray-300">
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

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 mt-5 px-[100px] py-5">
        {filteredRestaurants.length === 0 ? (
          // 🟢 Show message if no results
          <div className="col-span-full text-center py-10">
            <h2 className="text-2xl font-semibold text-gray-700">
              😕 No restaurants found
            </h2>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filters.
            </p>
          </div>
        ) : (
          // 🟢 Show restaurant cards if results exist
          filteredRestaurants
            .sort((a, b) => b.promoted - a.promoted)
            .map((res) =>
              res.promoted ? (
                <PromotedRestaurantCards key={res.id} resData={res} />
              ) : (
                <RestaurantCards key={res.id} resData={res} />
              )
            )
        )}
      </div>
    </div>
  );
};

export default Main;
