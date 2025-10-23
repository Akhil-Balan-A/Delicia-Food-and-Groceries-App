const GroceryShimmer = () => {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 p-6 mx-25"
      role="status"
      aria-busy="true"
    >
      <span className="sr-only">Loading groceries…</span>

      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col h-[450px]"
        >
          {/* Image shimmer */}
          <div className="w-full h-[200px] rounded-md bg-gray-200 animate-pulse"></div>

          <div className="mt-3 space-y-2 flex flex-col gap-2 justify-center items-center">
            {/* Title shimmer */}
            <div className="w-3/4 h-4 rounded bg-gray-200 animate-pulse"></div>

            {/* Description shimmer */}
            <div className="w-2/3 h-4 rounded bg-gray-200 animate-pulse"></div>

            {/* Category shimmer */}
            <div className="w-2/3 h-4 rounded bg-gray-200 animate-pulse"></div>

            {/* Brand shimmer */}
            <div className="w-2/3 h-4 rounded bg-gray-200 animate-pulse"></div>

            {/* Quantity shimmer */}
            <div className="w-2/3 h-4 rounded bg-gray-200 animate-pulse"></div>

            {/* Rating shimmer */}
            <div className="w-1/2 h-3 rounded bg-gray-200 animate-pulse"></div>

            {/* Price shimmer */}
            <div className="w-2/3 h-4 rounded bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroceryShimmer;
