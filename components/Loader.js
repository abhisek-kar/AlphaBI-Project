import React from "react";
import Image from "next/image";
import LoaderStyle from "@/styles/loader.module.css";

const Loader = () => {
  return (
    <div>
      <Image
        src={"/Spinner.png"}
        width={50}
        height={50}
        alt="Spinner"
        className={LoaderStyle.image}
      />
    </div>
  );
};

export default Loader;
