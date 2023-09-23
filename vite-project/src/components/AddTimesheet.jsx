// import React, { useState } from "react";
// import axios from "axios";
// const AddTimesheet = ({ onAddTimesheet, onCloseForm }) => {
//   // Define state variables for form fields
//   const [date, setDate] = useState("");
//   const [lastFollowUp, setLastFollowUp] = useState("");
//   const [nextFollowUp, setNextFollowUp] = useState("");
//   const [status, setStatus] = useState("");
//   const [addContact, setAddContact] = useState("");
//   const [contacts, setContacts] = useState([]);
//   const [deleteFormData, setDeleteFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     designation: "",
//     role: "",
//     influenceLevel: "",
//   });

//   // Handle adding a contact to the list
//   const handleAddContact = () => {
//     if (addContact.trim() !== "") {
//       setContacts([...contacts, addContact.trim()]);
//       setAddContact("");
//     }
//   };

//   // Handle deleting a contact from the list
//   const handleDeleteContact = (index) => {
//     const updatedContacts = [...contacts];
//     updatedContacts.splice(index, 1);
//     setContacts(updatedContacts);
//   };

//   // Handle saving the timesheet
//   const handleSave = () => {
//     // Create a new timesheet object with the form data
//     const newTimesheet = {
//       Date :date,
//       LastFollowUp :lastFollowUp,
//       NextFollowUp: nextFollowUp,
//       Status: [status],
//       AddContact: contacts,
//     //   deleteFormData,
//     };
//     axios
//     .post("http://localhost:3001/api/timesheet", newTimesheet)
//     .then((response) => {
//       console.log("Timesheet created:", response.data);
//       onAddTimesheet(response.data); // Assuming this function adds the new Timesheet to your UI
//       onClose();
//     })
//     .catch((error) => {
//       console.error("Error creating Timesheet:", error);
//       alert("Failed to create Timesheet. Please try again.");
//     });
//     // Call the onAddTimesheet function from the parent component
//     onAddTimesheet(newTimesheet);

//     // Clear the form fields
//     setDate("");
//     setLastFollowUp("");
//     setNextFollowUp("");
//     setStatus("");
//     setContacts([]);
//     setAddContact("");
//     setDeleteFormData({
//       name: "",
//       email: "",
//       phone: "",
//       designation: "",
//       role: "",
//       influenceLevel: "",
//     });
//   };

//   return (
//     <div className="my-4">
//       <h2>Add New Timesheet</h2>
//       <form>
//         {/* Date input */}
//         <div className="mb-3">
//           <label htmlFor="date">Date</label>
//           <input
//             type="date"
//             className="form-control"
//             id="date"
//             name="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </div>

//         {/* Last Follow-Up input */}
//         <div className="mb-3">
//           <label htmlFor="lastFollowUp">Last Follow-Up</label>
//           <input
//             type="date"
//             className="form-control"
//             id="lastFollowUp"
//             name="lastFollowUp"
//             value={lastFollowUp}
//             onChange={(e) => setLastFollowUp(e.target.value)}
//           />
//         </div>

//         {/* Next Follow-Up input */}
//         <div className="mb-3">
//           <label htmlFor="nextFollowUp">Next Follow-Up</label>
//           <input
//             type="text"
//             className="form-control"
//             id="nextFollowUp"
//             name="nextFollowUp"
//             value={nextFollowUp}
//             onChange={(e) => setNextFollowUp(e.target.value)}
//           />
//         </div>

//         {/* Status dropdown */}
//         <div className="mb-3">
//           <label htmlFor="status">Status</label>
//           <select
//             className="form-select"
//             id="status"
//             name="status"
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//           >
//             <option value="">Select Status</option>
//             {/* Add status options here */}
//           </select>
//         </div>

//         {/* Add Contact input */}
//         <div className="mb-3">
//           <label htmlFor="addContact">Add Contact</label>
//           <div className="input-group">
//             <input
//               type="text"
//               className="form-control"
//               id="addContact"
//               name="addContact"
//               value={addContact}
//               onChange={(e) => setAddContact(e.target.value)}
//             />
//             <button
//               className="btn btn-success"
//               type="button"
//               onClick={handleAddContact}
//             >
//               Add Contact
//             </button>
//           </div>
//         </div>

