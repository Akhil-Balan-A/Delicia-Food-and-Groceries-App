const Filter = ({
  onClearAllFilterAndSort,
  onSortByRating,
  onSortByPriceLowToHigh,
  onSortByPriceHighToLow,
  onFilterByVegOnly,
  onFilterByNonVeg,
  onSortByOffer,
  onSortByDelivery
}) => {
  return (
    <section className="filter-section">
      <h2>Restaurants</h2>
      <div className="filter-container">
        <div className="delivery-features">
          <button onClick={onSortByDelivery}>Least Delivery Time</button>
        </div>
        <div className="High-rating">
          <button onClick={onSortByRating}>Rating-High to Low</button>
        </div>
        <div className="vegOnly-features">
          <button onClick={() => onFilterByVegOnly("veg")}>Veg Only</button>
        </div>
        <div className="nonVeg-features">
          <button onClick={() => onFilterByNonVeg("nonveg")}>Non Veg</button>
        </div>
        <div className="high-to-Low-offer-features">
          <button onClick={onSortByOffer}>Offers-High to Low</button>
        </div>
        <div className="low-to-high-price-features">
          <button onClick={onSortByPriceLowToHigh}>Price-Low to High</button>
        </div>
        <div className="high-to-low-price-features">
          <button onClick={onSortByPriceHighToLow}>Price-High to Low</button>
        </div>
        <div className="clear-all-filter-features">
          <button onClick={onClearAllFilterAndSort}>Clear All Filter</button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
