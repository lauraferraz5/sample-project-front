import React from "react";

import "./Modal.css";

import NewRegister from "../form/NewRegister";

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <NewRegister
          type={props.type}
          setType={props.setType}
          selectedEmployee={props.selectedEmployee}
          list={props.list}
          setList={props.setList}
        />
      </div>
    </div>
  );
}

export default Modal;
