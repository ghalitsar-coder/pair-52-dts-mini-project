import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={`/movies/${data.id}`}>
      <div className="flex max-h-[36vh]   justify-between bg-[#040B16] text-white">
        <div className="flex-1 p-10 hidden md:flex gap-y-2 flex-col">
          <h1 className="text-white font-bold text-6xl tracking-wider">
            {data.title}
          </h1>

          <p className="text-xs text-whiteSmoke">{data.original_title}</p>
          <p>{data.overview.substring(0, 120)}...</p>
        </div>
        <div className="flex-1  h-auto">
          <img
            src={"https://image.tmdb.org/t/p/w185" + data?.poster_path}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
