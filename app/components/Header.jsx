import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" text-black shadow-lg p-4">
      <nav className="flex justify-between items-center">
        <div className="text-lg font-bold hover:text-robin-color">
          The French Fries School
        </div>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="hover:text-robin-color ">
              Home
            </Link>
          </li>
          <li>
            <Link href="/addMovie" className="hover:text-robin-color ">
              Add Movie
            </Link>
          </li>
          <li>
            <Link href="/viewMovie" className="hover:text-robin-color ">
              View Movie
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
