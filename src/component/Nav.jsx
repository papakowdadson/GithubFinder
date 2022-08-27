import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Nav() {
  // const [navItem, setnavItem] = useState("");
  let navigate = useNavigate();

  
  

  const navbaritemSelected = {
    backgroundColor: "#7AA5FA",
    padding: "5px",
    borderRadius: "5px",
    textDecoration: "none",
    color: "white",
  };
  const nabaritemUnselected = {
    textDecoration: "none",
    color: "black",
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
                // onClick={()=>setnavItem('User')}
                style={({isActive})=>isActive ? navbaritemSelected : nabaritemUnselected
                }
              >
                User
              </NavLink>
            </li>
            <li className={"navbaritem"}>
              <NavLink
                to="/repositories"
                // onClick={()=>setnavItem('repositories')}
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
