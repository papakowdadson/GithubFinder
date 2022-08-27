import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Copyright Aims Community Ghana @{date}</p>
    </footer>
  );
}

export default Footer;
