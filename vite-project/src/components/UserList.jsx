
// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
// import AddUser from "./AddUser"; // Import the AddUser component

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [filters, setFilters] = useState({ name: "", email: "", role: "" });
//   const [showAddUser, setShowAddUser] = useState(false); // State to manage the Add User modal
//   const [selectedUserId, setSelectedUserId] = useState(null); // State to track the selected user for editing

//   // Fetch the list of users from your backend API
//   useEffect(() => {
//     // Make an API request to fetch users and update the 'users' state
//     // Example: fetchUsers().then(data => setUsers(data));
//   }, []);

//   // Handle filter criteria changes
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//     // Implement filtering logic and update the 'users' state accordingly
//     // You'll need to filter the 'users' array based on the 'filters' object.
//   };

//   // Function to open the Add User modal for editing or adding
//   const openAddUserModal = (userId) => {
//     setSelectedUserId(userId); // Set the selected user ID for editing or null for adding
//     setShowAddUser(true);
//   };

//   // Function to delete a user
//   const deleteUser = (userId) => {
//     // Implement your logic to delete a user based on the userId
//     // For example:
//     const updatedUsers = users.filter((user) => user.id !== userId);
//     setUsers(updatedUsers);
//   };

//   // Function to close the Add User modal
//   const closeAddUserModal = () => {
//     // Clear the selected user for editing
//     setSelectedUserId(null);
//     setShowAddUser(false);
//   };

//   // Function to add a new user to the 'users' state
//   const addUserToList = (newUser) => {
//     setUsers([...users, newUser]);
//     setShowAddUser(false); 
//   };

//   return (
//     <div className="container mt-4">
//       <h1>User List</h1>
//       <div className="row mb-3">
//         <div className="col-md-4">
//           <input
//             type="text"
//             name="name"
//             value={filters.name}
//             onChange={handleFilterChange}
//             className="form-control"
//             placeholder="Filter by Name"
//           />
//         </div>
//         <div className="col-md-4">
//           <input
//             type="text"
//             name="email"
//             value={filters.email}
//             onChange={handleFilterChange}
//             className="form-control"
//             placeholder="Filter by Email"
//           />
//         </div>
//         <div className="col-md-4">
//           <input
//             type="text"
//             name="role"
//             value={filters.role}
//             onChange={handleFilterChange}
//             className="form-control"
//             placeholder="Filter by Role"
//           />
//         </div>
//       </div>
//       <div className="mb-3">
//         <button onClick={() => setShowAddUser(true)} className="btn btn-primary">
//           + Add User
//         </button>
//         <button className="btn btn-danger ml-2">Delete</button>
//       </div>
//       <table className="table table-success table-striped">
//         <thead>
//           <tr>
//             <th>User Checkbox</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Updated Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>
//                 <input type="checkbox" />
//               </td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.updatedDate}</td>
//               <td>
//                 <button onClick={() => openAddUserModal(user.id)} className="btn btn-warning">
//                   <FontAwesomeIcon icon={faEdit} /> Edit
//                 </button>
//                 <button onClick={() => deleteUser(user.id)} className="btn btn-danger">
//                   <FontAwesomeIcon icon={faTrash} /> Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* AddUser modal */}
//       {showAddUser && (
//         <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
            
//               <div className="modal-body">
//                 <AddUser userId={selectedUserId} onClose={closeAddUserModal} onUpdateUsers={addUserToList} />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserList;
// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
// import axios from 'axios';

// import AddUser from "./AddUser"; // Import the AddUser component

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [filters, setFilters] = useState({ name: "", email: "", role: "" });
//   const [showAddUser, setShowAddUser] = useState(false); // State to manage the Add User modal
//   const [selectedUserId, setSelectedUserId] = useState(null); // State to track the selected user for editing

//   const [selectedUserToEdit, setSelectedUserToEdit] = useState(null);
//   // Fetch the list of users from your backend API
//   useEffect(() => {
//     // Make an API request to fetch users and update the 'users' state
//     // Example: fetchUsers().then(data => setUsers(data));
//   }, []);
//   console.log('Users state:', users);
//   // Handle filter criteria changes
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//     // Implement filtering logic and update the 'users' state accordingly
//     // You'll need to filter the 'users' array based on the 'filters' object.
//   };

//   // Function to open the Add User modal for editing or adding
//   const openAddUserModal = (userId) => {
//     const userToEdit = users.find((user) => user._id === userId);
  
//     if (userToEdit) {
//       setSelectedUserToEdit(userToEdit);
//       setShowAddUser(true);
//     } else {
//       console.error('User not found for editing');
//     }
//   };
  

//   // Function to delete a user
//   const deleteUser = (userId) => {
//     // Implement your logic to delete a user based on the userId
//     // For example:
//     const updatedUsers = users.filter((user) => user.id !== userId);
//     setUsers(updatedUsers);
//   };

