import React from "react";

const AddContact = ({
  handleSubmit,
  newName,
  handleChange,
  handleNumber,
  newNumber
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input type="text" onChange={handleChange} value={newName} />
      </div>
      <div>
        number: <input type="text" onChange={handleNumber} value={newNumber} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddContact;
