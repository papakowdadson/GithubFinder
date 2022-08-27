import React from "react";
import Nav from "../component/Nav";
import Footer from "../shared/Footer";
import Search from "../shared/Search";
import UserCard from "../shared/userCard";

function User() {
  return (
    <div className="parentContainer">
      <Nav></Nav>
      <Search
        placeholder={"enter username"}
        buttonDetails={"Search User"}
      ></Search>
      <UserCard></UserCard>
      <div>User</div>
      <Footer></Footer>
    </div>
  );
}

export default User;
