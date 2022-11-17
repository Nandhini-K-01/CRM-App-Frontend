import * as React from 'react';
import { styled,Table,TableBody,TableContainer,TableHead ,TableRow, Paper, Button} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
    const [servicesData, setServicesData] = React.useState([]);
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    React.useEffect(()=>{
        async function getData(){
        var decodedToken = jwt.decode(token);
        if(decodedToken.exp * 1000 < Date.now() ){
            navigate('/');
        }else {
            var response = await axios.get("https://b38-crm-app.herokuapp.com/services/get", {
                headers: {
                    "accesstoken": token
                }
            });
            setServicesData(response.data);
        }
        }
        getData();
    }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Service Name</StyledTableCell>
            <StyledTableCell>Requested By</StyledTableCell>
            <StyledTableCell>Contact</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {servicesData.map((row) => (
            <StyledTableRow key={row.servicename}>
              <StyledTableCell component="th" scope="row">
                {row.servicename}
              </StyledTableCell>
              <StyledTableCell>{row.requestedby}</StyledTableCell>
              <StyledTableCell>{row.contact}</StyledTableCell>
              <StyledTableCell>{row.status}</StyledTableCell>
              <TableCell>
                <Button variant="text">Edit</Button> <br />
                <Button variant="text">Delete</Button>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}