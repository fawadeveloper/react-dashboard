import React from "react";
import Cards from "./Cards/Cards";
import Table from "./Table";

const Main = () => {
  return (
    <div className="mainDash flex flex-col justify-evenly sm:justify-start sm:mt-20 pl-4">
      <h1 className="text-2xl  font-bold">Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default Main;
