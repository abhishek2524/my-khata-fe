import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddDetailsForm from "./AddDetailsForm";
import BankDetailBody from "./BankDetailBody";
import BankDetailHeader from "./BankDetailHeader";
import "./bankdetails.scss";

import Modal from "./../common/modal";
import { showModal, closeModal } from "./../../reducers/globalReducer";
import {
  closeConfirmModal,
  setConfirmModal,
} from "./../../reducers/globalReducer";
import { connect, useDispatch } from "react-redux";
import ConfirmModal from "../common/ConfirmModal";
import Buttons from "../common/Button";
import { useLocation } from "react-router";
import { getAPIInstance } from "../../apihandler/APICall";
import { setIsFetch } from "../../reducers/bankReducer";
import { notifier } from "../common/Notifier";

function BankDetails({
  bankReducer,
  showModal,
  closeConfirmModal,
  setConfirmModal,
  globalReducer,
  ...rest
}) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { accountHolder, isActive, bankname, accountType } = location.state;
  const [deleteData, setDeleteData] = useState({});
  const { isConfirm } = globalReducer;
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState({
    date: new Date().toISOString().split("T")[0],
    amount: "0",
    type: "1",
    tax: "0",
  });
  const onEdit = (cell, row, index, bankid) => {
    row.date = row.date.split("T")[0];
    setEditData(row);
    setIsEdit(true);
    showModal();
  };
  const onAdd = () => {
    setIsEdit(false);
    showModal();
  };
  const onDelete = (cell, row, index, bankid) => {
    setDeleteData({ ...row, bankid });
    setConfirmModal();
  };
  const deleteDetails = async () => {
    try {
      let msg;
      const apiCall = new getAPIInstance();
      const response = await apiCall.delete(
        `bank`,
        { transactionId: deleteData._id },
        deleteData.bankid
      );
      msg = "Deleted Successfully";
      dispatch(closeModal());
      dispatch(setIsFetch());
      notifier(msg, "Success");
      closeConfirmModal();
      setDeleteData({});
    } catch (error) {
      const errResponse = await error.json();
      const msg = errResponse.msg;
      notifier(msg, "Error");

      closeConfirmModal();
      setDeleteData({});
    }
  };
  return (
    <>
      <ConfirmModal show={isConfirm}>
        <div className="d-flex flex-column">
          {deleteData._id && (
            <p className="text-center">
              Are you sure you want to delete this transaction with status :
              <br />
              Date : {deleteData.date.split("T")[0]}
              <br />
              Type : {deleteData.transactionType}
              <br />
              Amount : Rs. {deleteData.amount}
            </p>
          )}
          <div className="d-flex justify-content-end">
            <Buttons
              className="mx-2"
              variant="danger"
              onClick={closeConfirmModal}
            >
              <i className="fa fa-times mx-1 text-light" aria-hidden="true" />
              No
            </Buttons>
            <Buttons className="mx-2" variant="primary">
              <i
                className="fa fa-check mx-1 text-light"
                aria-hidden="true"
                onClick={deleteDetails}
              />
              Yes
            </Buttons>
          </div>
        </div>
      </ConfirmModal>
      <Modal title={isEdit ? "Edit Detail" : "Add Detail"}>
        <AddDetailsForm
          accountType={accountType}
          isEdit={isEdit}
          editData={isEdit ? editData : null}
        />
      </Modal>
      <Container fluid className="bankDetailContainer">
        <Row className="sticky-header">
          <Col>
            <BankDetailHeader
              data={{ accountHolder, isActive, bankname }}
              onAdd={onAdd}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="tableContent">
              <BankDetailBody
                isActive={isActive}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const mapStateToProps = ({ bankReducer, globalReducer }) => ({
  bankReducer,
  globalReducer,
});
const mapDispatchToProps = {
  showModal,
  closeModal,
  setConfirmModal,
  closeConfirmModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(BankDetails);
