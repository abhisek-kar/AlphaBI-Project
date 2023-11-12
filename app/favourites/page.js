"use client";
import React, { useEffect } from "react";

const page = () => {
  const [favourites, setFavourites] = [];
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem());
  });
  return (
    <main className="flex min-h-screen flex-col items-center  px-[232px] pt-24 bg-[#E8EBEF]">
      <div className=" bg-white w-full rounded-xl flex flex-wrap justify-center items-center ">
        {/* contents */}
      </div>
    </main>
  );
};

export default page;
