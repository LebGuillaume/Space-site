import React, { type ReactNode } from "react";
import { Link } from "react-router-dom";
import SpaceImage from "/rocket-svgrepo-com.svg";
const Header = (): ReactNode => {
  return (
    <header className="test bg-black">
      <div className="align-element grid grid-cols-2 md:grid-cols-3 p-2">
        <Link to="/" className="justify-self-start self-center">
          <h1 className="mars-font text-lg pt-2 tracking[0.8rem] text-white">
            AlphaSpace
          </h1>
        </Link>
        <Link
          to="/"
          className="justify-self-end self-center md:justify-self-center"
        >
          <img
            className="w-12 h-12 object-cover"
            src={SpaceImage}
            alt="logo-top"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
