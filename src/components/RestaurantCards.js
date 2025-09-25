import {Link} from "react-router-dom";
const RestaurantCards = (props) => {
  const { resData } = props;
  const { image, alt, name, rating, deliveryTime, cuisines, place,offer,priceStartsFrom,id} =
    resData ?? {};
  return (
    <section className="restaurant-cards">
      <div key={id} className="card">
        {/*make the entire card clickable*/}
        <Link to={`/restaurant/${id}`} className="card-link">
         <div className="image-container" style={{ position: "relative" }}>
          <img src={image} alt={alt} />
          {/* Offer Badge */}
          {offer && (
            <div
              className="offer-badge"
              style={{
                position: "absolute",
                bottom: "20px",
                left: "8px",
                backgroundColor: "rgba(173, 75, 37, 0.85)", // semi-transparent orange
                color: "white",
                padding: "4px 8px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              🏷️ Items offered at {offer}% <br/>
              ₹ Price starts from Rs.{priceStartsFrom}.
            </div>
          )}
        </div>
        
        <h3>{name}</h3>
        <h4>
          ⭐{rating}| {deliveryTime}
        </h4>
        <p>😋{cuisines}</p>
          <p>📍{place}</p>
      
      </Link>
      </div>
    </section>
  );
};

export default RestaurantCards;