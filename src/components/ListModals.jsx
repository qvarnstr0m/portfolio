import React from "react";

const ListModals = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <>
        <input className="modal-state" id={item.id} type="checkbox" />
        <div className="modal">
          <label className="modal__bg" for={item.name}></label>
          <div className="modal__inner">
            <label className="modal__close" for={item.name}></label>
            <h2>{item.name}</h2>
            <p>
              {item.description}
            </p>
            <p>
              Visit the
              <a
                href={`https://${item.url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                github repo
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