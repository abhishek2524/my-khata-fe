import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Buttons from "../common/Button";
import SubHeader from "../common/SubHeader";
import { showModal, closeModal } from "./../../reducers/globalReducer";

function BankDetailHeader({ showModal, onAdd, data, ...rest }) {
  return (
    <SubHeader>
      <div className="mx-2 heading text-light font-weight-bold">
        {`${data.accountHolder} - ${data.bankname.toUpperCase()} Bank`}
      </div>
      <NavLink to="/bank">
        <Buttons>Bank List</Buttons>
      </NavLink>
      {data.isActive && (
        <Buttons variant="info" onClick={onAdd} className="mx-2">
          New Enteries
        </Buttons>
      )}
    </SubHeader>
  );
}

const mapDispatchToProps = { showModal, closeModal };
export default connect(null, mapDispatchToProps)(BankDetailHeader);
