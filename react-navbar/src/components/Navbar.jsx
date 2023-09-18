import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "./Link";
const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Dashboard", path: "/dashboard" },
  ];

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="bg-yellow-200 p-5">
      <div
        onClick={() => setToggleMenu(!toggleMenu)}
        className="md:hidden text-2xl"
      >
        {toggleMenu === true ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <ul
        className={`md:flex absolute md:static bg-yellow-200 rounded-lg p-5 ${
          toggleMenu ? `top-12` : `-top-40`
        } duration-1000`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
