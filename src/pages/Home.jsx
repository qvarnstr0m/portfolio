import React from "react";

const Home = () => {
  return (
    <main>
      <div>
        <h1>
          Hello! 👋🏼
          <br />I am Martin Qvarnström,
        </h1>
      </div>
      <div className="row">
        <div className="two-columns order-2">
          <p>
            a problem-loving .NET System Development student with a passion for
          </p>
          <ul>
            <li>Learning new tech</li>
            <li>Developing fun and useful projects</li>
            <li>Working with dedicated people</li>
            <li>Agile work methods</li>
            <li>Clean and concise commenting and commit messages</li>
          </ul>
          <p>
            💥 I am currently looking for an internship in the fall on 2023,{" "}
            <a href="mailto:mqvarnstrom80@gmail.com?subject=Hello!">
              contact me
            </a>
            to get in touch! 💥
          </p>
        </div>
        <div className="two-columns order-1">
          <img
            src="../src/assets/me.jpg"
            className="photo-me"
            alt="Photo of me"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
