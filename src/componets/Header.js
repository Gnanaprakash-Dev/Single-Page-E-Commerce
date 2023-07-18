import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { headerMenu } from "../services/api";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);
  const [topBar, setTopBar] = useState(true);

  const handleCloseTopBar = () => {
    setTopBar(false);
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const showSubMenu = (hasChildren) => {
    setSubMenuActive(hasChildren);
  };

  return (
    <header className="header">
      {topBar && (
        <div className="header-top">
          <p>Free shipping worldwide. Orders over ₹500</p>
          <i
            className="bi bi-x-circle float-right cursor-pointer"
            onClick={handleCloseTopBar}
          ></i>
        </div>
      )}
      <div className="container">
        <div className="d-flex v-center-between py-12">
          <div className="header-item item-left">
            <div className="logo v-center">
              <img src={logo} alt="fashion_logo" />
              <strong>Fash</strong>
              <strong>ion</strong>
            </div>
          </div>
          <div className="header-item item-center">
            <div className={`${isActive ? "active" : ""} menu-overlay`}> </div>
            <nav className={`${isActive ? "active" : ""} menu`}>
              <div
                className={`${subMenuActive ? "active" : ""} mobile-menu-head`}
              >
                <div className="go-back" onClick={() => showSubMenu(false)}>
                  <i class="bi bi-arrow-left-circle"></i>
                </div>
                <div className="current-menu-title">{subMenuActive}</div>
                <div className="mobile-menu-close" onClick={toggleMenu}>
                  ×
                </div>
              </div>
              <ul className="menu-main">
                {headerMenu.map((data) =>
                  data.name === "Kids" ? (
                    <li className="menu-item-has-children">
                      <span onClick={() => showSubMenu(data.name)}>
                        {data.name} <i className="bi bi-caret-down" />
                      </span>
                      <div
                        className={`${
                          subMenuActive === data.name
                            ? "active subMenuLeft"
                            : "subMenuRight"
                        }  sub-menu mega-menu mega-menu-column-4`}
                      >
                        {data.value.map((data) => (
                          <div className="list-item">
                            {data.value.length > 0 ? (
                              data.value.map((data) => (
                                <>
                                  <h4 className="title">{data.name}</h4>
                                  <ul>
                                    {data.value.map((data) => (
                                      <li>
                                        <span>{data.name}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              ))
                            ) : (
                              <img src={data.name} alt="header-img" />
                            )}
                          </div>
                        ))}
                      </div>
                    </li>
                  ) : data.value.length > 0 ? (
                    <li className="menu-item-has-children">
                      <span onClick={() => showSubMenu(data.name)}>
                        {data.name} <i className="bi bi-caret-down"></i>
                      </span>
                      {data.name !== "Couple" ? (
                        <div
                          className={`${
                            subMenuActive === data.name
                              ? "active subMenuLeft"
                              : "subMenuRight"
                          }  sub-menu mega-menu mega-menu-column-4`}
                        >
                          {data.value.map((data) => (
                            <div className="list-item text-center">
                              <span>
                                <img src={data.value} alt="new Product" />
                                <h4 className="title">{data.name}</h4>
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div
                          className={`${
                            subMenuActive === data.name
                              ? "active subMenuLeft"
                              : "subMenuRight"
                          } sub-menu single-column-menu text-center`}
                        >
                          <ul>
                            {data.value.map((data) => (
                              <li>
                                <span>{data.name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ) : (
                    <li>
                      <span>{data.name}</span>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
          <div className="header-item item-right">
            <span className="search">
              <i className="bi bi-search"></i>
            </span>
            {/* <span><i className="bi bi-heart"><span className="count-badge">0</span></i></span> */}
            <span>
              <i className="bi bi-bag">
                <span className="count-badge">5</span>
              </i>
            </span>
            <span>
              <i className="bi bi-person-circle"></i>
            </span>
            {/* mobile menu trigger */}
            <div className="mobile-menu-trigger" onClick={toggleMenu}>
              <i className="bi bi-list"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
