import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";

import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";

// import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
// import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import "./table.scss";

const TableComponent = (props) => {
  const { SearchBar } = Search;
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    prePageText: "<",
    nextPageText: ">",
    showTotal: true,
    alwaysShowAllBtns: true,
  });
  const { dataList, columns, ...rest } = props;

  return (
    <>
      {dataList && (
        <BootstrapTable
          bootstrap4
          // keyField="id"
          data={dataList}
          columns={columns}
          pagination={pagination}
          striped
          hover
          condensed
          noDataIndication="No records"
          classes="wrapper"
          headerWrapperClasses="tbl-header-footer"
          footerClasses="tbl-header-footer"
          {...rest}
        />
      )}
    </>
  );
};

export default TableComponent;
