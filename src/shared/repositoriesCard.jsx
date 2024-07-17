import React from "react";
import {
  FaExclamation,
  FaUserClock,
  FaUsers,
  FaCodeBranch,
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
          <div className="modernui" style={{ backgroundColor: "rgb(247, 192, 201)" }}>
            <FaCodeBranch />
          </div>
          <p style={{margin:'0px',color:'gray',fontSize:'14px'}}>{repo.forks_count}</p>
        </div>
        <div className="iconsPaddingLeft">
          <div className="modernui" style={{ backgroundColor: "rgb(162, 245, 162)" }}>
            <FaUsers />
          </div>
          <p style={{margin:'0px',color:'gray',fontSize:'14px'}}>{repo.watchers}</p>
        </div>
        <div className="iconsPaddingLeft">
          <div className="modernui" style={{ backgroundColor: "rgb(240, 155, 129)" }}>
            <FaExclamation />
          </div>
          <p style={{margin:'0px',color:'gray',fontSize:'14px'}}>{repo.open_issues_count}</p>
        </div>
        <div className="iconsPaddingLeft">
          <div className="modernui" style={{ backgroundColor: "rgb(241, 241, 161)" }}>
            <FaUserClock />
          </div>
          <p style={{margin:'0px',color:'gray',fontSize:'14px'}}>{ repo.created_at.split("T")[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default RepositoriesCard;
