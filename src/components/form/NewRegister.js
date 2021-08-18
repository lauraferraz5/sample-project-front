import React, { useState, useEffect } from "react";

import api from "../../api/api";

import RegistrationForm from "./RegistrationForm";

function NewRegister(props) {
  const [employeeState, setEmployeeState] = useState({
    name: "",
    country: "",
    dateOfBirth: "",
    age: "",
  });

  function handleChange(event) {
    setEmployeeState({
      ...employeeState,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const employee = {
      ...employeeState,
      age:
        employeeState.dateOfBirth.length > 0
          ? Math.trunc(
              (Date.now() - Date.parse(employeeState.dateOfBirth)) /
                (1000 * 60 * 60 * 24) /
                365
            )
          : "",
    };

    if (props.type === "create") {
      try {
        const response = await api.post("/register", employee);

        props.setList([...props.list, response.data]);

        goBack();
      } catch (error) {
        console.error(error.response);
      }
    } else if (props.type === "update") {
      const newUser = { ...employee };
      delete newUser._id;

      try {
        const response = await api.patch(
          `/update/${employeeState._id}`,
          newUser
        );

        const oldList = props.list.map((el) => {
          if (el._id === employeeState._id) {
            return response.data;
          } else {
            return el;
          }
        });

        props.setList(oldList);
        goBack();
      } catch (error) {
        console.error(error.response);
      }
    }
  }

  function goBack() {
    props.setType("");
  }

  useEffect(() => {
    if (props.selectedEmployee) {
      setEmployeeState({
        ...props.selectedEmployee,
        dateOfBirth: props.selectedEmployee.dateOfBirth.split("T")[0],
      });
    }
  }, [props.selectedEmployee]);

  return (
    <div>
      <RegistrationForm
        employeeState={employeeState}
        handleChange={handleChange}
        onSubmit={handleSubmit}
        goBack={goBack}
        type={props.type}
      />
    </div>
  );
}

export default NewRegister;
