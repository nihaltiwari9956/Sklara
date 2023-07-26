import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  console.log(editFormData)
  return (

    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Business_Unit..."
          name="Business_Unit"
          value={editFormData.Business_Unit}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an Role..."
          name="Role"
          value={editFormData.Role}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an Last_Active..."
          name="Last_Active"
          value={editFormData.Last_Active}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an HR.."
          name="HR"
          value={editFormData.HR}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button className="btn btn-primary" type="submit">Save</button>
        <button className="btn btn-secondary" type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>

  );
};

export default EditableRow;