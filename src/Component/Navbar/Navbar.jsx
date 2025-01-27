import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import useCarts from "../../Hooks/useCarts";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCarts();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navbarOptions = (
    <>
      <li>
        <NavLink to="/" className="uppercase text-xl font-inter font-bold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="uppercase text-xl font-inter font-bold"
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className="uppercase text-xl font-inter font-bold"
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" className="uppercase text-xl font-inter font-bold">
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="shop" className="uppercase text-xl font-inter font-bold ">
          {" "}
          Our Shop
          <TiShoppingCart size={32} className="mr-2 relative rounded-full " />
          <p className="absolute w-5 h-5 bg-red-600 text-xs right-2 rounded-full flex items-center justify-center p-2">
            {cart.length}
          </p>
        </NavLink>
      </li>

      {user ? (
        <>
          
          <button
            onClick={handleLogOut}
            className="btn btn-ghost uppercase text-xl font-inter font-bold"
          >
            Sing out{" "}
          </button>

          <img
            src={user?.photoURL}
            className="rounded-full border w-16 h-16 border-white"
            alt=""
          />
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/login"
              className="uppercase text-xl font-inter font-bold"
            >
              Sign In <FaUserCircle size={30} className="font-white" />
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-[1920px] h-[100px] ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarOptions}
          </ul>
        </div>
        <div className="ml-5">
          <Link
            to="/#"
            className="uppercase font-cinzel text-3xl font-extrabold"
          >
            Bistro Boss
          </Link>{" "}
          <p className="font-cinzel text-2xl font-bold tracking-[9px]">
            Restaurant
          </p>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbarOptions}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
