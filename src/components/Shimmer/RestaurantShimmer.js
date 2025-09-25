import "../../styles/Shimmer.css";

const RestaurantShimmer = () => {
  return (
    <div className="restaurant-container">
      
      {/* Shimmer Header */}
      <div className="restaurant-header shimmer">
        <div className="shimmer-block shimmer-title"></div>
        <div className="shimmer-block shimmer-text"></div>
        <div className="shimmer-block shimmer-text"></div>
        <div className="shimmer-block shimmer-meta"></div>
      </div>

      {/* Shimmer Top Picks Carousel */}
      <section className="top-picks-shimmer shimmer">
        <div className="carousel">
          {Array(4).fill("").map((_, index) => (
            <div key={index} className="dish-card">
              <div className="shimmer-block shimmer-image"></div>
              <div className="shimmer-block shimmer-text short"></div>
              <div className="shimmer-block shimmer-text short"></div>
              <div className="shimmer-block shimmer-button"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Shimmer Menu List */}
      <section className="restaurant-menu shimmer">
        <div className="menu-list-shimmer">
          {Array(20).fill("").map((_, index) => (
            <div key={index} className="menu-item menu-item-shimmer">
              <div className="shimmer-block shimmer-menu-image"></div>
              <div className="menu-item-details">
                <div className="shimmer-block shimmer-text short"></div>
                <div className="shimmer-block shimmer-text"></div>
                <div className="shimmer-block shimmer-button"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantShimmer;
