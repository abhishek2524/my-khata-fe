import React, { useEffect, useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Buttons from "../common/Button";
import { getAPIInstance } from "./../../apihandler/APICall";
import { banks, accountType } from "./../../constants/bankLogo";
import { closeModal } from "./../../reducers/globalReducer";
import { setIsFetch } from "./../../reducers/bankReducer";
import { notifier } from "../common/Notifier";

function AddEditBank(props) {
  let msg = "";
  const dispatch = useDispatch();
  const { isEdit } = props;
  const [account, setAccount] = useState({
    bankID: "",
    accountHolder: "",
    accountType: "",
    companyname: "",
  });
  const handleBankfForm = async (event) => {
    event.preventDefault();
    if (isEdit) {
      try {
        const { _id, bankID, companyID } = props.editData;
        const apiCall = new getAPIInstance();
        const response = await apiCall.put(
          "user",
          { ...account, bankID, bank_obj_id: account.bankID, companyID },
          _id
        );
        msg = "Account Updated Successfully";
        dispatch(closeModal());
        dispatch(setIsFetch());
        notifier(msg, "Success");
      } catch (error) {
        const errResponse = await error.json();
        const msg = errResponse.msg;
        notifier(msg, "Error");
      }
    } else {
      try {
        const apiCall = new getAPIInstance();
        const response = await apiCall.post("user", account);
        msg = "Account Created Successfully";
        dispatch(closeModal());
        dispatch(setIsFetch());
        notifier(msg, "Success");
      } catch (error) {
        const errResponse = await error.json();
        const msg = errResponse.msg;
        notifier(msg, "Error");
      }
    }
  };
  useEffect(() => {
    if (props.isEdit) {
      const { accountHolder, accountType, bank, companyName } = props.editData;
      setAccount({
        bankID: bank,
        accountHolder,
        accountType,
        companyname: companyName,
      });
    } else {
      setAccount({
        bankID: "1",
        accountHolder: "",
        accountType: "Savings",
        companyname: "",
      });
    }
  }, []);
  return (
    <div className="bank-form">
      <Form onSubmit={handleBankfForm}>
        {/* <Form.Group as={Row}>
          <Form.Label column sm="12">
            Bank Name
          </Form.Label>
          <Col sm="12">
            <Form.Control
              type="text"
              name="bankName"
              placeholder="Enter Bank Name"
              id="bankname"
              value={account.bankName}
              onChange={(e) =>
                setAccount((prev) => {
                  return { ...prev, [e.target.name]: e.target.value };
                })
              }
            />
          </Col>
        </Form.Group> */}

        <Form.Group as={Row}>
          <Form.Label column sm="12">
            Account Holder Name
          </Form.Label>
          <Col sm="12" className="p-0 m-0">
            <Form.Control
              type="text"
              name="accountHolder"
              id="accountHolder"
              placeholder="Enter Account Holder Name"
              value={account.accountHolder}
              onChange={(e) =>
                setAccount((prev) => {
                  return { ...prev, [e.target.name]: e.target.value };
                })
              }
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="12">
            Bank Name
          </Form.Label>
          <Form.Control
            as="select"
            size="md"
            name="bankID"
            placeholder="Enter Bank Name"
            id="bankID"
            value={account.bankID}
            onChange={(e) =>
              setAccount((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              })
            }
          >
            {banks.map((bank, index) => {
              return (
                <option key={index} value={bank.id}>
                  {bank.name}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="12">
            Account Type
          </Form.Label>
          <Form.Control
            as="select"
            size="md"
            name="accountType"
            id="accountType"
            value={account.accountType}
            onChange={(e) =>
              setAccount((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              })
            }
          >
            {accountType.map((type, index) => {
              return (
                <option key={index} value={type.id}>
                  {type.value}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        {account.accountType === "Salary" && (
          <Form.Group as={Row}>
            <Form.Label column sm={12}>
              Company Name
            </Form.Label>
            <Form.Control
              type="text"
              name="companyname"
              id="companyname"
              value={account.companyname}
              placeholder="Enter Company Name"
              onChange={(e) =>
                setAccount((prev) => {
                  return { ...prev, [e.target.name]: e.target.value };
                })
              }
            />
          </Form.Group>
        )}
        <Buttons type="submit" size="medium">
          {props.isEdit ? "Edit" : "Add"}
        </Buttons>
      </Form>
    </div>
  );
}

export default AddEditBank;
