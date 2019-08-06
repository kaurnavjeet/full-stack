import React from "react";
import Contact from "./Contact";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Contacts = ({
  persons,
  search,
  handleDelete,
  tableClasses,
  StyledTableCell,
  StyledTableRow
}) => {
  return (
    <Paper className={tableClasses.root}>
      <Table className={tableClasses.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Phone number</StyledTableCell>
            <StyledTableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {persons
            .filter(person =>
              person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map(person => (
              <StyledTableRow key={person.id}>
                <Contact
                  person={person}
                  handleDelete={handleDelete}
                  rowClasses={tableClasses}
                  StyledTableCell={StyledTableCell}
                />
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Contacts;
