import React, { useState, useEffect } from "react";

import Btn from "../form/Btn";

import "./Homepage.css";

import api from "../../api/api";

import Navbar from "./Navbar";
import Modal from "../modal/Modal";
import List from "../list/List";

function Homepage() {
  const [type, setType] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await api.get("/employees");
        setList([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchList();
  }, []);

  function updateEmployee(employee) {
    setSelectedEmployee(employee);
    setType("update");
  }

  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <h2>Employee Directory</h2>

        {list.length <= 0 && (
          <div className="mvv-container">
            <p>There is no registration yet. Register now</p>
            <Btn
              label="Create"
              onClick={() => setType("create")}
              unique={true}
            />
          </div>
        )}
        {list.length > 0 && (
          <React.Fragment>
            <List list={list} updateEmployee={updateEmployee} />
            <div className="mvv-container">
              <Btn
                label="Create"
                onClick={() => setType("create")}
                unique={true}
              />
            </div>
          </React.Fragment>
        )}
      </div>
      {type !== "" && (
        <Modal
          type={type}
          setType={setType}
          selectedEmployee={selectedEmployee}
          list={list}
          setList={setList}
        />
      )}
    </div>
  );
}

export default Homepage;
