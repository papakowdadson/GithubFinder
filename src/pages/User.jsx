import React, { useContext, useState } from "react";
import Footer from "../shared/Footer";
import UserCard from "../shared/userCard";
import { Spinner } from "../component/spinner";
import { UserContext } from "../context/UserContext";
import AutoScroll from "../component/autoScroll";


function User() {
  const [userName, setUserName] = useState("");
  const {fetchUserData,handleClear,loading,userData}=useContext(UserContext)

  // Todo:use alert context to replace alert and create a component if you want
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
          <h5 style={{textAlign:'center',marginBottom:'5px'}}>Developers can now find colleagues around the world on <span className="Finder"> GitHub Finder</span> with ease</h5>
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
      {userData.length > 0 &&<AutoScroll/>}
      <Footer></Footer>
    </div>
  );
}

export default User;
