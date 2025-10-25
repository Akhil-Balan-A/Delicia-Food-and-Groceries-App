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
    <section className="p-5 bg-white">
      <h2 className="mt-5 text-xl font-semibold ">Restaurants</h2>
      <div className="flex flex-wrap gap-2 mt-5 bg-gray-300 p-4 ">
        <div className="delivery-features">
          <button onClick={onSortByDelivery} className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-100" >Least Delivery Time</button>
        </div>
        <div className="High-rating">
          <button onClick={onSortByRating} className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-100">Rating-High to Low</button>
        </div>
        <div className="vegOnly-features">
          <button onClick={() => onFilterByVegOnly("veg")} className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-100">Veg Only</button>
        </div>
        <div className="nonVeg-features">
          <button onClick={() => onFilterByNonVeg("nonveg")} className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-100">Non Veg</button>
        </div>
        <div className="high-to-Low-offer-features">
          <button onClick={onSortByOffer} className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-100">Offers-High to Low</button>
        </div>
        <div className="low-to-high-price-features">
          <button onClick={onSortByPriceLowToHigh} className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-100">Price-Low to High</button>
        </div>
        <div className="high-to-low-price-features">
          <button onClick={onSortByPriceHighToLow} className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-100">Price-High to Low</button>
        </div>
        <div className="clear-all-filter-features">
          <button onClick={onClearAllFilterAndSort} className=" ml-40 px-5 py-2 bg-red-700 text-white rounded hover:bg-red-900 transition duration-100">Clear All Filter</button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
