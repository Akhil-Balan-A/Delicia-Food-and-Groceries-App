import { Link } from "react-router-dom";

const GroceryCards = ({ product }) => {
  // Destructure all product fields safely
  const {
    id,
    name,
    shortDescription,
    brand,
    rating,
    deliveryTime,
    QuantityDescription,
    mrpPrice,
    offerPercentage,
    category,
    imageId,
  } = product ?? {};

  // Build the image URL
  const image = imageId
    ? `https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/${imageId}`
    : "https://placehold.co/304x200?text=No+Image";

  // Calculate discounted price if offerPercentage present
  const discountedPrice =
    offerPercentage && mrpPrice
      ? (mrpPrice - (mrpPrice * offerPercentage) / 100).toFixed(2)
      : null;

  return (
    <section className=" mx-auto w-[280px] ">
      <div className="border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition duration-200 flex flex-col h-full transform hover:scale-105">
        {/* Image Section */}
        <div className="relative w-full h-[200px] overflow-hidden rounded-md">
          <img
            src={image}
            alt={id}
            className="w-full h-full object-cover rounded-md"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/304x200?text=No+Image";
            }}
          />
          {offerPercentage && (
            <div className="absolute top-2 left-2 bg-orange-800/85 text-white text-xs font-bold px-2 py-1 rounded shadow">
              🏷️ {offerPercentage}% OFF
            </div>
          )}
        </div>

        {/* Card Details */}
        <div className="mt-3 flex flex-col gap-1">
          <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
          {shortDescription && (
            <p className="text-sm text-gray-600">{shortDescription}</p>
          )}
          {category && (
            <p className="text-sm text-gray-500">Category: {category}</p>
          )}
          {brand && <p className="text-sm text-gray-500">Brand: {brand}</p>}
          {QuantityDescription && (
            <p className="text-sm text-gray-500">
              Net Weight: {QuantityDescription}
            </p>
          )}
          {rating && (
            <p className="text-sm text-gray-600">
              ⭐ {rating} | {deliveryTime} mins
            </p>
          )}

          {/* Price Section */}
          <p className="mt-2 text-sm">
            <b>MRP:</b>{" "}
            <span className="line-through text-gray-500">₹{mrpPrice}</span>{" "}
            {discountedPrice && (
              <span className="text-green-600 font-medium">
                Offer Price: ₹{discountedPrice}
              </span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GroceryCards;
