import React from 'react';
import { NavLink } from 'react-router-dom';

import * as ReactBootstrap from 'react-bootstrap';









function Navbar() { 
    return(
      <>
   
            <ReactBootstrap.Navbar className="mb-5" collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
 
 <ReactBootstrap.Navbar.Brand className="mx-3" href="#home">Garage Automobile</ReactBootstrap.Navbar.Brand>
 <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
 <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
   <ReactBootstrap.Nav className="me-auto">
     <ReactBootstrap.Nav.Link className="mx-5" href="#features">Our Client</ReactBootstrap.Nav.Link>
     <NavLink  className="px-5" to="/blog">Blog</NavLink>
     {/* <ReactBootstrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
       <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
       <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
       <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
       <ReactBootstrap.NavDropdown.Divider />
       <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
     </ReactBootstrap.NavDropdown> */}
   </ReactBootstrap.Nav>
   <ReactBootstrap.Nav>
     <ReactBootstrap.Nav.Link href="#deets" className="px-5" > Dashbord</ReactBootstrap.Nav.Link>
     {/* <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
       Admin
     </ReactBootstrap.Nav.Link> */}
   </ReactBootstrap.Nav>
 </ReactBootstrap.Navbar.Collapse>
 
</ReactBootstrap.Navbar>


  


</>
      
    )
}

export default Navbar ;