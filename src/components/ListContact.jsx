import React from "react";

const ListContact = ({ data }) => {
  console.log(data.name);
  return (
    <div>
      <h2>{data.name}</h2>
      <h3>{data.title}</h3>
      <p>
        📧 <a href={`mailto:${data.email}?Subject=Hello!`}>{data.email}</a>
        <br />
        📞 <a href={`tel:${data.phone}`}>{data.phone}</a>
        <br />
        🌐
        <a
          href={`https://${data.web}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.web}
        </a>
        <br />
      </p>
    </div>
  );
};

export default ListContact;
