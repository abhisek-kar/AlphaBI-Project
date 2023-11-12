"use client";
import GiphyContents from "@/components/GiphyContents";
import Loader from "@/components/Loader";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("user-token");
    if (!token) {
      router.push("/");
    }
  });
  //   handling serch functionalities
  const handleSearch = async (e) => {
    setContents([]);
    setLoading(true);
    if (!searchParam) {
      alert("Search value can not be empty");
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "GlVGYHkr3WSBnllca54iNt0yFbjz7L65",
          q: searchParam,
        },
      });

      setContents(data.data);
      setLoading(false);
    } catch (error) {
      alert(error.message);
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <main
      className="flex min-h-screen flex-col items-center  px-[232px] pt-20 bg-[#E8EBEF]"
      //   style={{
      //     background: "#E8EBEF",
      //   }}
    >
      <div className="flex flex-row-reverse mb-4 mt-2 w-full pr-4">
        <Link className=" text-blue-500" href={"/favourites"}>
          Favourites
        </Link>
      </div>
      <div className=" bg-white w-full rounded-xl flex flex-col justify-center items-center ">
        <div className="relative bg-white w-full p-4 rounded-xl flex items-center gap-5">
          {/* search input */}
          <input
            type="text"
            className="w-5/6 p-3 pl-10 text-lg border-2 border-black rounded-xl bg-[#E8EBEF]"
            onChange={({ target }) => {
              setSearchParam(target.value);
            }}
          />
          {/* search icon */}
          <Image
            src={"/searchicon.png"}
            width={25}
            height={25}
            alt="icon"
            className="absolute left-6"
          />
          {/* search button */}
          <button
            className="w-1/6 bg-black hover:opacity-80 tracking-wider text-lg  text-white p-4  rounded-xl "
            onClick={handleSearch}
          >
            search
          </button>
        </div>
        {/* contents */}
        {contents.length > 0 ? <GiphyContents apiData={contents} /> : <></>}
      </div>
      {/* showing spinner when loading */}
      {loading ? <Loader /> : <></>}
    </main>
  );
};

export default page;
