import React, { useEffect, useState } from "react";

const GiphyContents = ({ apiData }) => {
  const totalPages = apiData && Math.ceil(apiData.length / 3);
  const [page, setPage] = useState(1);
  const [isClicked, setIsClicked] = useState(Array(apiData.length).fill(false));
  useEffect(() => {
    setIsClicked(Array(apiData.length).fill(false));
  }, [page, apiData]);
  const handleClick = (index) => {
    const updatedIsClicked = [...isClicked];
    updatedIsClicked[index] = !updatedIsClicked[index];
    setIsClicked(updatedIsClicked);
  };
  return (
    <div className="p-2">
      {/* gifs */}
      <div className="flex gap-5 ">
        {apiData &&
          apiData.slice(page * 3 - 3, page * 3).map((item, index) => {
            const title =
              (item.title && item.title.split("GIF")[0]) || "gif title";
            return (
              <div key={item.id} className="m-2  ">
                <img
                  src={`${item.images.original.url}`}
                  alt={`${item.title} image`}
                  className="w-96 h-64"
                />
                <div className="flex justify-between items-center">
                  <p className="text-lg tracking-tight font-semibold">
                    {title}
                  </p>
                  <span className="cursor-pointer">
                    <img
                      onClick={() => handleClick(index)}
                      src={isClicked[index] ? "/star.png" : "/star1.png"}
                      alt="star"
                      className={`cursor-pointer `}
                    />
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-600">
                  @{item.username || "gif username "}
                </p>
              </div>
            );
          })}
      </div>
      {/* pagination */}
      <div className="mt-5 mb-2 flex items-center justify-center gap-2">
        <span
          className={`font-mono px-2 font-semibold cursor-pointer active:border-b-2 active:border-pink-700 active:bg-pink-200`}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            } else {
              return;
            }
          }}
        >
          Previous
        </span>
        <span
          className={`font-mono px-2 font-semibold cursor-pointer active:border-b-2 active:border-pink-700 active:bg-pink-200 ${
            page === 1 ? "border-b-2 border-pink-700 bg-pink-200" : ""
          } `}
          onClick={() => {
            setPage(1);
          }}
        >
          1
        </span>
        <span
          className={`font-mono px-2 font-semibold cursor-pointer active:border-b-2 active:border-pink-700 active:bg-pink-200 ${
            page === 2 ? "border-b-2 border-pink-700 bg-pink-200" : ""
          }`}
          onClick={() => {
            setPage(2);
          }}
        >
          2
        </span>
        <span
          className={`font-mono px-2 font-semibold cursor-pointer active:border-b-2 active:border-pink-700 active:bg-pink-200
          ${page === 3 ? "border-b-2 border-pink-700 bg-pink-200" : ""}`}
          onClick={() => {
            setPage(3);
          }}
        >
          3
        </span>
        <span
          className={`font-mono px-2 font-semibold cursor-pointer active:border-b-2 active:border-pink-700 active:bg-pink-200`}
          onClick={() => {
            if (page < totalPages - 1) {
              setPage(page + 1);
            } else {
              return;
            }
          }}
        >
          Next
        </span>
      </div>
    </div>
  );
};

export default GiphyContents;
