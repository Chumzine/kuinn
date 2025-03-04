import { useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/material";


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
  

export const StudentDataTable = () => {
    const student = useSelector((state) => state.register)

    return (
      <Box
        sx={{
          width: { xs: '50%', sm: 1200},
          ml: 10,
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ padding: 2 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Full Name</StyledTableCell>
                <StyledTableCell align="right">Student ID</StyledTableCell>
                <StyledTableCell align="right">Course of Study</StyledTableCell>
                <StyledTableCell align="right">Level</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {student.fullName}
                </StyledTableCell>
                <StyledTableCell align="right">{student.studentID}</StyledTableCell>
                <StyledTableCell align="right">{student.courseOfStudy}</StyledTableCell>
                <StyledTableCell align="right">{student.level}</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
}