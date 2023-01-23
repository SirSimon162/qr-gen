import React from "react";
const footerYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer p-10 bg-secondary text-primary-content footer-center">
      <div>
        <p className="text-lg text-secondary-content">Made by Anmol Pattnayak</p>
        <p className="text-secondary-content">Copyright &copy; {footerYear}</p>
      </div>
    </footer>
  );
}

export default Footer;