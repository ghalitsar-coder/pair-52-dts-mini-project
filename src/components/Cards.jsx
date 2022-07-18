import React from "react";
import Card from "./Card";

const Cards = ({ data, title }) => {
  return (
    <>
      {data?.slice(0, 10).map((item) => (
        <Card key={item.id} />
      ))}
    </>
  );
};

export default Cards;
