import React from "react";
import Buttons from "../common/Button";
import { bankLogo } from "./../../constants/bankLogo";
function AccountStatus({
  deleteData,
  deleteAccount,
  setDeleteData,
  closeConfirmModal,
}) {
  return (
    <div className="prompt">
      <pre>
        {`Are you sure you want to ${
          deleteData.isActive ? "Deactive" : "Active"
        } -${deleteData.accountHolder}'s ${
          bankLogo[deleteData.bank] && bankLogo[deleteData.bank][1]
        } account`}
      </pre>
      <div>
        <Buttons
          className="mx-2"
          variant="danger"
          onClick={() => {
            setDeleteData({});
            closeConfirmModal();
          }}
        >
          <i className="fa fa-times mx-1 text-light" aria-hidden="true" />
          No
        </Buttons>
        <Buttons
          className="mx-2"
          variant="primary"
          onClick={() => deleteAccount(deleteData._id, deleteData.isActive)}
        >
          <i className="fa fa-check mx-1 text-light" aria-hidden="true" />
          Yes
        </Buttons>
      </div>
    </div>
  );
}

export default AccountStatus;
