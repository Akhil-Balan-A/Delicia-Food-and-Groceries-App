import Shimmer from "./Shimmer/GroceryShimmer";
import { GROCERY_DATA_API as groceryApi } from "../utils/constants";
import { useEffect, useState } from "react";
import GroceryCards from "./GroceryCards";
import ErrorPage from "./ErrorPage";

const Grocery = () => {
    const [groceryData, setGroceryData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const timeout =setTimeout(() => {
            getGroceryData();
        }, 500);
        return ()=>clearTimeout(timeout);
    }, []);

    const getGroceryData = async () => {
      try {
        //✅ handle offline immediately
        if (!navigator.onLine) {
          throw {
            status: 404,
            statusText: "Offline",
            data:"Please check your internet connection"
          }
        }
            const res = await fetch(groceryApi);
            const jsonData = await res.json();
            const products = jsonData?.groceries || [];
            setGroceryData(products);            
        } catch (error) {
            console.log("Error fetching grocery data:", error);
            setError(error);

        }
        
    };
    
    if(error)return <ErrorPage error={error} />
    if(!groceryData||groceryData.length===0) return <Shimmer />

    return (
    <div className="grocery-cards-section">
      {groceryData.map((item) => (
        <GroceryCards key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Grocery;
