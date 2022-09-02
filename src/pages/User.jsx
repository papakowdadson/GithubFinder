import React, { useContext, useState } from "react";
import Nav from "../component/Nav";
import Footer from "../shared/Footer";
import UserCard from "../shared/userCard";
import { Spinner } from "../component/spinner";
import { UserContext } from "../context/UserContext";


function User() {
  const [userName, setUserName] = useState("");
  const {fetchUserData,handleClear,loading,userData}=useContext(UserContext)

  const userSubmit = (e) => {
    e.preventDefault();
    if (userName === "") {
      alert("please enter a username");
    } else {
      // do something
      fetchUserData(userName);
      setUserName("");
    }
  };


  return (
    <div className="parentContainer">
      <Nav></Nav>
      <div className="search">
        <form onSubmit={userSubmit}>
          <input
            className="searchInput"
            type="search"
            placeholder="enter username"
            value={userName}
            onChange={(e) =>setUserName(e.target.value)}
          />
          <button className="searchButton" type="submit">
            Search User
          </button>
        </form>
        {userData.length > 0 && (
          <div>
            <button className="clearButton" type="clear" onClick={handleClear}>
              clear
            </button>
          </div>
        )}
      </div>
      <div className="userGridDisplay">
      {loading ? (
        <Spinner/>
      ) : (
        userData.map((users) => (
          <UserCard key={users.id} users={users}></UserCard>
        ))
      )}
      </div>
      <div>Enjoy.....</div>
      <Footer></Footer>
    </div>
  );
}

export default User;
