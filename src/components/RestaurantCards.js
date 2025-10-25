import {Link} from "react-router-dom";
const RestaurantCards = (props) => {
  const { resData } = props;
  console.log(resData);
  const { image, alt, name, rating, deliveryTime, cuisines, place,offer,priceStartsFrom,id} =
    resData ?? {};
  return (
    <section >
      <div key={id} className="bg-white p-3 border border-gray-300 shadow-md rounded flex flex-col justify-between gap-5 cursor-pointer m-1 hover:scale-105 hover:border-gray-500 transition-transform duration-200 h-full">
        {/*make the entire card clickable*/}
        <Link to={`/restaurant/${id}`} className="no-underline text-black">
         <div className="relative" >
          <img src={image} alt={alt} className="w-full h-[220px] object-cover rounded mb-3"/>
          {/* Offer Badge */}
          {offer && (
            <div
              className="absolute bottom-2 left-2 bg-orange-700/50 text-white py-1 px-2 rounded text-xs font-semibold"
            >
              🏷️ Items offered at {offer}% <br/>
              ₹ Price starts from Rs.{priceStartsFrom}.
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-semibold ">{name}</h3>
        <h4 className="text-base text-green-700">
          ⭐{rating}| {deliveryTime}
        </h4>
        <p className="text-sm font-semibold text-gray-700">😋{cuisines}</p>
        <p className="text-sm font-semibold text-gray-700">📍{place}</p>
      </Link>
      </div>
    </section>
  );
};

export default RestaurantCards;