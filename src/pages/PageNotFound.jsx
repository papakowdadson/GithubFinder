import React from "react";
import { useLocation } from "react-router-dom";

function PageNotFound() {
  let location = useLocation();
  console.log(location);
  return <div> ERROR.....PageNotFound {location.pathname}</div>;
}

export default PageNotFound;
