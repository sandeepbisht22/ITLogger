import React, { useEffect } from "react";
import LogsItem from "./LogsItem";
import Preloader from "./../layout/Preloader";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disabled-next-line
  }, []);

  if (loading || logs == null) {
    return <Preloader></Preloader>;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => (
          <li>
            <LogsItem log={log} key={log.id}></LogsItem>
          </li>
        ))
      )}
    </ul>
  );
};

Logs.prototype = {
  log: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  log: state.log,
  getLogs: PropTypes.func.isRequired,
});
export default connect(mapStateToProps, { getLogs })(Logs);
