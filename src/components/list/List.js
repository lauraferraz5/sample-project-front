import React from "react";

import "./List.css";

function List({ list, updateEmployee }) {
  return (
    <div className="list">
      <div className="list-header list-row">
        <div>Name</div>
        <div>Country</div>
        <div>Birth Date</div>
        <div>Age</div>
      </div>

      {list.map((el, index) => {
        return (
          <div
            key={index}
            className="list-item list-row"
            onClick={(e) => updateEmployee(el)}
          >
            <div>{el.name}</div>
            <div>{el.country}</div>
            <div>
              {el.dateOfBirth.split("T")[0].split("-").reverse().join("/")}
            </div>
            <div>{el.age}</div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
