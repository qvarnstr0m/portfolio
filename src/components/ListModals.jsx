import React from "react";

const ListModals = ({ data }) => {
  const limitedData = data.slice(0, 6); // get only the first 6 items of data array
  console.log("hej frpn listmodals");
  return (
    <>
      {limitedData.map((item, index) => (
        <>
          <input className="modal-state" id={item.name} type="checkbox" />
          <div className="modal">
            <label className="modal__bg" for={item.name}></label>
            <div className="modal__inner">
              <label className="modal__close" for={item.name}></label>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>
                Visit the&nbsp;
                <a
                  href={`https://${item.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github repo&nbsp;
                </a>
                for more information.
              </p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default ListModals;
