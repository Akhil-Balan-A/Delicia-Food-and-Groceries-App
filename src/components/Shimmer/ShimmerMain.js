

const Shimmer = () => {
  return (
    <div role="status" aria-busy="true" className="flex flex-col px-5">
      <span className="sr-only">Loading…</span>

      {/* 1. Carousel Section */}
      <section className="mt-14 mb-4">
        <div className="flex gap-4 overflow-hidden mt-5 bg-gray-50 py-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-[200px] h-[200px] rounded-[25%] bg-gray-200 animate-pulse mr-2"
            />
          ))}
        </div>
      </section>

      {/* 2. Filter Panel */}
      <div className="flex flex-wrap gap-2 mt-8 px-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-36 h-10 rounded-md bg-gray-200 animate-pulse" />
        ))}
      </div>

      {/* 3. Restaurant Cards Section */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 px-5 py-5 mt-14">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="p-3 border border-gray-200 rounded-md shadow-sm flex flex-col gap-4 h-[350px]"
          >
            <div className="w-full h-[220px] rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
            <div className="h-3 w-1/2 rounded bg-gray-200 animate-pulse" />
            <div className="h-3 w-1/3 rounded bg-gray-200 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
