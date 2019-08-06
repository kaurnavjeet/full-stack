import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const Contact = ({ person, handleDelete, rowClasses, StyledTableCell }) => {
  return (
    <>
      <StyledTableCell component="th" scope="row">
        {person.name}
      </StyledTableCell>
      <StyledTableCell align="right">{person.number}</StyledTableCell>
      <StyledTableCell align="right">
        <Button
          variant="contained"
          color="secondary"
          className={rowClasses.button}
          onClick={e => handleDelete(e, person)}
        >
          Delete
          <DeleteIcon className={rowClasses.rightIcon} />
        </Button>
      </StyledTableCell>
    </>
  );
};

export default Contact;
