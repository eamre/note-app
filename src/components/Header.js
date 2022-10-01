import React from "react";

const Header = ({handleToggleDarkMode}) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button onClick={()=>handleToggleDarkMode((prev)=>(!prev))} className="save">Dark Mode</button>
    </div>
  );
};

export default Header;
