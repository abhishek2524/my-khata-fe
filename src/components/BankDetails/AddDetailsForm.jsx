import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getAPIInstance } from "../../apihandler/APICall";
import { setIsFetch } from "../../reducers/bankReducer";
import { closeModal } from "../../reducers/globalReducer";
import { notifier } from "../common/Notifier";
import Buttons from "./../common/Button";

const AddDetailsForm = (props) => {
  const dispatch = useDispatch();
  const { bankid } = useParams();
  const [details, setDetails] = useState({
    date: new Date().toISOString().split("T")[0],
    amount: "0",
    transactionType: "deposit",
    comments: "",
    isSalary: false,
  });
  const handleBankForm = async (e) => {
    e.preventDefault();
    if (props.isEdit) {
      delete details.action;
      try {
        let msg;
        const apiCall = new getAPIInstance();
        const response = await apiCall.put(`bank`, details, bankid);
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
        let msg;
        const apiCall = new getAPIInstance();
        const response = await apiCall.post(`bank/${bankid}`, details);
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
      setDetails(props.editData);
    }
  }, []);

  return (
    <Form onSubmit={handleBankForm}>
      <Row>
        <Col sm="12" md="6">
          <Form.Group controlId="amount">
            <Form.Label>Enter Amount</Form.Label>
            <Form.Control
              type="number"
              min="0"
              name="amount"
              placeholder="Enter Amount"
              value={details.amount}
              onChange={(e) => {
                return setDetails((prev) => {
                  return { ...prev, [e.target.name]: e.target.value };
                });
              }}
            />
          </Form.Group>
        </Col>
        <Col sm="12" md="6">
          <Form.Group controlId="amttype">
            <Form.Label>Select Type</Form.Label>
            <Form.Control
              as="select"
              name="transactionType"
              value={details.transactionType}
              onChange={(e) => {
                return setDetails((prev) => {
                  if (e.target.value === "withdrawal") {
                    return {
                      ...prev,
                      [e.target.name]: e.target.value,
                      isSalary: false,
                    };
                  }
                  return { ...prev, [e.target.name]: e.target.value };
                });
              }}
            >
              <option value="deposit">Deposit</option>
              <option value="withdrawal">Withdrawal</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="6">
          <Form.Group controlId="comments">
            <Form.Label>Comments</Form.Label>
            <Form.Control
              type="text"
              name="comments"
              placeholder="Enter your comment"
              value={details.comments}
              onChange={(e) => {
                return setDetails((prev) => {
                  return { ...prev, [e.target.name]: e.target.value };
                });
              }}
            />
          </Form.Group>
        </Col>
        <Col sm="12" md="6">
          <Form.Group>
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={details.date}
              onChange={(e) => {
                return setDetails((prev) => {
                  return { ...prev, [e.target.name]: e.target.value };
                });
              }}
            />
          </Form.Group>
        </Col>
      </Row>
      {props.accountType === "Salary" &&
        details.transactionType !== "withdrawal" && (
          <Row>
            <Col sm="12" md="6">
              <Form.Group controlId="is_salary">
                <Form.Check
                  type="checkbox"
                  id="isSalary"
                  label="Is this your salary"
                  name="isSalary"
                  checked={details.isSalary}
                  onChange={(e) => {
                    return setDetails((prev) => {
                      return { ...prev, [e.target.name]: e.target.checked };
                    });
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        )}
      <Row>
        <Col sm="12" md="12" className="d-flex justify-content-end">
          <Buttons type="submit">Submit</Buttons>
        </Col>
      </Row>
    </Form>
  );
};

export default AddDetailsForm;
