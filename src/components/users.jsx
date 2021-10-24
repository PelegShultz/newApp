import React, { Component } from "react";
import { DataGrid, renderActionsCell } from "@mui/x-data-grid";
import "../App.css";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const columns = [
  {
    field: "image",
    headerName: "Image",
    width: 150,
    headerAlign: "center",
    headerClassName: "header",
    renderCell: (x) => {
      return (
        <img src={x.row.image.thumbnail} height="50" width="50" alt="user" />
      );
    },
  },
  {
    field: "fullName",
    headerName: "Full Name",
    flex: 1,
    minWidth: 150,
    headerAlign: "center",
    headerClassName: "header",
    sortComparator: (v1, v2, param1, param2) =>
      (v1.first + v1.last).localeCompare(v2.first + v2.last),
    renderCell: (x) => {
      const partialName =
        x.row.fullName.first.charAt(0) + ". " + x.row.fullName.last;
      return (
        <Link to={"/userDeatils/" + x.row.fullName.first + x.row.fullName.last}>
          {partialName}
        </Link>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    minWidth: 150,
    headerAlign: "center",
    headerClassName: "header",
    renderCell: (x) => <a href={"mailto:" + x.row.email}>{x.row.email}</a>,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 150,
    headerAlign: "center",
    headerClassName: "header",
  },
  {
    field: "age",
    headerName: "Age",
    width: 150,
    headerAlign: "center",
    headerClassName: "header",
  },
];
const useStyles = makeStyles({
  root: {
    "& .header": {
      background: "linear-gradient(#ffea31, #ffbe31)",
      color: "black",
    },
    "& .rows": {
      background: "linear-gradient(white, gray)",
      color: "black",
    },
  },
});

const Users = (props) => {
  const classes = useStyles();
  return (
    <div style={{ width: "100%" }} className={classes.root}>
      <Helmet bodyAttributes={{ style: "background-color :  #002142" }}>
        <title>All Users</title>
      </Helmet>
      <h1>All Users</h1>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            autoHeight
            rows={props.rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            getRowClassName={() => "rows"}
            loading={true}
          />
        </div>
      </div>
    </div>
  );
};
export default Users;
