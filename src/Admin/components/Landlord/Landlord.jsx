import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Landlord.css";

function createData(name, contact, email, location) {
  return { name, contact, email, location };
}

const rows = [
  createData("Jonathan", "+44 (0) 1223 456979", "jonathan@gmail.com", "London"),
  createData("Emily ", "+44 (0) 1463 39345679 ", "emily@gmail.com", "England"),
  createData(
    "Tony Stark",
    "+44 (0) 1223 3123979 ",
    "tony@gmail.com",
    "Scotland"
  ),
  createData("Jenny", "+44 (0) 1433 39479 ", "jenny@gmail.com", "Wales"),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Registered Landloards</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Contact</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row, key) => (
              <TableRow
                key={key + 1}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {key + 1}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.contact}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.email}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details">
                  {row.location}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
