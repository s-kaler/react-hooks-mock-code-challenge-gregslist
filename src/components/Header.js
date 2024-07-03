import React from "react";
import Search from "./Search";

function Header({onSearchHeader}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearchHeader}/>
    </header>
  );
}

export default Header;