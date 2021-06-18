import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import BankCard from "./BankCard";
import { connect } from "react-redux";
import { setLoader, stopLoader, setInit } from "./../../reducers/globalReducer";
import { clearIsFetch } from "./../../reducers/bankReducer";
import { getAPIInstance } from "./../../apihandler/APICall";

const BankBody = (props) => {
  const {
    globalReducer,
    bankReducer,
    clearIsFetch,
    setLoader,
    stopLoader,
    setInit,
  } = props;
  const { isLoading } = globalReducer;
  const { fetchData } = bankReducer;
  const [cardData, setcardData] = useState([]);
  const noData = (
    <span>
      <i className="fas fa-money-check"></i>No Bank Found.Please Add Bank Using
      Add Bank Button.
    </span>
  );
  useEffect(() => {
    const getData = async () => {
      setLoader(true);
      const apiCall = new getAPIInstance();
      const response = await apiCall.get("user");
      stopLoader(true);
      clearIsFetch();
      setcardData(response.data);
    };
    getData();
    return () => {
      setInit();
      clearIsFetch();
    };
  }, [fetchData]);

  return (
    <div className="bankBodyDiv">
      <Row>
        {isLoading ? null : cardData && cardData.length > 0 ? (
          cardData.map((bankDetail, index) => {
            return (
              <Col
                key={index}
                className="col"
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
              >
                <BankCard
                  data={bankDetail}
                  onDelete={props.onDelete}
                  onEdit={props.onEdit}
                />
              </Col>
            );
          })
        ) : (
          <div className={`no-data-div`}>{noData}</div>
        )}
      </Row>
    </div>
  );
};

const mapStateToProps = ({ globalReducer, bankReducer }) => ({
  globalReducer,
  bankReducer,
});
const mapDispatchToProps = {
  setLoader,
  stopLoader,
  setInit,
  clearIsFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(BankBody);
