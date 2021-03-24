import React, { useState, useEffect } from "react";
import Logo from "../../img/Logo.png";
import "./style.css";
import Routes from "../../routes";

const SideBar = ({
  user_id,
  add_favorite,
  add_recent,
  recents,
  favorites,
  remove_recent,
  remove_favorite,
}) => {
 
  useEffect(() => {
    window.addEventListener("incomingActivity", ({ data }) => {
      if (data.type === "message" && data.from.role === "user") {
        add_recent({
          name: data.text,
          user_id,
        });
      }
    });
  }, []);

  const addToFavorite = (recentName) => {
    add_favorite({
      name: recentName,
      user_id,
    });
  };

  const removeFromFavorite = (favorite_id) => {
    remove_favorite({ favorite_id, user_id });
  };

  return (
    <>
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center "
          href={Routes.home}
        >
          <img src={Logo} className="logo" />
        </a>

        <hr class="sidebar-divider my-0" />

        <hr class="sidebar-divider" />
        <div className="sidebar-heading">Commands</div>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="far fa-fw fa-star" style={{ color: "white" }}></i>
            &nbsp;
            <span>Favorites</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
            style={{
              position: "absolute",
              left:
                window.innerWidth <= 768
                  ? "calc(6.5rem + 1.5rem / 2)"
                  : "calc(10.5rem + 5.5rem / 2)",
              zIndex: "1",
              top: "2px",
            }}
          >
            <div
              className="bg-white py-2 collapse-inner rounded"
              style={{ maxHeight: "200px", overflow: "auto" }}
            >
              <h6 className="collapse-header">Favorite Commands:</h6>
              {favorites
                ? favorites.map((favorite, index) => (
                    <a className="collapse-item" key={`favorite${index}`}>
                      {favorite.name}
                      &nbsp;
                      <i
                        className="fas fa-star iconBlue"
                        id={`favorite${index}`}
                        onMouseOver={() => {
                          const star_icon = document.getElementById(
                            `favorite${index}`
                          );
                          star_icon.classList.remove("fas");
                          star_icon.classList.add("far");
                          star_icon.classList.add("fa-fw");
                        }}
                        onMouseOut={() => {
                          const star_icon = document.getElementById(
                            `favorite${index}`
                          );
                          star_icon.classList.remove("far");
                          star_icon.classList.remove("fa-fw");
                          star_icon.classList.add("fas");
                        }}
                        style={{ cursor: "pointer" }}
                        onClick={() => removeFromFavorite(favorite.favorite_id)}
                      ></i>
                    </a>
                  ))
                : null}
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="far fa-clock" style={{ color: "white" }}></i>
            &nbsp;
            <span>Recent</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
            style={{
              position: "absolute",
              left:
                window.innerWidth <= 768
                  ? "calc(6.5rem + 1.5rem / 2)"
                  : "calc(10.5rem + 5.5rem / 2)",
              zIndex: "1",
              top: "2px",
            }}
          >
            <div
              className="bg-white py-2 collapse-inner rounded"
              style={{ maxHeight: "200px", overflow: "auto" }}
            >
              <h6 className="collapse-header">Recent Commands:</h6>
              {recents
                ? [...recents.slice(Math.max(recents.length - 7, 1))].map(
                    (recent, index) => (
                      <a className="collapse-item" key={`recent${index}`}>
                        {recent.name}&nbsp;
                        <i
                          id={`recent${index}`}
                          style={{ cursor: "pointer" }}
                          class="far fa-fw fa-star iconBlue"
                          onMouseOver={() => {
                            const star_icon = document.getElementById(
                              `recent${index}`
                            );
                            star_icon.classList.remove("far");
                            star_icon.classList.remove("fa-fw");
                            star_icon.classList.add("fas");
                          }}
                          onMouseOut={() => {
                            const star_icon = document.getElementById(
                              `recent${index}`
                            );
                            star_icon.classList.remove("fas");
                            star_icon.classList.add("far");
                            star_icon.classList.add("fa-fw");
                          }}
                          onClick={() => addToFavorite(recent.name)}
                        ></i>
                      </a>
                    )
                  )
                : null}
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            <i class="far fa-sticky-note" style={{ color: "white" }}></i>
            &nbsp;
            <span>Models</span>
          </a>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
            style={{
              position: "absolute",
              left:
                window.innerWidth <= 768
                  ? "calc(6.5rem + 1.5rem / 2)"
                  : "calc(10.5rem + 5.5rem / 2)",
              zIndex: "1",
              top: "2px",
            }}
          >
            <div
              className="bg-white py-2 collapse-inner rounded"
              style={{ maxHeight: "200px", overflow: "auto" }}
            >
              <h6 className="collapse-header">Favorite Commands:</h6>
              <a className="collapse-item" href="buttons.html">
                Overall sales per month
              </a>
              <a className="collapse-item" href="cards.html">
                Yearly Profit percentage
              </a>
            </div>
          </div>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Reports</div>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-chart-line" style={{ color: "white" }}></i>
            &nbsp;
            <span>My Reports</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            style={{
              position: "absolute",
              left:
                window.innerWidth <= 768
                  ? "calc(6.5rem + 1.5rem / 2)"
                  : "calc(10.5rem + 5.5rem / 2)",
              zIndex: "1",
              top: "2px",
            }}
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div
              className="bg-white py-2 collapse-inner rounded"
              style={{ maxHeight: "200px", overflow: "auto" }}
            >
              <h6 className="collapse-header">Favorite Commands:</h6>
              <a className="collapse-item" href="buttons.html">
                Overall sales per month
              </a>
              <a className="collapse-item" href="cards.html">
                Yearly Profit percentage
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-plus" style={{ color: "white" }}></i>
            &nbsp;
            <span>Create</span>
          </a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </>
  );
};

export default SideBar;
