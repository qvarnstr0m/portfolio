import React from "react";

const ListWork = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.employer}</p>
          <p>{item.during}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ListWork;
