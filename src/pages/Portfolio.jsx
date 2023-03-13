import React, { useState, useEffect } from "react";
import axios from "axios";
import ListProjects from "../components/ListProjects";
import ListModals from "../components/ListModals";

const Portfolio = () => {
  const [data, setData] = useState({ work: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        "https://api.github.com/users/qvarnstr0m/repos"
      );
      console.log(result.data);
      setData({ work: result.data });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <main>
      <div className="header-text">
        <h1>Portfolio 💼</h1>
      </div>
      <div className="row">
        <div className="two-columns">
          <p>
            Here you can find a few of my projects. A few are school projects,
            most are personal. To see all of my projects, check out{" "}
            <a
              href="https://www.github.com/qvarnstr0m"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/qvarnstr0m
            </a>
          </p>
        </div>
        <div className="two-columns"></div>
      </div>
      <div className="row">
        {isLoading ? (
          <p>Loading...</p>
        ) : data.work && data.work.length > 0 ? (
          <ListProjects data={data.work} />
        ) : (
          <p>No projects.</p>
        )}
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : data.work && data.work.length > 0 ? (
        <ListModals data={data.work} />
      ) : (
        <p>No projects.</p>
      )}
    </main>
  );
};

export default Portfolio;
