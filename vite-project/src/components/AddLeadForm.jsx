// import React, { Component } from "react";
// import DashboardLayout from "./DashboardLayout";
// import axios from "axios";

// class AddLeadForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       formData: {
//         firstName: "",
//         lastName: "",
//         address: "",
//         city: "",
//         leadType: "",
//         leadCategory: "",
//         leadKind: "",
//         lastFollowUp: "",
//         nextFollowUp: "",
//         status: "",
//         phoneNumbers: [],
//       },
//       createLead: null,
//     };
//   }

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       formData: { ...this.state.formData, [name]: value },
//     });
//   };

//   handleAddPhoneNumber = () => {
//     const updatedPhoneNumbers = [...this.state.formData.phoneNumbers, ""];
//     this.setState({
//       formData: { ...this.state.formData, phoneNumbers: updatedPhoneNumbers },
//     });
//   };

//   handlePhoneNumberChange = (e, index) => {
//     const updatedPhoneNumbers = [...this.state.formData.phoneNumbers];
//     updatedPhoneNumbers[index] = e.target.value;

//     this.setState({
//       formData: { ...this.state.formData, phoneNumbers: updatedPhoneNumbers },
//     });
//   };

//   handleSave = () => { const { leadId, onClose, onUpdateLead } = this.props;
//   const { formData } = this.state;
// //     e.preventDefault();
// //     // Handle saving lead data here
// //     console.log(this.state.formData);
// //     this.props.onClose(); // Close the Add Lead Form
// //   };
// if (!userId) {
//     // Create a new user
//     axios
//       .post("http://localhost:3001/api/lead", formData)
//       .then((response) => {
//         console.log("New lead created:", response.data);
//         this.setState({ createdUser: response.data });
//         onUpdateLead(response.data); // Call the onUpdateUsers function to add the new user to the list
//         onClose();
//       })
//       .catch((error) => {
//         console.error("Error creating a new user:", error);
//         alert("Failed to create a new user. Please try again.");
//       });
//   }
// };

//   handleCancel = () => {
//     // Handle cancel action here (e.g., closing the form)
//     this.state = ({
//         formData: {
//           firstName: "",
//           lastName: "",
//           address: "",
//           city: "",
//           leadType: "",
//           leadCategory: "",
//           leadKind: "",
//           lastFollowUp: "",
//           nextFollowUp: "",
//           status: "",
//           phoneNumbers: [],
//         },
//     })
//     this.props.onClose(); // Close the Add Lead Form
//   };
//   render() {
//   return (
//     const { formData, createdUser } = this.state;

//     <div className="container mt-4">
//       <h1>Add Lead</h1>
//       <form onSubmit={this.handleSave}>
//         <div className="mb-3">
//           <label htmlFor="firstName" className="form-label">
//             First Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={this.handleInputChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="lastName" className="form-label">
//             Last Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={this.handleInputChange}
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
//             onChange={this.handleInputChange}
//           />
//         </div>
//         {/* Add more form fields as needed */}
//         <div className="mb-3">
//           <label htmlFor="phoneNumbers" className="form-label">
//             Phone Numbers
//           </label>
//           <div id="phoneNumbers">
//             {formData.phoneNumbers.map((phoneNumber, index) => (
//               <div key={index} className="mb-2">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter Phone Number"
//                   value={phoneNumber}
//                   onChange={(e) => handlePhoneNumberChange(e, index)}
//                 />
//               </div>
//             ))}
//           </div>
//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={handleAddPhoneNumber}
//           >
//             Add Phone Number
//           </button>
//         </div>
//         <div className="mb-3">
//           <button type="submit" className="btn btn-success">
//             Save
//           </button>
//           <button
//             type="button"
//             className="btn btn-secondary"
//             onClick={this.handleCancel}
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
// }
// export default AddLeadForm;
import React, { Component } from "react";
import axios from "axios";

class AddLeadForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                FirstName: "",
                LastName: "",
                address: "",
                city: "",
                leadType: "",
                leadCategory: "",
                leadKind: "",
                lastFollowUp: "",
                nextFollowUp: "",
                status: "",
                phoneNumbers: [],
            },
            createdLead: null,
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            formData: { ...this.state.formData, [name]: value },
        });
    };

    handleAddPhoneNumber = () => {
        const updatedPhoneNumbers = [...this.state.formData.phoneNumbers, ""];
        this.setState({
            formData: { ...this.state.formData, phoneNumbers: updatedPhoneNumbers },
        });
    };

    handlePhoneNumberChange = (e, index) => {
        const updatedPhoneNumbers = [...this.state.formData.phoneNumbers];
        updatedPhoneNumbers[index] = e.target.value;

        this.setState({
            formData: { ...this.state.formData, phoneNumbers: updatedPhoneNumbers },
        });
    };

    handleSave = async () => {
        const { onClose, onUpdateLead } = this.props;
        const { formData } = this.state;

        // Create a new lead
        await axios.post("http://localhost:3001/api/lead", formData)
            .then((response) => {
                console.log("New lead created:", response.data);
                // onUpdateLead(response.data); // Call the onUpdateLead function to add the new lead to the list
                onClose();
            })
            .catch((error) => {
                console.log("Error creating a new lead:", error);
                alert("Failed to create a new lead. Please try again.");
                // alert("Failed to create a new lead. Please try again.");
            });
    };

    handleCancel = () => {
        // Handle cancel action here (e.g., clearing the form fields)
        this.setState({
            formData: {
                FirstName: "",
                LastName: "",
                address: "",
                city: "",
                leadType: "",
                leadCategory: "",
                leadKind: "",
                lastFollowUp: "",
                nextFollowUp: "",
                status: "",
                phoneNumbers: [],
            },
        });
        this.props.onClose(); // Close the Add Lead Form
    };

    render() {
        const { formData } = this.state;

        return (
            <div className="container mt-4">
                <h1>Add Lead</h1>
                {/* <form onSubmit={this.handleSave}> */}
                <div>
                    <div className="mb-3">
                        <label htmlFor="FirstName" className="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="FirstName"
                            name="FirstName"
                            value={formData.FirstName}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="LastName" className="form-label">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="LastName"
                            name="LastName"
                            value={formData.LastName}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    {/* Add more form fields as needed */}
                    <div className="mb-3">
                        <label htmlFor="phoneNumbers" className="form-label">
                            Phone Numbers
                        </label>
                        <div id="phoneNumbers">
                            {formData.phoneNumbers.map((phoneNumber, index) => (
                                <div key={index} className="mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Phone Number"
                                        value={phoneNumber}
                                        onChange={(e) => this.handlePhoneNumberChange(e, index)}
                                    />
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.handleAddPhoneNumber}
                        >
                            Add Phone Number
                        </button>
                    </div>
                    <div className="mb-3">
                        <button
                            onClick={this.handleSave} type="submit" className="btn btn-success">
                            Save
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={this.handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
            </div>
                {/* </form> */ }
            </div >
        );
    }
}

export default AddLeadForm;
