import React from "react";

function UserCard({users}) {
  return (
    <div className="userCard">
      <div>
        <img className="profileImage" src={users.avatar_url} alt="profileimage"></img>
      </div>
      <div className="userDetails">
        <h4 className="userLogin">{users.login}</h4>
        <a target="_blank" href={`${users.html_url}`}  rel="noreferrer" className="userUrl">View Profile</a>
      </div>
    </div>
  );
}

export default UserCard;
