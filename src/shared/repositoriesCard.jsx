import React from "react";
import {
  FaExclamation,
  FaUserClock,
  FaUsers,
  FaCodeBranch,
  FaCoins,
} from "react-icons/fa";

function RepositoriesCard({ repo }) {
  return (
    <div className="repositoryCard">
      <h4>{repo.name}</h4>
      <p className="description">{repo.description}</p>
      <a
        target="_blanck"
        rel="noreferrer"
        href={`${repo.html_url}`}
        className="repoUrl"
      >
        Visit Repository
      </a>
      <div className="repoCardIcons">
        <div className="iconsPaddingLeft">
          <FaUserClock />
          {repo.created_at}
        </div>
        <div className="iconsPaddingLeft">
          <FaCodeBranch />
          {repo.forks_count}
        </div>
        <div className="iconsPaddingLeft">
          <FaUsers />
          {repo.watchers}
        </div>
        <div>
          <FaExclamation />
          {repo.open_issues_count}
        </div>
      </div>
    </div>
  );
}

export default RepositoriesCard;
