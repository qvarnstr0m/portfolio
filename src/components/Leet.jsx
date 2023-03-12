import React from "react";

const Leet = () => {
  return (
    <>
      <label for="secret"></label>

      <input className="modal-state" id="secret" type="checkbox" />
      <div className="modal">
        <label className="modal__bg" for="secret"></label>
        <div className="modal__inner">
          <label className="modal__close" for="secret"></label>
          <img src="/src/assets/hackerman.jpeg" className="hackerman-image" />
          <p>Hackerman!!!</p>
        </div>
      </div>
    </>
  );
};

export default Leet;
