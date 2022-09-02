import React from "react";

function RepositoriesCard({ repo }) {
  return (
    <div className="repositoryCard">
      <h4>{repo.name}</h4>
      <h5 className="description">{repo.description}</h5>
    </div>
  );
}

export default RepositoriesCard;
