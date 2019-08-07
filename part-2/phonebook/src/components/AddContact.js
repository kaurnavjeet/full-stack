import React from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";

const styles = {
  center: {
    marginTop: "16px",
    marginLeft: "auto",
    marginBottom: 0,
    marginRight: "auto"
  }
};

const AddContact = ({
  handleSubmit,
  newName,
  handleChange,
  handleNumber,
  newNumber,
  formClasses
}) => {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={6}>
        <form className={formClasses.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name-input"
            label="name"
            className={formClasses.textField}
            type="name"
            name="name"
            autoComplete="name"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            value={newName}
          />
          <TextField
            id="outlined-phonenumber-input"
            label="phone number"
            className={formClasses.textField}
            type="phonenumber"
            name="phonenumber"
            autoComplete="phonenumber"
            margin="normal"
            variant="outlined"
            onChange={handleNumber}
            value={newNumber}
          />

          <Fab
            color="primary"
            aria-label="add"
            className={formClasses.fab}
            style={styles.center}
          >
            <AddIcon onClick={handleSubmit} />
          </Fab>
        </form>
      </Grid>
    </Grid>
  );
};

export default AddContact;
