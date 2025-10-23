import React from "react";

const Shimmer = () => {
  return (
    <div className="flex overflow-x-auto py-6">
      {Array(2)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-full h-[500px] flex flex-col items-center text-center border border-gray-300 rounded-lg p-6 min-w-[250px] bg-white shadow-sm "
          >
            {/* Image */}
            <div className="w-48 h-48 rounded-full bg-gray-300 animate-pulse mb-8"></div>

            {/* Name */}
            <div className="h-5 w-32 rounded bg-gray-300 animate-pulse mb-4"></div>

            {/* Role */}
            <div className="h-4 w-28 rounded bg-gray-300 animate-pulse mb-4"></div>

            {/* Experience */}
            <div className="h-4 w-28 rounded bg-gray-300 animate-pulse mb-4"></div>

            {/* Skills */}
            <div className="h-4 w-36 rounded bg-gray-300 animate-pulse mb-4"></div>

            {/* Phone */}
            <div className="h-4 w-32 rounded bg-gray-300 animate-pulse mb-4"></div>

            {/* Email */}
            <div className="h-4 w-36 rounded bg-gray-300 animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
