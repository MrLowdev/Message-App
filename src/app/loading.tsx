"use client";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className=" rounded-lg w-full h-full flex items-center justify-center">
      <ClipLoader color="	#0000FF" size={40} />
    </div>
  );
};

export default Loading;
