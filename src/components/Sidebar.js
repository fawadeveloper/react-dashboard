import Logo from "../imgs/logo.png";
import { sidebarData } from "../Data/Data";
import { FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar flex flex-col relative pt-[4rem] transition-all 300 ease-in">
      {/* logo */}
      <div className="logo hidden lg:flex h-20 font-bold gap-3 justify-center items-center text-2xl">
        <img src={Logo} className="w-12 h-12" />
        <span>
          Sh<span className="text-pink-300">o</span>ps
        </span>
      </div>

      {/* MENU */}
      <div className="menu relative mt-16 flex flex-col gap-5">
        {sidebarData.map(({ icon, heading, link }) => (
          <NavLink
            to={link}
            className="menuItem flex items-center gap-3 text-sm rounded-xl rounded-tl-none rounded-bl-none cursor-pointer h-10 relative transition-all 300 ease-in"
          >
            <div className="text-lg">{icon}</div>
            <span className="hidden  lg:flex">{heading}</span>
          </NavLink>
        ))}
        <div className="mt-[3rem] cursor-pointer h-12 ml-8 transition-all 300 ease-in">
          <FaSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
