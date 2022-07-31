import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const OperationLog = ({item})=>{
    return (
        <TableRow>
          <TableCell>{item.description}</TableCell>
          <TableCell align="center">{item.operationAt}</TableCell>
        </TableRow>
      );
}

export default OperationLog;