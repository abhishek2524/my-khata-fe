import React from "react";
import { connect } from "react-redux";
import Buttons from "../common/Button";
import SubHeader from "../common/SubHeader";
import { showModal, closeModal } from "./../../reducers/globalReducer";

function BankHeader({ addUser, showModal, ...rest }) {
  return (
    <SubHeader>
      <Buttons onClick={addUser} icon={"fa fa-plus"}>
        Add Bank
      </Buttons>
    </SubHeader>
  );
}

const mapDispatchToProps = { showModal, closeModal };
export default connect(null, mapDispatchToProps)(BankHeader);
