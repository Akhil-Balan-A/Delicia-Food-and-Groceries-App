import "../../styles/Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-page">
      {/* 1. Carousel Section */}
      <section className="shimmer-carousel-section">
        <div className="shimmer-carousel">
          {Array(8)
            .fill("")
            .map((_, i) => (
              <div key={i} className="shimmer-carousel-item"></div>
            ))}
        </div>
      </section>

      {/* 2. Filter Panel */}

      <div className="shimmer-filter-panel">
        {Array(8)
          .fill("")
          .map((_, i) => (
            <div key={i} className="shimmer-filter-btn"></div>
          ))}
      </div>

      {/* 3. Restaurant Cards Section */}
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
    </div>
  );
};

export default Shimmer;
