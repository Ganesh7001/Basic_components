import React from 'react';
import {dropdown} from 'bootstrap';

const Navbar = () => {
  return (
    <div>
        <div>
        <nav className="navbar navbar-dark bg-secondary d-flex">
       
    <ul className="nav nav-tabs" >
    <li className='nav-item' style={{display:"inline-block" ,float:"left"}}>
       <ul> <b><h2 style={{display:"inline-block"}}>-:Incubex:-</h2></b></ul>
        </li>  
  <li className="nav-item" style={{marginLeft:"737px"}}>
    <a className="nav-link active " aria-current="page" href="https://incubxperts.com/">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="https://www.google.com/">Link</a>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
      <li><hr className="dropdown-divider"/></li>
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="https://www.youtube.com/">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white ">Disabled</a>
  </li>
</ul>
</nav></div>
        
    </div>
  )
}

export default Navbar;