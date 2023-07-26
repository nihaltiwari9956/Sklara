import React, { useState, Fragment, useEffect } from "react";
import "./EmployeeList.css"
import data from "./data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import Navbar from "../../components/navbar/Navbar";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { API } from "../../API";
import { isAutheticated } from "../../components/auth/authhelper";
import swal from "sweetalert";

const Employee = ({userdata}) => {
  const {token} = isAutheticated();
    const navigate = useNavigate();
  const [contacts, setContacts] = useState(data);
  const [users, setUsers] = useState([])

useEffect(()=>{
  const getUsers = async() =>{
    let res = await axios.get(`${API}/api/user/getUserByMe`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    console.log(res.data.users)
    if(res.data.status === 'ok'){
      setUsers(res.data.users)
    }else{
      swal('Error',"Unable to fetch data",'error')
    }
  };
  getUsers()
},[])

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    Business_Unit: "",
    Role: "",
    Last_Active: "",
    HR: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  function handleChange(value) {
    navigate(value);
  }

 

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      email: editFormData.email,
      fullName: editFormData.fullName,
      Business_Unit: editFormData.Business_Unit,
      Role: editFormData.Role,
      Last_Active: editFormData.Last_Active,
      HR: editFormData.HR,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
     fullName: contact.fullName,
     email: contact.email,
      Business_Unit: contact.Business_Unit,
      Role: contact.Role,
      Last_Active: contact.Last_Active,
      HR: contact.HR,
    };

    setEditFormData(formValues);
  };

  return (
      <>
      <Navbar userdata={userdata} />
      <div className='mp-outer container-fluid main-div pt-3'>
        <div className='container-fluid px-0'>
        <div className='form-dec'>
            <span className='form-color'>
              Add New User  <select className='form-input' defaultValue={'DEFAULT'} name='role' onChange={event => handleChange(event.target.value)}>
              <option value="DEFAULT" disabled hidden>Select</option>
               <option value="/employee_list/Add">Single USer</option>
              <option>Multiple USer</option>
              
          </select>   
            </span>
           
        </div>
        <div className="my-4 overflow-auto">
      <form onSubmit={handleEditFormSubmit}>
        <table style={{width:'100%'}}>
          <thead>
            <tr>
              <th>Approved</th>
              <th>Activated</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Last Active</th>
              <th>HR</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <Fragment>
                {editContactId === user._id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}

                  />
                ) : (
                  <ReadOnlyRow
                    contact={user}
                    handleEditClick={handleEditClick}
                    handleCancelClick={handleCancelClick}

                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      </div>
     
    </div>
    </div>
    </>
  );
};

export default Employee;