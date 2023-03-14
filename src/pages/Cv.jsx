import React, { useState, useEffect } from "react";
import axios from "axios";
import ListContact from "../components/ListContact";
import ListEducation from "../components/ListEducation";
import ListOther from "../components/ListOther";
import ListWork from "../components/ListWork";

const Cv = () => {
  const [data, setData] = useState({ work: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios("cv.json");
      setData(result.data);
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
          {isLoading ? (
            <p>Loading...</p>
          ) : data.contact ? (
            <ListContact data={data.contact} />
          ) : (
            <p>No contact.</p>
          )}
          <hr />
          <h2>Education</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : data.education ? (
            <ListEducation data={data.education} />
          ) : (
            <p>No contact.</p>
          )}
          <hr />
          <h2>Other experiences</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : data.other ? (
            <ListOther data={data.other} />
          ) : (
            <p>No contact.</p>
          )}
          <hr />
        </div>
        <div className="two-columns">
          <h2>Professional experience</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : data.work ? (
            <ListWork data={data.work} />
          ) : (
            <p>No contact.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Cv;
