import React from "react";

const Header = ({ title }) => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm bg-blue-500">
        <div className="flex-1 text-center">
          <a className="btn btn-ghost text-xl">{title}</a>
        </div>
      </div>
    </>
  );
};

export default Header;
