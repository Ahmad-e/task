import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
  
  export default function CustomizedTables(data) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ width:"100%" }} aria-label="customized table">
          <TableBody>
           <StyledTableRow key={1}>
                <StyledTableCell width={"150px"} align="start">Brand</StyledTableCell>
                <StyledTableCell align="start">Lima</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={2}>
                <StyledTableCell width={"150px"} align="start">Cartridge</StyledTableCell>
                <StyledTableCell align="start">Ceramic Sedal</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={3}>
                <StyledTableCell width={"150px"} align="start">Color</StyledTableCell>
                <StyledTableCell align="start"> 
                    <span style={{ background: "#222425"}} className="color_item"> </span>
                    <span style={{ background: "#7A7C80"}} className="color_item"> </span>
                    <span style={{ background: "#BEC7D2"}} className="color_item"> </span>
                </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={4}>
                <StyledTableCell width={"150px"} align="start">Type</StyledTableCell>
                <StyledTableCell align="start">Flusher Tap</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={5}>
                <StyledTableCell width={"150px"} align="start">Temperature</StyledTableCell>
                <StyledTableCell align="start">Hot and Cold</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={6}>
                <StyledTableCell width={"150px"} align="start">Material</StyledTableCell>
                <StyledTableCell align="start">Brass 59 - 62</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }