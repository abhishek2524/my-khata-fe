import Button from "./../common/Button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TableComponent from "../common/table";
import {
  setLoader,
  stopLoader,
  showModal,
  closeModal,
  setInit,
} from "./../../reducers/globalReducer";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { getAPIInstance } from "../../apihandler/APICall";
import { clearIsFetch } from "../../reducers/bankReducer";
import { useParams } from "react-router";
const moment = require("moment");

function BankDetailBody(props) {
  const { bankid } = useParams();
  const { SearchBar } = Search;
  const { setLoader, clearIsFetch, stopLoader, setInit, globalReducer } = props;
  const { isLoading } = globalReducer;
  const [dataList, setDataList] = useState([]);
  const { fetchData } = props.bankReducer;
  const [totalCount, settotalCount] = useState(0);

  const actionBtn = <div></div>;
  let columns = [
    {
      dataField: "date",
      formatter: (cell, row) => {
        return new Date(`${cell}`).toDateString();
      },
      text: "Date",
      sort: true,
    },
    {
      dataField: "amount",
      text: "Amount",
      formatter(cell) {
        return `Rs. ${cell}`;
      },
      sort: true,
    },
    {
      dataField: "transactionType",
      text: "Type",
      sort: true,
    },
    {
      dataField: "isSalary",
      text: "Salary?",
      sort: true,
      formatter(cell) {
        return cell ? "Yes" : "No";
      },
    },
    {
      dataField: "comments",
      text: "Comment",
      formatter(cell) {
        return cell ? cell : "-";
      },
    },
    {
      dataField: "action",
      text: "Action",
      formatter: (cell, row, index) => {
        if (cell) {
          return !props.isActive ? null : (
            <>
              <Button
                className="mx-2"
                variant="info"
                onClick={() => props.onEdit(cell, row, index, bankid)}
              >
                <i className="fa fa-edit text-light" aria-hidden="true"></i>
              </Button>
              <Button
                className="mx-2"
                variant="danger"
                onClick={() => props.onDelete(cell, row, index, bankid)}
              >
                <i className="fa fa-trash text-light" aria-hidden="true"></i>
              </Button>
            </>
          );
        }
      },
    },
  ];
  columns = columns.map((res, index) => {
    return {
      ...res,
      footerStyle: {
        color: "white",
      },
      footer:
        index === 0
          ? "Total"
          : index === 1
          ? `Rs. ${totalCount.toString()}/-`
          : "",
    };
  });
  useEffect(() => {
    const getData = async () => {
      let count = 0;
      setLoader(true);
      const apiCall = new getAPIInstance();
      const response = await apiCall.get(`bank/${bankid}`);
      setDataList(
        response.data.map((res, index) => {
          if (res.transactionType === "deposit") {
            // settotalCount((total) => total + parseInt(res.amount));
            count += parseInt(res.amount);
          } else if (res.transactionType === "withdrawal") {
            // settotalCount((total) => total - parseInt(res.amount));
            count -= parseInt(res.amount);
          }
          return {
            ...res,
            action: actionBtn,
          };
        })
      );
      settotalCount(count);
      stopLoader(true);
      clearIsFetch();
    };
    getData();
    return () => {
      setInit();
      clearIsFetch();
    };
  }, [fetchData]);
  return isLoading ? null : (
    <ToolkitProvider keyField="id" data={dataList} columns={columns} search>
      {(props) => {
        return (
          <div className="d-flex flex-column">
            <SearchBar {...props.searchProps} />
            <TableComponent
              sort={{ dataField: "date", order: "desc" }}
              columns={columns}
              dataList={dataList}
              {...props.baseProps}
            />
          </div>
        );
      }}
    </ToolkitProvider>
  );
}

const mapStateToProps = ({ globalReducer, bankReducer }) => ({
  globalReducer,
  bankReducer,
});
const mapDispatchToProps = {
  setLoader,
  stopLoader,
  setInit,
  showModal,
  closeModal,
  clearIsFetch,
};
export default connect(mapStateToProps, mapDispatchToProps)(BankDetailBody);
