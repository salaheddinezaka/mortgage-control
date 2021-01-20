import React from "react";

export default function ModalButton({ purpose, onClick }) {
  return (
    <button className="modal__button" onClick={onClick}>
      {purpose}
    </button>
  );
}
