import { useEffect,useState } from "react"
import {RESTAURANT_DATA_API as restaurantApi} from '../utils/constants'
const useRestaurantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState(null);
  const [error, setError] = useState(null);//track error

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchMenu();
    }, 400)
    return () => clearTimeout(timeout);  // Clears timeout if component unmounts early
  }, []);


  const fetchMenu = async () => {
    try {
      if(!navigator.onLine){
        throw {
          status: 404,
          statusText: "Offline",
          data: "Unable to fetch data"
        };
      }
      const data = await fetch(restaurantApi);
      
      const jsonData = await data.json();
      const restApiData = jsonData?.restaurants;
      const restaurant = restApiData.find((res) => String(res.id) === restId);
      setRestInfo(restaurant);
          
    } catch (error) {
      console.log("❌Error fetching menu:", error);
      setError(error);
          
    }
  };

  return {restInfo,error};
}

export default useRestaurantMenu;