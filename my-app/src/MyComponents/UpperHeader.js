import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
import { faCoffee } from '@fontawesome/free-solid-svg-icons'

export default function UpperHeader() {
    const mystyle = {
        backgroundColor: "#fd7e14",
        height: "45px"
      };
    return (
        <div>
            <Navbar style={mystyle}>
            <FontAwesomeIcon icon={faCoffee} />

    <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>
        </div>
    )
}
