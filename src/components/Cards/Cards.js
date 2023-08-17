import React from "react";
import { cardsData } from "../../Data/Data";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="cards flex flex-col lg:flex-row gap-4">
      {cardsData.map(({ title, color, barValue, value, png, series }) => (
        <div className="parentContainer w-full">
          <Card
            title={title}
            color={color}
            barValue={barValue}
            value={value}
            icon={png}
            series={series}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
