
// import React, { useState } from "react";
// import axios from "axios";

// const AddUser = ({ userId, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const handleSave = () => {
//     if (userId) {
//       // Update user details
//       axios
//         .put(`http://localhost:3001/api/users/update/${userId}`, formData)
//         .then((response) => {
//           // Handle success
//           console.log("User details updated successfully:", response.data);
//           onClose(); // Close the modal
//         })
//         .catch((error) => {
//           // Handle error and show an error message to the user
//           console.error("Error updating user details:", error);
//           alert("Failed to update user details. Please try again.");
//         });
//     } else {
//       // Create a new user
//       axios
//         .post('http://localhost:3001/api/users', formData)
//         .then((response) => {
//           console.log('New user created:', response.data);
//           onClose();
//         })
//         .catch((error) => {
//           // Handle error and show an error message to the user
//           console.error('Error creating a new user:', error);
//           alert("Failed to create a new user. Please try again.");
//         });
//     }
//   };
  

//   const handleCancel = () => {
//     // Handle cancel action here (e.g., clearing the form fields)
//     setFormData({
//       name: "",
//       phone: "",
//       email: "",
//       address: "",
//       description: "",
//     });
//     onClose(); // Close the modal
//   };

//   return (
//     <div className="container">
//       <form>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="phone" className="form-label">
//             Phone
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="address" className="form-label">
//             Address
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="description" className="form-label">
//             Description
//           </label>
//           <textarea
//             className="form-control"
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//           />
//         </div>
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={handleSave}
//         >
//           Save
//         </button>
//         <button
//           type="button"
//           className="btn btn-secondary"
//           onClick={handleCancel}
//         >
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddUser;
import React, { Component } from "react";
import axios from "axios";
import "../styles/AddUser.css";


class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name: "",
        phone: "",
        email: "",
        address: "",
        description: "",
      },
      createdUser: null, // To store the newly created user
      error: null,
    };
  }

  handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     formData: { ...this.state.formData, [name]: value },
  //   });
  // };
  const { name, value } = e.target;
  this.setState((prevState) => ({
    formData: { ...prevState.formData, [name]: value },
  }));
};
  handleSave = () => {
    const { userId,  onUpdateUsers } = this.props;
    const { formData } = this.state;

    // ... (previous code for updating or creating a user) ...

    if (!userId) {
      // Create a new user
      axios
        .post("http://localhost:3001/api/users", formData)
        .then((response) => {
          console.log("New user created:", response.data);
          this.setState({ createdUser: response.data });
          onUpdateUsers(response.data); // Call the onUpdateUsers function to add the new user to the list
          onClose();
        })
        .catch((error) => {
          console.error("Error creating a new user:", error);
          alert("Failed to create a new user. Please try again.");
        });
    }
  };

  handleCancel = () => {
    // Handle cancel action here (e.g., clearing the form fields)
    this.setState({
      formData: {
        name: "",
        phone: "",
        email: "",
        address: "",
        description: "",
      },
    });
    this.props.onClose(); // Close the modal
  };

  render() {
    // const { formData, createdUser } = this.state;
    const { formData, error } = this.state;
    const { onClose } = this.props;
    return (
      <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="addUserModalTitle">
            Add User
          </h5>
          <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
              </button>
        </div>
        <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={this.handleChange}
            />
          </div>
          {/* <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleSave}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.handleCancel}
          >
            Cancel
          </button>

          {error && <div className="alert alert-danger">{error}</div>}
        </form> */}
             </form>
            {error && <div className="alert alert-danger">{error}</div>}
          </div>
          <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="btn btn-primary" onClick={this.handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default AddUser;
