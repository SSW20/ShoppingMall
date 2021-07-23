import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData, SideBarUser } from "./NavbarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Menu() {
  const [sidebar, setSidebar] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const showSearchbar = () => setSearchbar(!searchbar);
  return (
    <>
      <IconContext.Provider value={{ color: "#ffffff" }}>
        <div className="navbar">
          <AiIcons.AiOutlineSearch
            className="navbar-icons"
            onClick={showSearchbar}
          />
          <Link to="/ShoppingMall">
            <h1 className="navbar-title">쇼핑몰</h1>
          </Link>
          <FaIcons.FaBars className="navbar-icons" onClick={showSidebar} />
        </div>

        <div className={searchbar ? "nav-search active" : "nav-search"}>
          <form>
            <input type="text" />
            <button>검색</button>
          </form>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <AiIcons.AiOutlineClose className="navbar-icons" />
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <br />
            <br />
            <br />
            <br />
            <br />
            {SideBarUser.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icons}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Menu;
