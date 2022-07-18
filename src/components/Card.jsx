import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={`/movies/${data.id}`}>
      <div className="mr-1 hover:scale-110 transition cursor-pointer h-40 overflow-hidden rounded-md shadow-md   ">
        <img
          src={"https://image.tmdb.org/t/p/w185" + data?.poster_path}
          alt="img"
          className="w-full h-full  object-cover"
        />
      </div>
    </Link>
  );
};

export default Card;