//         {/* Display the added contacts */}
//         <div className="mb-3">
//           <label>Added Contacts:</label>
//           <ul className="list-group">
//             {contacts.map((contact, index) => (
//               <li
//                 key={index}
//                 className="list-group-item d-flex justify-content-between align-items-center"
//               >
//                 {contact}
//                 <button
//                   className="btn btn-danger btn-sm"
//                   type="button"
//                   onClick={() => handleDeleteContact(index)}
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Delete Form */}
//         <div className="mb-3">
//           <h3>Delete Form</h3>
//           {/* Name */}
//           <div className="mb-3">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               name="name"
//               value={deleteFormData.name}
//               onChange={(e) =>
//                 setDeleteFormData({ ...deleteFormData, name: e.target.value })
//               }
//             />
//           </div>
//           {/* Email */}
//           <div className="mb-3">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={deleteFormData.email}
//               onChange={(e) =>
//                 setDeleteFormData({ ...deleteFormData, email: e.target.value })
//               }
//             />
//           </div>
//           {/* Phone */}
//           <div className="mb-3">
//             <label htmlFor="phone">Phone</label>
//             <input
//               type="tel"
//               className="form-control"
//               id="phone"
//               name="phone"
//               value={deleteFormData.phone}
//               onChange={(e) =>
//                 setDeleteFormData({ ...deleteFormData, phone: e.target.value })
//               }
//             />
//           </div>
//           {/* Designation */}
//           <div className="mb-3">
//             <label htmlFor="designation">Designation</label>
//             <input
//               type="text"
//               className="form-control"
//               id="designation"
//               name="designation"
//               value={deleteFormData.designation}
//               onChange={(e) =>
//                 setDeleteFormData({
//                   ...deleteFormData,
//                   designation: e.target.value,
//                 })
//               }
//             />
//           </div>
//           {/* Role */}
//           <div className="mb-3">
//             <label htmlFor="role">Role in Company</label>
//             <select
//               className="form-select"
//               id="role"
//               name="role"
//               value={deleteFormData.role}
//               onChange={(e) =>
//                 setDeleteFormData({ ...deleteFormData, role: e.target.value })
//               }
//             >
//               <option value="">Select Role</option>
//               {/* Add role options here */}
//             </select>
//           </div>
//           {/* Influence Level */}
//           <div className="mb-3">
//             <label htmlFor="influenceLevel">Influence Level</label>
//             <select
//               className="form-select"
//               id="influenceLevel"
//               name="influenceLevel"
//               value={deleteFormData.influenceLevel}
//               onChange={(e) =>
//                 setDeleteFormData({
//                   ...deleteFormData,
//                   influenceLevel: e.target.value,
//                 })
//               }
//             >
//               <option value="">Select Influence Level</option>
//               {/* Add influence level options here */}
//             </select>
//           </div>
//         </div>

//         {/* Save and Cancel buttons */}
//         <button
//           className="btn btn-success"
//           type="button"
//           onClick={handleSave}
//         >
//           Save
//         </button>
//         <button
//           className="btn btn-secondary mx-2"
//           type="button"
//           onClick={onCloseForm}
//         >
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddTimesheet;
// import React, { useState ,useEffect} from "react";
// import axios from "axios";

// import { v4 as uuidv4 } from 'uuid';

// import "../styles/AddUser.css";

// const AddTimesheet = ({ onAddTimesheet, onCloseForm, onOpenForm, editedTimesheet }) => {
//   const [date, setDate] = useState("");
//   const [lastFollowUp, setLastFollowUp] = useState("");
//   const [nextFollowUp, setNextFollowUp] = useState("");
//   const [status, setStatus] = useState("");
//   const [addContact, setAddContact] = useState("");
//   const [contacts, setContacts] = useState([]);
//   const [deleteFormData, setDeleteFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     role: "",
//     influenceLevel: "",
//   });
//   const [error, setError] = useState(null);

//   const openForm = () => {
//     onOpenForm();
//   };

//   const handleAddContact = () => {
//     if (addContact.trim() !== "") {
//       setContacts([...contacts, addContact.trim()]);
//       setAddContact("");
//     }
//   };

