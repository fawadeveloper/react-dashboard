import React from "react";
import { RxCross2 } from "react-icons/rx";
import Chart from "react-apexcharts";
import { motion } from "framer-motion";

const ExpandedCard = ({
  title,
  color,
  barValue,
  value,
  icon,
  series,
  setExpanded,
}) => {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div
      className="ExpandedCard absolute left-18 md:left-24 lg:left-80 w-64 lg:h-[65vh] md:h-[36vh] z-10 rounded-lg flex flex-col justify-between items-center p-4 md:w-[45vw] sm:h-[40vh] "
      style={{ background: color.backGround, boxShadow: color.boxShadow }}
      layoutId="expandableCard"
    >
      <div className="self-end text-white">
        <RxCross2 onClick={setExpanded} className="cursor-pointer " />
      </div>
      <span
        className="text-white text-lg font-bold"
        style={{ textShadow: "0px 0px 15px white" }}
      >
        {title}
      </span>
      <div className="chartContainer w-11/12">
        <Chart series={series} type="area" options={data.options} />
      </div>
      <span className="text-gray-200 text-base"> Last 24 hours</span>
    </motion.div>
  );
};

export default ExpandedCard;
