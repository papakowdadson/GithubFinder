import React from "react";
import { useNavigate } from "react-router-dom";
import homelogo from "../assets/homelogo.svg";

function Home() {
  let navigate = useNavigate();
  return (
    <main className="parentContainer">
      <div className="homeMain">
        <div className="welcomeMessage">
          <h1>Welcome to Github </h1>
          <h1 className="Finder">Finder</h1>
        </div>
        <p>Find users and repositories on Github with ease</p>
        <img
          src={homelogo}
          alt="home page center logo"
          className="homeLogo"
        ></img>
        <div className="mainButtons">
          <button className="homeUserButton" onClick={() => navigate("/user")}>
            Search Users
          </button>
          <button
            className="homeRepositoryButton"
            onClick={() => navigate("/repositories")}
          >
            Search Repositories
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
