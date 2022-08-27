import React from "react";
import Nav from "../component/Nav";
import RepositoriesCard from "../shared/repositoriesCard";
import Search from "../shared/Search";
import Footer from "../shared/Footer";

function Repositories() {
  return (
    <div className="parentContainer">
      <Nav></Nav>
      <Search
        placeholder={"enter repository name"}
        buttonDetails={"search for repositories"}
      ></Search>
      <div>Repositories</div>
      <RepositoriesCard></RepositoriesCard>
      <Footer></Footer>
    </div>
  );
}

export default Repositories;
