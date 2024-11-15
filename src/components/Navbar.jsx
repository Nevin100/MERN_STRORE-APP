import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import AvatarImg from "../assets/avatar.png";

const Navbar = () => {
  const CurrentUser = true;

  const [isDropdownOpen, setDropDownOpen] = useState(false);
  const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "CheckOut", href: "/checkout" },
    { name: "Logout", href: "/login" },
  ];
  return (
    <>
      <header className="max-w-screen-2xl mx-auto p-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center md:gap-16 gap-4">
            <Link to="/">
              <HiBars3 className="size - 6" />
            </Link>
            <div className="relative sm:w-72 w-40 space-x-2">
              <IoSearchSharp className="absolute inline-block left-3 inset-y-2" />
              <input
                type="text"
                placeholder="Search anything here "
                className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-lg focus:outline-none"
              />
            </div>
          </div>

          <div className="relative flex items-center md:space-x-3 space-x-2">
            <div>
              {CurrentUser ? (
                <>
                  <button onClick={() => setDropDownOpen(!isDropdownOpen)}>
                    <img
                      src={AvatarImg}
                      alt=""
                      className={`size-7 rounded-full ${
                        CurrentUser ? "ring-2 ring-blue-500" : ""
                      }`}
                    />
                  </button>
                  {/*DropDown*/}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                      <ul className="py-2">
                        {navigation.map((item) => (
                          <li
                            key={item.name}
                            onClick={() => setDropDownOpen(false)}
                          >
                            <Link
                              to={item.href}
                              className="block px-4 py-2 text-sm hover:bg-gray-300/85"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link to="/login">
                  <CgProfile className="size-6" />
                </Link>
              )}
            </div>

            <button className="hidden sm:block">
              <FaRegHeart className="size-6" />
            </button>
            <button>
              <Link
                to="/orders"
                className="bg-primary p-1 sm:px-6 py-2 flex items-centre sm:rounded-lg"
              >
                <IoCartSharp className="size-6" />
                <span className="text-sm font-semibold sm:ml-1">0</span>
              </Link>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
