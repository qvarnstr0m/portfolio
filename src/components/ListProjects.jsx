import React from "react";

const ListProjects = ({ data }) => {
  const limitedData = data.slice(0, 6); // get only the first 6 items of data array
  return (
    <>
      {limitedData.map((item, index) => (
        <label for={item.name}>
          <div className="project-container" id={item.id}>
            <p className="project-header">{item.name}</p>
            <p>Created at: {item.created_at}</p>
          </div>
        </label>
      ))}
    </>
  );
};

export default ListProjects;
