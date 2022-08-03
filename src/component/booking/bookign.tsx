import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormImage from '../../images/formImage.png'
import '../../App.css'
import ReservationForm from './reservationForm'


function Bookign() {
    return (
        <Row>
            <Col md={6} sm={12}>
               <ReservationForm/> 
            </Col>
            <Col md={6} sm={12}>
                <img src={FormImage} style={{"maxWidth":"100%"}} alt="rightImage" />
            </Col>
        </Row>
    )
}

export default Bookign