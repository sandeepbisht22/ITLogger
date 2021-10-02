import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { addTechs } from "../../actions/techActions";
import AddLogModal from "./../logs/AddLogModal";

const AddTechModal = ({ addTechs }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const onSubmit = () => {
    if (firstname === "" || lastname === "") {
      M.toast({
        html: "Please enter a First and last name",
      });
    } else {
      console.log(firstname, lastname);
      addTechs({
        firstname,
        lastname,
      });

      M.toast({
        html: `${firstname} ${lastname} was added as a tech`,
      });
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
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor="lastname" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light btn blue"
        >
          Enter
        </a>
      </div>
    </div>
  );
};
AddLogModal.prototype = {
  addTechs: PropTypes.func.isRequired,
};
export default connect(null, { addTechs })(AddTechModal);
