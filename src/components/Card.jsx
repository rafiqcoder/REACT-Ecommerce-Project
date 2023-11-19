import React from "react";

const Card = ({ item }) => {
  console.log(item.thumbnail);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
      <div
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        style={{
          backgroundImage: `url(${item?.thumbnail})`,
        }}
      />
      <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {item?.title}
        </h3>
        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-200">
            {item?.price}
          </span>
          <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-red-800 rounded hover:bg-red-700 dark:hover:bg-red-600 focus:bg-gray-700 dark:focus:bg-red-600 focus:outline-none">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
