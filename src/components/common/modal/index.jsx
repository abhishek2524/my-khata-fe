import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import "./modal.scss";
import { connect } from "react-redux";
import { closeModal } from "./../../../reducers/globalReducer";

function ModalCompnent({
  globalReducer,
  closeModal,
  children,
  title,
  ...rest
}) {
  const { show } = globalReducer;
  const handleClose = () => {
    closeModal();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        {title !== "" && <Modal.Title>{title}</Modal.Title>}
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
ModalCompnent.propTypes = {
  title: PropTypes.string,
};
ModalCompnent.defaultProps = {
  title: "",
};
const mapStateToProps = ({ globalReducer }) => ({
  globalReducer,
});
const mapDispatchToProps = {
  closeModal,
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalCompnent);
