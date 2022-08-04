import React from 'react'
import Form from 'react-bootstrap/Form';
import '../../App.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import ReservationModel from '../model/reservationModel'

function ReservationForm({selected,reservation}:ReservationModel) {
    let navigate = useNavigate();
    const confirmBooking = (e: any) => {
        e.preventDefault();
        let path = "/thank";
        navigate(path);
    }

    return (
        <div className="innerForm">
            <div className="headerTextDark">
                Booking details
            </div>
            <Form onSubmit={(e) => confirmBooking(e)}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Select aria-label="Default select example" defaultValue={reservation}>
                        <option value="Haircut">Haircut</option>
                        <option value="Hair Styling">Hair Styling</option>
                        <option value="Makeup">Makeup</option>
                        <option value="Tatto">Tatto</option>
                        <option value="Coloring">Coloring</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="First Name*" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Last Name*" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Email*" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Control type="date" placeholder="Date" />
                    </Col>
                    <Col>
                        <Form.Control type="time" placeholder="Time" />
                    </Col>
                </Row>
                <div className="priceText">
                    Total: USD 25.00
                </div>
                <Button variant="gold" type="submit">
                    Pay Now
                </Button>
            </Form>
        </div>
    )
}

export default ReservationForm