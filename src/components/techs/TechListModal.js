import React, { useEffect } from "react";
import { connect } from "react-redux";
import TechItem from "./TechItem";
import { PropTypes } from "prop-types";
import { getTechs } from "./../../actions/techActions";

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    //eslint-disabled-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => (
              <TechItem tech={tech} key={tech.id}></TechItem>
            ))}
        </ul>
      </div>
    </div>
  );
};

TechListModal.prototype = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProps, { getTechs })(TechListModal);
