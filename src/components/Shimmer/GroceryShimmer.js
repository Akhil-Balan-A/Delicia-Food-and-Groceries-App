import "../../styles/Shimmer.css";

const GroceryShimmer = () => {
  return (
     <div className="shimmer-cards-container">
        {Array(20)
          .fill("")
          .map((_, i) => (
            <div key={i} className="shimmer-card">
              <div className="shimmer-image"></div>
              <div className="shimmer-line shimmer-title"></div>
              <div className="shimmer-line shimmer-rating"></div>
              <div className="shimmer-line shimmer-price"></div>
            </div>
          ))}
      </div>
    
  );
};

export default GroceryShimmer;
