import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
export default function UpperHeader() {
    const mystyle = {
        backgroundColor: "#fd7e14",
        height: "45px"
    };
    return (
        <div>
            <Navbar style={mystyle}>

                <Navbar.Brand href="#home">
                    <div>                    
                        <FontAwesomeIcon icon={faEnvelope} size="xs"/>
                        <FontAwesomeIcon icon={faPhoneAlt} size="xs"/>
                    </div>
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}
