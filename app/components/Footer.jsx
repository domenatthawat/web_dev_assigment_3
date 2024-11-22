import React from "react";

var time = new Date();
var currentTime = time.getFullYear();

const Footer = () => {
  return (
    <div className=" bg-white flex  justify-center fixed bottom-0 w-full">
      <footer className="text-black ">
        <p>
          &copy; {currentTime} The French Fries Movies. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
