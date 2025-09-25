import { useEffect, useState } from "react";
import { RESTAURANT_DATA_API as restaurantApi } from "../utils/constants";

const useRestaurantCards = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const fetchData = async () => {
    try {
      // ✅ handle offline immediately
      if (!navigator.onLine) {
        throw {
          status: 404,
          statusText: "Offline",
          data: "Please check your internet connection."
        };
      }

      const res = await fetch(restaurantApi);

      const jsonData = await res.json();
      const restaurantsApiData = jsonData?.restaurants || [];
      const dishesApiData = jsonData?.dishes || [];

      setRestaurants(restaurantsApiData);
      setAllRestaurants(restaurantsApiData);
      setDishes(dishesApiData);
    } catch (error) {
      console.log("❌ Error fetching restaurants:", error);

      setError(error);
    }
  };

  return { restaurants, allRestaurants, dishes, setRestaurants, error };
};

export default useRestaurantCards;
