import LinksMobile from "./LinksMobile";
import LinksDesktop from "./LinksDesktop";

const Navbar = () => {
  return (
    <nav className="bg-black py-5">
      <div>
        <LinksMobile />
        <LinksDesktop />
      </div>
    </nav>
  );
};

export default Navbar;
