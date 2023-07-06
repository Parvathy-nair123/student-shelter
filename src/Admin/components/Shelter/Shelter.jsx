import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Shelter.css";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../config/firebase";


export default function BasicTable() {
  const [propertiesList, setpropertiesList] = React.useState([]);

  React.useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const propertiesCountQuerySnapshot = await getDocs(
      query(collection(db, "properties"))
    );
    if (propertiesCountQuerySnapshot.docs.length > 0) {
      const data = propertiesCountQuerySnapshot.docs.map((doc) => doc.data());
      setpropertiesList(data);
    }
  };

  const updateStatus = async () => {
    const propertiesCountQuerySnapshot = await getDocs(
      query(collection(db, "properties"))
    );
    if (propertiesCountQuerySnapshot.docs.length > 0) {
      const data = propertiesCountQuerySnapshot.docs.map((doc) => doc.data());
      setpropertiesList(data);
    }
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
            {propertiesList.map((row, key) => (
              <TableRow
                key={key + 1}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {key + 1}
                </TableCell>
                <TableCell align="left">{row.property_name}</TableCell>
                <TableCell align="left">{row.property_place}</TableCell>
                <TableCell align="left">
                  <span className="status" >{row.property_price}</span>
                </TableCell>
                <TableCell align="left">
                  <span className="status" >{row.property_rooms}</span>
                </TableCell>
                <TableCell align="left" className="Details">
                  {
                  row.property_status==0?<>
                    <button>Approve</button> | <button>Delete</button>
                  </>:<>
                    <button>Delete</button>
                  </>
                }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
