import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repositories from "./pages/Repositories";
import User from "./pages/User";
import App from "./App";
import PageNotFound from "./pages/PageNotFound";
import UserContextProvider from "./context/UserContext";
import GithubContextProvider from "./context/GithubContext";
import AlertContextProvider from "./context/alert/alertContext";
import Nav from "./component/Nav"
import Footer from "./shared/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <AlertContextProvider>
    <GithubContextProvider>
      <UserContextProvider>
        <BrowserRouter>      
        <Nav></Nav>
          <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/repositories" element={<Repositories />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </GithubContextProvider>
    </AlertContextProvider>
    <Footer></Footer>
  </React.StrictMode>
);
