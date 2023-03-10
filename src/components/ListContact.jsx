import React from "react";

const ListContact = ({ data }) => {
  console.log(data.name);
  return (
    <div>
      <h2>{data.name}</h2>
      <h3>{data.title}</h3>
      <p>
        📧
        <a href={`mailto:${data.email}?subject=Hello!`}>{data.email}</a>
        <br />
        📞 <a href="tel:${data.contact.phone}"></a>
        <br />
        🌐
        <a
          href="https://${data.contact.web}"
          target="_blank"
          rel="noopener noreferrer"
        >
          $
        </a>
        <br />
      </p>
    </div>
  );
};

export default ListContact;