//   const handleDeleteContact = (index) => {
//     const updatedContacts = [...contacts];
//     updatedContacts.splice(index, 1);
//     setContacts(updatedContacts);
//   };

//   const handleSave = () => {
//     const formattedDate = date ? new Date(date).toISOString().split('T')[0] : '';
//     const newTimesheet = {
    
//       Date: formattedDate, // Update to "Date" instead of "date"
//       LastFollowUp: lastFollowUp,
//       NextFollowUp: nextFollowUp,
//       Status: status,
//       AddContact: contacts,
//       Name: deleteFormData.name,
//       email: deleteFormData.email,
//       Phone: deleteFormData.phone,
//       Roleincompany: deleteFormData.role,
//       InfluenceLevel: deleteFormData.influenceLevel,
//     };
  

//     axios
//       .post("http://localhost:3001/api/timesheet", newTimesheet)
//       .then((response) => {
//         console.log("Timesheet created:", response.data);
//         onAddTimesheet(response.data);
//         onCloseForm();
//         clearForm();
//       })
//       .catch((error) => {
//         console.error("Error creating Timesheet:", error);
//         setError("Error creating Timesheet. Please try again.");
//       });
//   };

//   const clearForm = () => {
//     setDate("");
//     setLastFollowUp("");
//     setNextFollowUp("");
//     setStatus("");
//     setContacts([]);
//     setAddContact("");
//     setDeleteFormData({
//       name: "",
//       email: "",
//       phone: "",
//       role: "",
//       influenceLevel: "",
//     });
//     setError(null);
//   };

//   const openAddNewForm = () => {
//     const modal = document.getElementById("exampleModalLong");
//     if (modal) {
//       modal.classList.add("show");
//       modal.style.display = "block";
//       document.body.classList.add("modal-open");
//     } else {
//       console.error("Modal element not found.");
//     }
//   };

//   const closeAddNewForm = () => {
//     const modal = document.getElementById("exampleModalLong");
//     if (modal) {
//       modal.classList.remove("show");
//       modal.style.display = "none";
//       document.body.classList.remove("modal-open");
//     } else {
//       console.error("Modal element not found.");
//     }
//   };
//   useEffect(() => {
//     if (editedTimesheet) {
//       setDate(editedTimesheet.Date);
//       setLastFollowUp(editedTimesheet.LastFollowUp);
//       setNextFollowUp(editedTimesheet.NextFollowUp);
//       setStatus(editedTimesheet.Status);
//       setContacts(editedTimesheet.AddContact);
//       // ... (other fields)
//     }
//   }, [editedTimesheet]);
//   // Rest of the code


//   // const handleUpdateTimesheet = () => {
//   //   const formattedDate = date ? new Date(date).toISOString().split('T')[0] : '';
//   //   const updatedTimesheet = {
     
//   //     Date: formattedDate,
//   //     LastFollowUp: lastFollowUp,
//   //     NextFollowUp: nextFollowUp,
//   //     Status: status,
//   //     AddContact: contacts,
//   //     // ... (other fields)
//   //   };

//   //   // Update the timesheet using an API call
//   //   axios
//   //     .put(`http://localhost:3001/api/timesheet/${editedTimesheet._id}`, updatedTimesheet)
//   //     .then((response) => {
//   //       console.log('Timesheet updated:', response.data);
//   //       onCloseForm();
//   //       clearForm();
//   //     })
//   //     .catch((error) => {
//   //       console.error('Error updating timesheet:', error);
//   //       setError('Error updating timesheet. Please try again.');
//   //     });
//   // };

//   return (
//     <div className="modal-dialog" role="document">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title" id="addTimesheetModalTitle">
            
//          Add New Timesheet</h5>
//           <button type="button" className="close" onClick={onCloseForm}>
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div className="modal-body">
//       <form>
//         {/* Date input */}
        
//         <div className="mb-3">
//           <label htmlFor="date">Date</label>
//           <input
//             type="date"
//             className="form-control"
//             id="date"
//             name="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </div>

//         {/* Last Follow-Up input */}
//         <div className="mb-3">
//           <label htmlFor="lastFollowUp">Last Follow-Up</label>
//           <input
//             type="date"
//             className="form-control"
//             id="lastFollowUp"
//             name="lastFollowUp"
//             value={lastFollowUp}
//             onChange={(e) => setLastFollowUp(e.target.value)}
//           />
//         </div>

