import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Copyright@{date} Aims Community Ghana</p>
    </footer>
  );
}

export default Footer;
