import { links, type Link } from "@/utils/links";
import { NavLink } from "react-router-dom";

const LinksDesktop = () => {
  return (
    <div className="w-full text-white hidden lg:flex  gap-x-20 justify-center item-center">
      {links.map((link) => {
        const { ref, label } = link as Link;
        return (
          <NavLink
            key={label}
            to={ref}
            className={({ isActive }) =>
              `capitalize tracking-wide ${isActive ? "underline text-xl" : ""}`
            }
          >
            {label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default LinksDesktop;