//         {/* Next Follow-Up input */}
//         <div className="mb-3">
//           <label htmlFor="nextFollowUp">Next Follow-Up</label>
//           <input
//             type="text"
//             className="form-control"
//             id="nextFollowUp"
//             name="nextFollowUp"
//             value={nextFollowUp}
//             onChange={(e) => setNextFollowUp(e.target.value)}
//           />
//         </div>

//         {/* Status dropdown */}
//         <div className="mb-3">
//           <label htmlFor="status">Status</label>
//           <select
//             className="form-select"
//             id="status"
//             name="status"
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//           >
//             <option value="">Select Status</option>
//             <option value="In Progress">In Progress</option>
//             <option value="Completed">Completed</option>
//             <option value="Pending">Pending</option>
//           </select>
//         </div>

//         {/* Add Contact input */}
//         <div className="mb-3">
//           <label htmlFor="addContact">Add Contact</label>
//           <div className="input-group">
//             <input
//               type="text"
//               className="form-control"
//               id="addContact"
//               name="addContact"
//               value={addContact}
//               onChange={(e) => setAddContact(e.target.value)}
//             />
//             <button
//               className="btn btn-success"
//               type="button"
//               onClick={handleAddContact}
//             >
//               Add Contact
//             </button>
//           </div>
//         </div>

//         {/* Display the added contacts */}
//         <div className="mb-3">
//           <label>Added Contacts:</label>
//           <ul className="list-group">
//             {contacts.map((contact, index) => (
//               <li
//                 key={index}
//                 className="list-group-item d-flex justify-content-between align-items-center"
//               >
//                 {contact}
//                 <button
//                   className="btn btn-danger btn-sm"
//                   type="button"
//                   onClick={() => handleDeleteContact(index)}
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Delete Form */}
//         <div className="mb-3">
//           <h3>Delete Form</h3>
//           {/* Name */}
//           <div className="mb-3">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               name="name"
//               value={deleteFormData.name}
//               onChange={(e) =>
//                 setDeleteFormData({ ...deleteFormData, name: e.target.value })
//               }
//             />
//           </div>
        
//           {/* Email */}
//           <div className="mb-3">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={deleteFormData.email}
//               onChange={(e) =>
//                 setDeleteFormData({ ...deleteFormData, email: e.target.value })
//               }
//             />
//           </div>
//           {/* Phone */}
//           <div className="mb-3">
//             <label htmlFor="phone">Phone</label>
//             <input
//               type="tel"
//               className="form-control"
//               id="phone"
//               name="phone"
//               value={deleteFormData.phone}
//               onChange={(e) =>
//                 setDeleteFormData({ ...deleteFormData, phone: e.target.value })
//               }
//             />
       
           
//           </div>
//           {/* Role */}
//           <div className="mb-3">
//             <label htmlFor="role">Role in Company</label>
//             <select
//               className="form-select"
//               id="role"
//               name="role"
//               value={deleteFormData.role}
//               onChange={(e) =>
//                 setDeleteFormData({ ...deleteFormData, role: e.target.value })
//               }
//             >
//               <option value="">Select Role</option>
//               <option value="Manager">Manager</option>
//               <option value="Employee">Employee</option>
//             </select>
//           </div>
//           {/* Influence Level */}
//           <div className="mb-3">
//             <label htmlFor="influenceLevel">Influence Level</label>
//             <select
//               className="form-select"
//               id="influenceLevel"
//               name="influenceLevel"
//               value={deleteFormData.influenceLevel}
//               onChange={(e) =>
//                 setDeleteFormData({
//                   ...deleteFormData,
//                   influenceLevel: e.target.value,
//                 })
//               }
//             >
//               <option value="">Select Influence Level</option>
//               <option value="High">High</option>
//               <option value="Medium">Medium</option>
//               <option value="Low">Low</option>
//             </select>
//           </div>
//         </div>

