const RestaurantShimmer = () => {
  return (
    <div className="max-w-5xl mx-auto p-5 font-sans" role="status" aria-busy="true">
      <span className="sr-only">Loading restaurant details…</span>

      {/* Shimmer Header */}
      <div className="flex flex-col items-center gap-3 opacity-80 mb-8 mt-4">
        <div className="w-2/5 h-8 rounded-md bg-gray-200 animate-pulse"></div>
        <div className="w-4/5 h-4 rounded bg-gray-200 animate-pulse"></div>
        <div className="w-4/5 h-4 rounded bg-gray-200 animate-pulse"></div>
        <div className="w-3/5 h-5 rounded bg-gray-200 animate-pulse"></div>
      </div>

      {/* Shimmer Top Picks Carousel */}
      <section className="mt-20">
        <div className="flex gap-5 overflow-x-auto pb-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="min-w-[200px] h-[350px] border border-gray-200 rounded-lg p-3 flex flex-col items-center gap-2"
            >
              <div className="w-full h-[150px] rounded bg-gray-200 animate-pulse"></div>
              <div className="w-1/2 h-4 rounded bg-gray-200 animate-pulse"></div>
              <div className="w-1/2 h-4 rounded bg-gray-200 animate-pulse"></div>
              <div className="w-[60px] h-[30px] rounded bg-gray-200 animate-pulse mt-2"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Shimmer Menu List */}
      <section className="mt-16">
        <div className="flex flex-col gap-5 w-full">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border border-gray-200 rounded-lg p-3"
            >
              <div className="w-[120px] h-[120px] rounded bg-gray-200 animate-pulse"></div>
              <div className="flex flex-col gap-2 w-full">
                <div className="w-1/2 h-4 rounded bg-gray-200 animate-pulse"></div>
                <div className="w-4/5 h-4 rounded bg-gray-200 animate-pulse"></div>
                <div className="w-[60px] h-[30px] rounded bg-gray-200 animate-pulse mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantShimmer;
