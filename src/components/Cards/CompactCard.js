import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

const CompactCard = ({
  title,
  color,
  barValue,
  value,
  icon,
  series,
  setExpanded,
}) => {
  return (
    <motion.div
      className="CompactCard p-5 text-base flex flex-1 h-36 rounded-xl text-white relative cursor-pointer hover:shadow-none"
      style={{ background: color.backGround, boxShadow: color.boxShadow }}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      <div className="radialBar flex flex-1 flex-col justify-end gap-4">
        <CircularProgressbar
          value={barValue}
          text={`${barValue}%`}
        ></CircularProgressbar>
        <span className=" font-bold">{title}</span>
      </div>
      <div className="detail flex flex-1 flex-col justify-between items-end">
        <div className="text-xl ">{icon}</div>
        <span className="font-lg font-bold">${value}</span>
        <span className="text-xs">Last 24 hours</span>
      </div>
    </motion.div>
  );
};

export default CompactCard;
