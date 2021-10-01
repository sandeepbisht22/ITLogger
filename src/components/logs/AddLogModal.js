import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { addLogs } from "./../../actions/logActions";

const AddLogModal = ({ addLogs }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({
        html: "Please enter a message and tech",
      });
    } else {
      const newlog = {
        message,
        attention,
        tech,
        date: new Date(),
      };
      addLogs(newlog);

      M.toast({
        html: `Log added by ${tech}`,
      });
      //clear field
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="John Doe">Sandeep Bisht</option>
              <option value="John Doe">Parvati Devi</option>
              <option value="John Doe">Kamal Bisht</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Need Attention</span>
              </label>
            </p>
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
AddLogModal.prototype = {
  addLogs: PropTypes.func.isRequired,
};
const modalStyle = {
  width: "75%",
  height: "75%",
};
export default connect(null, { addLogs })(AddLogModal);
