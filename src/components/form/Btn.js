import React from "react";

function Btn(props) {
  return (
    <div className="buttons">
      {!props.unique && (
        <button
          type="button"
          className="secondary-button"
          onClick={props.onClickBack}
        >
          Return
        </button>
      )}
      <button type="button" className="primary-button" onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
}

export default Btn;
