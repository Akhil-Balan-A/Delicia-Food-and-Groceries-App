import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer/RestaurantShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ErrorPage from "../components/ErrorPage";
import RestCategory from "./RestCategory";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice.js";
const Restaurant = () => {
  const [showVegOnly, setShowVegOnly] = useState(false); //default set to non-veg
  const { restId } = useParams();

  const { restInfo, error } = useRestaurantMenu(restId);
   const dispatch = useDispatch();

    const handleAddToCart = (dish) => {
    dispatch(addItem(dish));
  };

  

  if(error) return <ErrorPage error={error} />
  if (!restInfo) return <Shimmer />; 

  const { name, cuisines, rating, deliveryTime, isVeg, place, masterDishList, menu } = restInfo;

  // Filter top picks: dishes with ration >= 4.8
  const allDishes = masterDishList;
  const topPicks = allDishes.filter((dish) => dish.rating >= 4.8);


  // Veg only filter
  const filteredDishes = showVegOnly ? allDishes.filter((dish)=>dish.isVeg) : allDishes;
  return (
    <div className="max-w-5xl mx-auto p-5 font-sans ">
      {/* Restaurant Basic Info */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{name} </h2>
        <p className="text-gray-700 mb-1">Cuisines:{cuisines} </p>
        <p className="text-gray-700 mb-1">Address:{place} </p>
        <p className="text-yellow-600 font-semibold mb-2">Rating:⭐{rating} </p>
        <div className="flex justify-center gap-5 font-semibold ">
          <span>Delivery Time:{deliveryTime}mins </span>
          <span>Type:{isVeg ? "Veg" : "Veg/Non-Veg"} </span>
        </div>
      </div>
      {/** Top Picks */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-3">Top Picks</h3>
        <br/>
        {topPicks.length > 0 ? (
          <div className="flex gap-5 overflow-x-auto pb-4">
            {topPicks.map((dish) => (
              <div key={dish.dishId} className="max-w-[220px] border border-gray-300 rounded-lg p-3 text-center flex-shrink-0">
                <img src={dish.image} alt={dish.name} className="w-[200px] h-[200px] object-cover rounded-md mb-2" />
                <h4 className="font-semibold text-lg">{dish.name}</h4>
                <p className="text-gray-700 text-lg font-semibold">₹{dish.price}/-</p>
                <button className=" px-5 m-2 py-2 bg-red-500 text-white rounded hover:bg-red-700 cursor-pointer transition duration-100"  onClick={() => handleAddToCart(dish)}>Add+</button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-600 text-xl">🍽️No top picks available.</p>
        )}
      </section>
      {/*Menu section with accordion*/} 
      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold ">Full Menu</h3> 
          <label className="flex items-center gap-2 cursor-pointer tex-lg">
            <input
              type="checkbox"
              checked={showVegOnly}//initially here it set to false
              onChange={()=>setShowVegOnly(!showVegOnly)}//onclick it will set to true and veg only menu will show. on click again it will set to false
              className="w-4 h-4"
            />
            Veg Only
          </label>
        </div>
        <hr/>
        <br className="my-2 shadow shadow-gray-400"  />
        <div className="">
          <RestCategory dishData={filteredDishes} menuData={menu}/>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
