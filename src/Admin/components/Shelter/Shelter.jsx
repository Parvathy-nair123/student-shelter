import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Shelter.css";
import { collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";


export default function BasicTable() {
  const [propertiesList, setPropertiesList] = React.useState([]);

  React.useEffect(() => {
    getProperties();
  }, []);

  const getProperties = async () => {
    const propertiesSnapshot = await getDocs(query(collection(db, "properties")));
    const data = propertiesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setPropertiesList(data);
  };

  const handleApprove = async (docId) => {
    const propertyRef = doc(db, "properties", docId);
    await updateDoc(propertyRef, {
      property_status: 1
    });
    // Refresh the properties list
    getProperties();
  };

  const handleDelete = async (docId) => {
    const propertyRef = doc(db, "properties", docId);
    await deleteDoc(propertyRef);
    // Refresh the properties list
    getProperties();
  };

  return (
    <div className="Table">
      <h3>All Shelters</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650, overflowY: "scroll" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Place</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Rooms</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {propertiesList.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{row.property_name}</TableCell>
                <TableCell align="left">{row.property_place}</TableCell>
                <TableCell align="left">
                  <span className="status">{row.property_price}</span>
                </TableCell>
                <TableCell align="left">
                  <span className="status">{row.property_rooms}</span>
                </TableCell>
                <TableCell align="left" className="Details">
                  {row.property_status === 0 ? (
                    <>
                      <button
                        className="approve-button"
                        onClick={() => handleApprove(row.id)}
                      >
                        Approve
                      </button>{" "}
                      |{" "}
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(row.id)}
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(row.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
