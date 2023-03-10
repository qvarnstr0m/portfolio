import React from "react";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-links">
        <li>
          <a href="mailto:mqvarnstrom80@gmail.com?subject=Hello!">Email</a>
        </li>
        <li>
          <a
            href="https://www.github.com/qvarnstr0m/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/martin-qvarnstrom-953275248/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a href="./wcag.html">WCAG</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
