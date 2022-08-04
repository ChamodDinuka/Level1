import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormImage from '../../images/formImage.png'
import '../../App.css'
import ReservationForm from './reservationForm'
import { useLocation } from 'react-router-dom';
import Reservation from './reservation'
import ReservationModel from '../model/reservationModel'


function Bookign() {
    const state = useLocation();
    const data = state.state as ReservationModel;

    return (
        <Row>
            <Col md={6} sm={12}>
                {data?.selected === true ? <ReservationForm {...data}/> : <Reservation />}
            </Col>
            <Col md={6} sm={12}>
                <img src={FormImage} style={{ "maxWidth": "100%" }} alt="rightImage" />
            </Col>
        </Row>
    )
}

export default Bookign