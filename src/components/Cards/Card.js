import { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import ExpandedCard from "./ExpandedCard";
import CompactCard from "./CompactCard";
const Card = ({ title, color, barValue, value, icon, series }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard
          title={title}
          color={color}
          barValue={barValue}
          value={value}
          icon={icon}
          series={series}
          setExpanded={() => setExpanded(false)}
        />
      ) : (
        <CompactCard
          title={title}
          color={color}
          barValue={barValue}
          value={value}
          icon={icon}
          series={series}
          setExpanded={() => setExpanded(true)}
        />
      )}
    </AnimateSharedLayout>
  );
};

export default Card;
