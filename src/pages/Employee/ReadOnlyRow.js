import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.approved === true ? <span className="text-success fw-bold h6">Yes</span> : <span className="text-danger fw-bold h6">No</span>}</td>
      <td>{contact.active === true ? <span className="text-success fw-bold h6">Yes</span> : <span className="text-danger fw-bold h6">No</span>}</td>
      <td>{contact.fullName && contact.fullName}</td>
      <td>{contact.email}</td>
      <td>{contact.userType}</td>
      <td>{contact.lastLogin && contact.lastLogin}</td>
      <td>{contact.hr && contact.hr.name}</td>
      <td >
          <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;