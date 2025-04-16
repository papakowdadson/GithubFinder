import React, { useContext, useState } from "react";
import RepositoriesCard from "../shared/repositoriesCard";
import Footer from "../shared/Footer";
import { GithubContext } from "../context/GithubContext";
import { Spinner } from "../component/spinner";
import AutoScroll from "../component/autoScroll";


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
          <h2 className="repositoryPageTitle" >Find Project <span className="Finder">Source code</span> around the world on <span className="Finder"> GitHub Finder</span> with ease</h2>

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
      <div className="repoGridDisplay">
        {loading ? (
          <Spinner />
        ) : (
          repositoriesData.map((repo) => (
            <RepositoriesCard key={repo.id} repo={repo} />
          ))
        )}
      </div>
      {repositoriesData.length > 0 &&<AutoScroll/>}
    </div>
  );
}

export default Repositories;
