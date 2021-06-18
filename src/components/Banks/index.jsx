import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
// Reducers and API
import {
  setConfirmModal,
  closeConfirmModal,
  showModal,
  closeModal,
} from "./../../reducers/globalReducer";
import { setIsFetch } from "./../../reducers/bankReducer";
import { getAPIInstance } from "./../../apihandler/APICall";
// Components and scss
import "./banks.scss";
import Modal from "./../common/modal";
import ConfirmModal from "../common/ConfirmModal";
import BankHeader from "./BankHeader";
import BankBody from "./BankBody";
import { notifier } from "../common/Notifier";
import AddEditBank from "./AddBank";
import AccountStatus from "./AccountStatus";

const BankComponent = ({
  bankReducer,
  globalReducer,
  showModal,
  closeModal,
  setConfirmModal,
  closeConfirmModal,
  setIsFetch,
  ...rest
}) => {
  const { isConfirm } = globalReducer;
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState({});
  const [deleteData, setDeleteData] = useState({});
  const onEdit = (data) => {
    setIsEdit(true);
    setEditData(data);
    showModal();
  };
  const addUser = () => {
    setIsEdit(false);
    showModal();
  };
  const deleteUser = (data) => {
    setDeleteData(data);
    setConfirmModal(data);
  };

  const deleteAccount = async (_id, isActive) => {
    try {
      let msg = "";
      const updateData = { isActive: !isActive };
      const apiCall = new getAPIInstance();
      const response = await apiCall.put("user", updateData, _id);
      msg = "Account Updated Successfully";
      setIsFetch();
      notifier(msg, "Success");
      closeConfirmModal();
    } catch (error) {
      const errResponse = await error.json();
      const msg = errResponse.msg;
      notifier(msg, "Error");
      closeConfirmModal();
    }
  };
  return (
    <>
      <ConfirmModal show={isConfirm}>
        <AccountStatus
          setDeleteData={setDeleteData}
          closeConfirmModal={closeConfirmModal}
          deleteAccount={deleteAccount}
          deleteData={deleteData}
        />
      </ConfirmModal>
      <Modal>
        <AddEditBank isEdit={isEdit} editData={editData} />
      </Modal>
      <Container fluid className="bankContainer">
        <Row className="sticky-header">
          <Col>
            <BankHeader addUser={addUser} />
          </Col>
        </Row>
        <Row>
          <Col>
            <BankBody onEdit={onEdit} onDelete={deleteUser} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = ({ bankReducer, globalReducer }) => ({
  bankReducer,
  globalReducer,
});
const mapDispatchToProps = {
  showModal,
  closeModal,
  closeConfirmModal,
  setConfirmModal,
  setIsFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(BankComponent);
