import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Nav() {
  let navigate = useNavigate();


  const navbaritemSelected = {
    background: "linear-gradient(to right, blue, #7AA5FA, blue)",    padding: "5px 10px",
    borderRadius: "5px",
    textDecoration: "none",
    color: "white",
  };
  const nabaritemUnselected = {
    textDecoration: "none",
  };
  // Todo work on item higlighting
  return (
    <div>
      <nav className="navDisplay">
        <div className="logo" onClick={()=>navigate('/')}>
          <h4>GitHub </h4>
          <h4 className="Finder">Finder</h4>
        </div>
        <div className="navListDisplay">
          <ul>
            <li className={"navbaritem"}>
              <NavLink
                to="/user"
                style={({isActive})=>isActive ? navbaritemSelected : nabaritemUnselected
                }
              >
                User
              </NavLink>
            </li>
            <li className={"navbaritem"}>
              <NavLink
                to="/repositories"
                style={
                  ({isActive})=>isActive? navbaritemSelected: nabaritemUnselected
                }
              >
                Repositories
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
