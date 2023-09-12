// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes, Route } from 'react-router-dom';
// import Navigation from './Navigation';
// import Login from './Login';
// import Register from './Register';
// // import LeftImage from './LeftImage'; // Import the LeftImage component

// const AuthLayout = () => {
//   return (
//     <div>
//         <div className="col-md-8"> {/* Adjust the column size as needed */}
//             <Navigation />
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4"> {/* Adjust the column size as needed */}
//             {/* <LeftImage /> Include the LeftImage component */}
//           </div>
//           {/* <div className="col-md-8"> {/* Adjust the column size as needed */}
            
//             <Routes>
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               {/* Add more authentication-related routes as needed */}
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthLayout;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const AuthLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Add more authentication-related routes as needed */}
      </Routes>
    </div>
  );
};

export default AuthLayout;
