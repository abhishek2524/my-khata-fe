import { Modal } from "react-bootstrap";
import React from "react";
import { closeConfirmModal } from "../../../reducers/globalReducer";
import { useDispatch } from "react-redux";

function ConfirmModal({ show, children, title, ...rest }) {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeConfirmModal());
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title ? title : null}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light">{children}</Modal.Body>
    </Modal>
  );
}

export default ConfirmModal;
