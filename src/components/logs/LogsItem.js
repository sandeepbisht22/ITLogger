import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
const LogsItem = ({ log }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-moadal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span>ID #{log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY,h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i class="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogsItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogsItem;
