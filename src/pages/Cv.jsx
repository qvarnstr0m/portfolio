import React, { useState, useEffect } from "react";
import axios from "axios";
import ListContact from "../components/ListContact";

const Cv = () => {
  const [data, setData] = useState({ work: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios("./src/assets/cv.json");
      setData(result.data);
      console.log(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <main>
      <div>
        <h1>CV 📄</h1>
      </div>
      <div className="row">
        <div className="two-columns">
          {isLoading ? <p>Loading...</p> : <ListContact data={data.contact} />}
          <hr />
          <h2>Education</h2>
          <div id="education"></div>
          <hr />
          <h2>Other experiences</h2>
          <div id="other"></div>
          <hr />
        </div>
        <div className="two-columns">
          <h2>Professional experience</h2>
          <div id="work"></div>
        </div>
      </div>
    </main>
  );
};

export default Cv;
