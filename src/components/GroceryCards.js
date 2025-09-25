import { Link } from "react-router-dom";

const GroceryCards = ({product}) => {

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
    imageId
  } = product ?? {};

  // Build the image URL
  const image = imageId
    ? `https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/${imageId}`
    : "https://placehold.co/304x200?text=No+Image"; // fallback image

  // Calculate discounted price if offerPercentage present
  const discountedPrice =
    offerPercentage && mrpPrice
      ? (mrpPrice - (mrpPrice * offerPercentage) / 100).toFixed(2)
      : null;

  return (
    <section className="grocery-card">
      <div className="card">
        <div className="image-container">
          <img
            src={image}
            alt={id}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/304x200?text=No+Image";
            }}
          />
          {offerPercentage && (
            <div style={{backgroundColor: "rgba(173, 75, 37, 0.85)",display: "inline-block",borderRadius: "4px",padding: "4px 8px",color: "white",fontSize: "12px",fontWeight: "bold" }} className="offer-badge">🏷️ {offerPercentage}% OFF</div>
          )}
        </div>

        <div className="card-details">
          <h3>{name}</h3>
          {shortDescription && <p className="short">{shortDescription}</p>}
          {category && <p>Category: {category}</p>}
          {brand &&<p>Brand: {brand}</p>}
          {QuantityDescription && <p>Net Weight: {QuantityDescription}</p>}
          {rating && (
            <p>
              ⭐ {rating} | {deliveryTime} mins
            </p>
          )}
          <p className="price">
            <b>MRP:</b><span className="strike">₹{mrpPrice}</span>{" "}
            {discountedPrice && (
              <span className="discount">OfferPrice: ₹{discountedPrice}</span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GroceryCards;
