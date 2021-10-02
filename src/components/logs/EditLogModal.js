import React, { useState, useEffect } from "react";

import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { udpateLogs } from "./../../actions/logActions";
import { updateLocale } from "moment";
const EditLogModal = ({ udpateLogs, current }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);
  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({
        html: "Please enter a message and tech",
      });
    } else {
      const updtLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      udpateLogs(updtLog);
      M.toast({ html: `Log updated by ${tech}` });
      console.log(message, tech, attention);
      //clear field
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };
  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
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
            {/* <label htmlFor="message" className="active">
              Log Message
            </label> */}
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
              <option value="Sandeep Bisht">Sandeep Bisht</option>
              <option value="Parvati Devi">Parvati Devi</option>
              <option value="Kamal Bisht">Kamal Bisht</option>
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
          className="modal-close waves-effect waves-light btn blue"
        >
          Enter
        </a>
      </div>
    </div>
  );
};
const modalStyle = {
  width: "75%",
  height: "75%",
};
EditLogModal.propTypes = {
  current: PropTypes.object,
  udpateLogs: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  current: state.log.current,
});
export default connect(mapStateToProps, { udpateLogs })(EditLogModal);
