import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import {Sidebar} from '../pages/Sidebar'; // Import the Sidebar component
import Navbar from './Navbar';

 export const SidebarLayout = () => {
  return (
    <div className="container">
       <div>
          {/* <Navbar/> */}
          jhagsxjhasg
          </div>
      <div className="row">
        <div className="col-md-3">
          {/* <Sidebar /> */}
         
        </div>    
        <div className="col-md-9">
          <Routes>
            {/* Add routes for pages that should have the Sidebar */}
          </Routes>
        </div>
      </div>
    </div>
  );
};


export default SidebarLayout;