import React, { useState, useEffect } from "react";
import LogsItem from "./LogsItem";
import Preloader from "./../layout/Preloader";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    //eslint-disabled-next-line
  }, []);
  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();
    setLogs(data);
    setLoading();
  };
  if (loading) {
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

export default Logs;
