import React from "react";
import "./LoggedIn.css";

const LoggedIn = ({ setIsLoggedIn }) => {
  return (
    <>
      <div className="img-container">
        <h2 className="flex flex-wrap bg-red">My Gallery</h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[20em] py-8">
          <img src="./images/new2.jpeg" />
          <img src="./images/new1.webp" />
          <img src="./images/new2.jpeg" />
          <img src="./images/new1.webp" />
          <img src="./images/new2.jpeg" />
          <img src="./images/new1.webp" />
        </div>
      </div>
    </>
  );
};

export default LoggedIn;
