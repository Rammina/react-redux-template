import React from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu/NavMenu";

import { SITE_TITLE } from "utils/constants";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <section className="header__section">
        {/*page title & link to home*/}
        <div id="header__website-title-div" className="header__div">
          <Link to="/" id="header__title-link">
            <span>{SITE_TITLE}</span>
          </Link>
        </div>
        {/*hamburger & navmenu*/}
        <div className="header__div header__div--navmenu">
          <NavMenu />
        </div>
      </section>
    </header>
  );
};

export default Header;
