import React, { useContext, useState } from "react";
import Nav from "../component/Nav";
import RepositoriesCard from "../shared/repositoriesCard";
import Footer from "../shared/Footer";
import { GithubContext } from "../context/GithubContext";
import { Spinner } from "../component/spinner";

function Repositories() {
  const [repoName, setRepoName] = useState("");
  const { repositoriesData, handleClearRepo, fetchRepoData, loading } =
    useContext(GithubContext);
  const handleRepoSubmit = (e) => {
    e.preventDefault();
    if (repoName === "") {
      alert("please enter a repository name");
    } else {
      fetchRepoData(repoName);
      setRepoName('');
    }
  };
  return (
    <div className="parentContainer">
      <Nav></Nav>
      <div className="search">
        <form onSubmit={handleRepoSubmit}>
          <input
            className="searchInput"
            type="search"
            placeholder="enter repository name"
            onChange={(e) => setRepoName(e.target.value)}
            value={repoName}
          />
          <button className="searchButton" type="submit">
            search for repositories
          </button>
        </form>
      </div>
      {repositoriesData.length > 0 && (
        <div>
          <button
            className="clearButton"
            type="clear"
            onClick={handleClearRepo}
          >
            clear
          </button>
        </div>
      )}
      <div>Repositories</div>
      <div className="repoGridDisplay">
        {loading ? (
          <Spinner />
        ) : (
          repositoriesData.map((repo) => (
            <RepositoriesCard key={repo.id} repo={repo} />
          ))
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Repositories;