//         {/* Save and Cancel buttons */}
//         {/* <button
//           className="btn btn-success"
//           type="button"
//           onClick={handleSave}
//         >
//           Save
//         </button>
//         <button
//           className="btn btn-secondary mx-2"
//           type="button"
//           data-dismiss="modal"
//           onClick={onCloseForm}
//         >
//           Cancel
//         </button> */}
//       </form>
//       {error && <div className="alert alert-danger">{error}</div>}
//           </div>
//           <div className="modal-footer">
//           <button type="button" className="btn btn-secondary" onClick={closeAddNewForm}>
//             Cancel
//           </button>
//           {editedTimesheet ? (
//             <button type="button" className="btn btn-primary" onClick={handleUpdateTimesheet}>
//               Update
//             </button>
//           ) : (
//             <button type="button" className="btn btn-primary" onClick={handleSave}>
//               Save
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };


// export default AddTimesheet;



import React, { useState ,useEffect} from "react";
import axios from "axios";

import { v4 as uuidv4 } from 'uuid';

import "../styles/AddUser.css";

const AddTimesheet = ({ onAddTimesheet, onCloseForm, onOpenForm, editedTimesheet }) => {
  const [date, setDate] = useState("");
  const [lastFollowUp, setLastFollowUp] = useState("");
  const [nextFollowUp, setNextFollowUp] = useState("");
  const [status, setStatus] = useState("");
  const [addContact, setAddContact] = useState("");
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  const [deleteFormData, setDeleteFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    influenceLevel: "",
  });
  

  const openForm = () => {
    onOpenForm();
  };

  const handleAddContact = () => {
    if (addContact.trim() !== "") {
      setContacts([...contacts, addContact.trim()]);
      setAddContact("");
    }
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  const handleSave = () => {
    const formattedDate = date ? new Date(date).toISOString().split('T')[0] : '';
    const newTimesheet = {
    
      Date: formattedDate, // Update to "Date" instead of "date"
      LastFollowUp: lastFollowUp,
      NextFollowUp: nextFollowUp,
      Status: status,
      AddContact: contacts,
      Name: deleteFormData.name,
      email: deleteFormData.email,
      Phone: deleteFormData.phone,
      Roleincompany: deleteFormData.role,
      InfluenceLevel: deleteFormData.influenceLevel,
    };
  

    axios
      .post("http://localhost:3001/api/timesheet", newTimesheet)
      .then((response) => {
        console.log("Timesheet created:", response.data);
        onAddTimesheet(response.data);
        onCloseForm();
        clearForm();
      })
      .catch((error) => {
        console.error("Error creating Timesheet:", error);
        setError("Error creating Timesheet. Please try again.");
      });
  };

  const clearForm = () => {
    setDate("");
    setLastFollowUp("");
    setNextFollowUp("");
    setStatus("");
    setContacts([]);
    setAddContact("");
    setDeleteFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
      influenceLevel: "",
    });
    setError(null);
  };
  const handleEditLead = (lead) => {
    setEditLeadData(lead);
    setShowAddLeadForm(true);
  };
  
  const openAddNewForm = () => {
    const modal = document.getElementById("exampleModalLong");
    if (modal) {
      modal.classList.add("show");
      modal.style.display = "block";
      document.body.classList.add("modal-open");
    } else {
      console.error("Modal element not found.");
    }
  };

  const closeAddNewForm = () => {
    const modal = document.getElementById("exampleModalLong");
    if (modal) {
      modal.classList.remove("show");
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    } else {
      console.error("Modal element not found.");
    }
  };
  useEffect(() => {
    if (editedTimesheet) {
      setDate(editedTimesheet.Date);
      setLastFollowUp(editedTimesheet.LastFollowUp);
      setNextFollowUp(editedTimesheet.NextFollowUp);
      setStatus(editedTimesheet.Status);
      setContacts(editedTimesheet.AddContact);
      // ... (other fields)
    }
  }, [editedTimesheet]);
  // Rest of the code


  const handleUpdateTimesheet = () => {
    const formattedDate = date ? new Date(date).toISOString().split('T')[0] : '';
    const updatedTimesheet = {
     
      Date: formattedDate,
      LastFollowUp: lastFollowUp,
      NextFollowUp: nextFollowUp,
      Status: status,
      AddContact: contacts,
      // ... (other fields)
    };

    // Update the timesheet using an API call
    axios
      .put(`http://localhost:3001/api/timesheet/${editedTimesheet._id}`, updatedTimesheet)
      .then((response) => {
        console.log('Timesheet updated:', response.data);
        onCloseForm();
        clearForm();
      })
      .catch((error) => {
        console.error('Error updating timesheet:', error);
        setError('Error updating timesheet. Please try again.');
      });
  };

  return (
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="addTimesheetModalTitle">
          {editedTimesheet ? 'Edit Timesheet' : 'Add New Timesheet'}

         Add New Timesheet</h5>
          <button type="button" className="close" onClick={onCloseForm}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
      <form>
        {/* Date input */}
        
        <div className="mb-3">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Last Follow-Up input */}
        <div className="mb-3">
          <label htmlFor="lastFollowUp">Last Follow-Up</label>
          <input
            type="date"
            className="form-control"
            id="lastFollowUp"
            name="lastFollowUp"
            value={lastFollowUp}
            onChange={(e) => setLastFollowUp(e.target.value)}
          />
        </div>

        {/* Next Follow-Up input */}
        <div className="mb-3">
          <label htmlFor="nextFollowUp">Next Follow-Up</label>
          <input
            type="text"
            className="form-control"
            id="nextFollowUp"
            name="nextFollowUp"
            value={nextFollowUp}
            onChange={(e) => setNextFollowUp(e.target.value)}
          />
        </div>

        {/* Status dropdown */}
        <div className="mb-3">
          <label htmlFor="status">Status</label>
          <select
            className="form-select"
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        {/* Add Contact input */}
        <div className="mb-3">
          <label htmlFor="addContact">Add Contact</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="addContact"
              name="addContact"
              value={addContact}
              onChange={(e) => setAddContact(e.target.value)}
            />
            <button
              className="btn btn-success"
              type="button"
              onClick={handleAddContact}
            >
              Add Contact
            </button>
          </div>
        </div>

        {/* Display the added contacts */}
        <div className="mb-3">
          <label>Added Contacts:</label>
          <ul className="list-group">
            {contacts.map((contact, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {contact}
                <button
                  className="btn btn-danger btn-sm"
                  type="button"
                  onClick={() => handleDeleteContact(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Delete Form */}
        <div className="mb-3">
          <h3>Delete Form</h3>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={deleteFormData.name}
              onChange={(e) =>
                setDeleteFormData({ ...deleteFormData, name: e.target.value })
              }
            />
          </div>
        
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={deleteFormData.email}
              onChange={(e) =>
                setDeleteFormData({ ...deleteFormData, email: e.target.value })
              }
            />
          </div>
          {/* Phone */}
          <div className="mb-3">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={deleteFormData.phone}
              onChange={(e) =>
                setDeleteFormData({ ...deleteFormData, phone: e.target.value })
              }
            />
       
           
          </div>
          {/* Role */}
          <div className="mb-3">
            <label htmlFor="role">Role in Company</label>
            <select
              className="form-select"
              id="role"
              name="role"
              value={deleteFormData.role}
              onChange={(e) =>
                setDeleteFormData({ ...deleteFormData, role: e.target.value })
              }
            >
              <option value="">Select Role</option>
              <option value="Manager">Manager</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          {/* Influence Level */}
          <div className="mb-3">
            <label htmlFor="influenceLevel">Influence Level</label>
            <select
              className="form-select"
              id="influenceLevel"
              name="influenceLevel"
              value={deleteFormData.influenceLevel}
              onChange={(e) =>
                setDeleteFormData({
                  ...deleteFormData,
                  influenceLevel: e.target.value,
                })
              }
            >
              <option value="">Select Influence Level</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        {/* Save and Cancel buttons */}
        {/* <button
          className="btn btn-success"
          type="button"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="btn btn-secondary mx-2"
          type="button"
          data-dismiss="modal"
          onClick={onCloseForm}
        >
          Cancel
        </button> */}
      </form>
      {error && <div className="alert alert-danger">{error}</div>}
          </div>
          <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={closeAddNewForm}>
            Cancel
          </button>
          {editedTimesheet ? (
            <button type="button" className="btn btn-primary" onClick={handleUpdateTimesheet}>
              Update
            </button>
          ) : (
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


export default AddTimesheet;