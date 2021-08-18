import React from "react";
import Btn from "./Btn";

import SimpleInput from "./SimpleInput";

function RegistrationForm(props) {
  return (
    <div className="container">
      <form onSubmit={props.handleSubmit}>
        <SimpleInput
          name="name"
          label="Name"
          type="text"
          value={props.employeeState.name}
          onChange={props.handleChange}
        />
        <SimpleInput
          name="country"
          label="Country"
          type="text"
          value={props.employeeState.country}
          onChange={props.handleChange}
        />
        <SimpleInput
          name="dateOfBirth"
          label="Date of Birth"
          type="date"
          value={props.employeeState.dateOfBirth}
          onChange={props.handleChange}
        />
        <SimpleInput
          name="age"
          label="Age"
          type="number"
          value={
            props.employeeState.dateOfBirth.length > 0
              ? Math.trunc(
                  (Date.now() - Date.parse(props.employeeState.dateOfBirth)) /
                    (1000 * 60 * 60 * 24) /
                    365
                )
              : ""
          }
          onChange={props.handleChange}
          disabled="disable"
        />
        <div>
          {props.type === "create" && (
            <Btn
              label="Create"
              onClick={(e) => props.onSubmit(e)}
              onClickBack={() => props.goBack()}
            />
          )}

          {props.type === "update" && (
            <Btn
              label="Update"
              onClick={(e) => props.onSubmit(e)}
              onClickBack={() => props.goBack()}
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