//   // Function to close the Add User modal
//   const closeAddUserModal = () => {
//     // Clear the selected user for editing
//     setSelectedUserId(null);
//     setShowAddUser(false);
//   };

//   // Function to add a new user to the 'users' state
//   const addUserToList = (newUser) => {
//     setUsers([...users, newUser]);
//     setShowAddUser(false); 
//   };
//   useEffect(() => {
//     // Fetch all users from the backend when the component mounts
//     axios.get('http://localhost:3001/api/users')
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching users:', error);
//       });
//   }, []);
//   return (
//     <div className="container mt-4">
//       <h1>User List</h1>
//       <div className="row mb-3">
//         <div className="col-md-4">
//           <input
//             type="text"
//             name="name"
//             value={filters.name}
//             onChange={handleFilterChange}
//             className="form-control"
//             placeholder="Filter by Name"
//           />
//         </div>
//         <div className="col-md-4">
//           <input
//             type="text"
//             name="email"
//             value={filters.email}
//             onChange={handleFilterChange}
//             className="form-control"
//             placeholder="Filter by Email"
//           />
//         </div>
//         <div className="col-md-4">
//           <input
//             type="text"
//             name="role"
//             value={filters.role}
//             onChange={handleFilterChange}
//             className="form-control"
//             placeholder="Filter by Role"
//           />
//         </div>
//       </div>
//       <div className="mb-3">
//         <button onClick={() => setShowAddUser(true)} className="btn btn-primary">
//           + Add User
//         </button>
//         <button className="btn btn-danger ml-2">Delete</button>
//       </div>
//       <table className="table table-success table-striped">
//         <thead>
//           <tr>
//             <th>User Checkbox</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Updated Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//                <tr key={user._id} onClick={() => openAddUserModal(user._id)}>
//               <td>
//                 <input type="checkbox" />
//               </td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.updatedDate}</td>
//               <td>
//               <button onClick={() => openAddUserModal(user._id)} className="btn btn-warning">
//   <FontAwesomeIcon icon={faEdit} /> Edit
// </button>
//                 <button onClick={() => deleteUser(user._id)} className="btn btn-danger">
//                   <FontAwesomeIcon icon={faTrash} /> Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* AddUser modal */}
//       {showAddUser && (
//         <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
            
//               <div className="modal-body">
//               <AddUser
//                  userToEdit={selectedUserToEdit}
//                  onClose={() => {
//                    setShowAddUser(false);
//                    setSelectedUserToEdit(null);
//                  }}
                
//                  onUpdateUsers={(updatedUser) => {
//                   // Implement your logic to update the user list
//                   // For now, just log the updated user
//                   console.log('Updated user:', updatedUser);
//                 }}
//               />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserList;
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

import AddUser from "./AddUser";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showAddUser, setShowAddUser] = useState(false);
  const [selectedUserToEdit, setSelectedUserToEdit] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);
  const deleteUser = (userId) => {
    axios.delete(`http://localhost:3001/api/users/${userId}`)
      .then(() => {
        const updatedUsers = users.filter((user) => user._id !== userId);
        setUsers(updatedUsers);
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };
  const openAddUserModal = (userId) => {
    const userToEdit = users.find((user) => user._id === userId);
  
    if (userToEdit) {
      setSelectedUserToEdit(userToEdit);
      setShowAddUser(true);
    } else {
      console.error('User not found for editing');
    }
  };
  
  
  const closeAddUserModal = () => {
    setSelectedUserToEdit(null);
    setShowAddUser(false);
  };

  return (
    <div className="container mt-4">
      <h1>User List</h1>
      <div className="mb-3">
        <button onClick={() => setShowAddUser(true)} className="btn btn-primary">
          + Add User
        </button>
        <button className="btn btn-danger ml-2">Delete</button>
      </div>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>User Checkbox</th>
            <th>Username</th>
            <th>Email</th>
            <th>Updated Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} onClick={() => openAddUserModal(user._id)}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.updatedDate}</td>
              <td>
              <button onClick={() => openAddUserModal(user._id)} className="btn btn-warning">
    <FontAwesomeIcon icon={faEdit} /> Edit
  </button>

                <button onClick={(e) => {
  e.stopPropagation(); // Stop event propagation to prevent opening the modal
  deleteUser(user._id);
}} className="btn btn-danger">
  <FontAwesomeIcon icon={faTrash} /> Delete
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddUser && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <AddUser
                  userToEdit={selectedUserToEdit}
                  onClose={() => {
                    setShowAddUser(false);
                    setSelectedUserToEdit(null);
                  }}
                  onUpdateUsers={(updatedUser) => {
                    console.log('Updated user:', updatedUser);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
