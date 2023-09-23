
// import React, { Component } from "react";
// import axios from "axios";
// import "../styles/AddUser.css";


// class AddUser extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       formData: {
//         name: "",
//         phone: "",
//         email: "",
//         address: "",
//         description: "",
//       },
//       createdUser: null, // To store the newly created user
//       error: null,
//     };
//   }

//   handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   this.setState({
//   //     formData: { ...this.state.formData, [name]: value },
//   //   });
//   // };
//   const { name, value } = e.target;
//   this.setState((prevState) => ({
//     formData: { ...prevState.formData, [name]: value },
//   }));
// };
// handleSave = async () => {
//   const { onClose } = this.props;
//   const { formData } = this.state;

//   if (
//     !formData.name ||
//     !formData.phone ||
//     !formData.email ||
//     !formData.address ||
//     !formData.description
//   ) {
//     console.error("Please fill in all required fields");
//     return;
//   }

//   try {
//     await axios.post("http://localhost:3001/api/users", formData);
//     console.log("New user created");
//     this.props.onUpdateUsers(formData); // Pass the new user data to the onUpdateUsers function
//     onClose();
//   } catch (error) {
//     console.error("Error creating a new user:", error);
//     alert("Failed to create a new user. Please try again.");
//   }
// };

//   handleCancel = () => {
//     // Handle cancel action here (e.g., clearing the form fields)
//     this.setState({
//       formData: {
//         name: "",
//         phone: "",
//         email: "",
//         address: "",
//         description: "",
//       },
//     });
//     this.props.onClose(); // Close the modal
//   };

//   render() {
//     // const { formData, createdUser } = this.state;
//     const { formData, error } = this.state;
//     const { onClose } = this.props;
//     return (
//       <div className="modal-dialog" role="document">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title" id="addUserModalTitle">
//             Add User
//           </h5>
//           <button type="button" className="close" onClick={onClose}>
//               <span aria-hidden="true">&times;</span>
//               </button>
//         </div>
//         <div className="modal-body">
//         <form>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">
//               Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="phone" className="form-label">
//               Phone
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="address" className="form-label">
//               Address
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="description" className="form-label">
//               Description
//             </label>
//             <textarea
//               className="form-control"
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={this.handleChange}
//             />
//           </div>
//           {/* <button
//             type="button"
//             className="btn btn-primary"
//             onClick={this.handleSave}
//           >
//             Save
//           </button>
//           <button
//             type="button"
//             className="btn btn-secondary"
//             onClick={this.handleCancel}
//           >
//             Cancel
//           </button>

//           {error && <div className="alert alert-danger">{error}</div>}
//         </form> */}
//              </form>
//             {error && <div className="alert alert-danger">{error}</div>}
//           </div>
//           <div className="modal-footer">
//           <button type="button" className="btn btn-secondary" onClick={this.handleCancel}>
//               Cancel
//             </button>
//             <button type="button" className="btn btn-primary" onClick={this.handleSave}>
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default AddUser;
import React, { Component } from "react";
import axios from "axios";
import "../styles/AddUser.css";

class AddUser extends Component {
  state = {
    formData: {
      name: "",
      phone: "",
      email: "",
      address: "",
      description: "",
    },
    error: null,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  handleSave = async () => {
    const { onClose, onUpdateUsers, userToEdit } = this.props;
    const { formData } = this.state;
  
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.address ||
      !formData.description
    ) {
      console.error("Please fill in all required fields");
      return;
    }
  
    try {
      let response;
      if (userToEdit) {
        response =await axios.put(`http://localhost:3001/api/users/update/${userToEdit._id}`, formData);
        console.log("User data updated");
      } else {
        response = await axios.post("http://localhost:3001/api/users", formData);
        console.log("New user created");
        const { page } = response.data;
        navigateToPage(page);
      
  
      onUpdateUsers(formData);
      onClose();
    }
    } catch (error) {
      console.error("Error saving user data:", error);
      alert("Failed to save user data. Please try again.");
    }
  };

  handleCancel = () => {
    this.setState({
      formData: {
        name: "",
        phone: "",
        email: "",
        address: "",
        description: "",
      },
    });
    this.props.onClose();
  };

  componentDidMount() {
    const { userToEdit } = this.props;
    if (userToEdit) {
      this.setState({ formData: userToEdit });
    }
  }

  render() {
    // const { formData, createdUser } = this.state;
    const { formData, error } = this.state;
    const { onClose } = this.props;
    
    return (
      <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="addUserModalTitle">
          {formData._id ? 'Edit User' : 'Add User'}
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
         {error && <div className="alert alert-danger">{error}</div>}
             </form>
            
          
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={this.handleCancel}>
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

export default AddUser
