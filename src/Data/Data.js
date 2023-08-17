import { TbClipboardText } from "react-icons/tb";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdContentPaste } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";

import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { TbFileDollar } from "react-icons/tb";

export const sidebarData = [
  {
    icon: <BiHomeAlt />,
    heading: "Dashboard",
    link: "/",
  },
  {
    icon: <TbClipboardText />,
    heading: "Orders",
    link: "orders",
  },
  {
    icon: <MdOutlinePeopleAlt />,
    heading: "Customers",
    link: "customers",
  },
  {
    icon: <MdContentPaste />,
    heading: "Products",
    link: "products",
  },
  {
    icon: <MdOutlineAnalytics />,
    heading: "Analytics",
    link: "analytics",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: <RiMoneyDollarBoxLine />,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: <CiBadgeDollar />,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: <TbFileDollar />,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];
