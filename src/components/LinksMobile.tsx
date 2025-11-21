import { links, type Link } from "@/utils/links";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { AlignLeft } from "lucide-react";

const LinksMobile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden ml-4">
        <Button variant="outline" size="icon">
          <AlignLeft></AlignLeft>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="lg:hidden" align="start">
        {links.map((link) => {
          const { ref, label } = link as Link;
          return (
            <DropdownMenuItem key={label}>
              <NavLink
                to={ref}
                className={({ isActive }) =>
                  `capitalize tracking-wide font-light ${
                    isActive ? "text-primary text-xl" : ""
                  }`
                }
              >
                {label}
              </NavLink>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksMobile;
