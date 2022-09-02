import React from "react";

function UserCard({users}) {
  return (
    <div className="userCard">
      <div>
        <img className="profileImage" src={users.avatar_url} alt="profileimage"></img>
      </div>
      <div className="userDetails">
        <h4 className="userLogin">{users.login}</h4>

        <h5 className="userUrl">{users.url}</h5>
      </div>
    </div>
  );
}

export default UserCard;
