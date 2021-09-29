import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
const AddTechModal = () => {
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const onSubmit = () => {
    if (firstname === "" || lastName === "") {
      M.toast({
        html: "Please enter a First and last name",
      });
    } else {
      console.log(firstname, lastName);
      //clear field
      setFirstname("");
      setLastname("");
    }
  };
  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor="firstname" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="moadal-close waves-effect waves-light btn blue"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
