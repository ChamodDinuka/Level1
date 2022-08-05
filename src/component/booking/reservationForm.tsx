import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import '../../App.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom'
import ReservationModel from '../model/reservationModel'
import StripeCheckout from 'react-stripe-checkout';
import emailjs from 'emailjs-com'
import axios from 'axios'

function ReservationForm({ selected, reservation }: ReservationModel) {
    const navigate = useNavigate();
    const key = process.env.REACT_APP_PUBLISH_KEY
    const service = process.env.REACT_APP_EMAIL_SERVICE as string
    const template = process.env.REACT_APP_EMAIL_TEMPLATE as string
    const emailId = process.env.REACT_APP_EMAIL_ID
    const [data, setData] = useState({
        name: "",
        type: "",
        date: "",
        time: "",
        email: ""
    })
    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleToken = async (token: any) => {
        const response = await axios.post('http://localhost:5000', token)
        console.log(response.status)
        if (response.status === 200) {
            alert("Payment Success")
            emailjs.send(service, template, data, emailId)
                .then((result) => {
                }, (error) => {
                });
            let path = "/thank";
            navigate(path);
        } else {
            alert("Payment Faild")
        }
    }

    return (
        <div className="innerForm">
            <div className="headerTextDark">
                Booking details
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Select aria-label="Default select example" name="type" onChange={handleChange} defaultValue={reservation}>
                        <option value="Haircut">Haircut</option>
                        <option value="Hair Styling">Hair Styling</option>
                        <option value="Makeup">Makeup</option>
                        <option value="Tatto">Tatto</option>
                        <option value="Coloring">Coloring</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name="name" onChange={handleChange} placeholder="First Name*" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Last Name*" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="email" name="email" onChange={handleChange} placeholder="Email*" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Control type="date" name="date" onChange={handleChange} placeholder="Date" />
                    </Col>
                    <Col>
                        <Form.Control type="time" name="time" onChange={handleChange} placeholder="Time" />
                    </Col>
                </Row>
                <div className="priceText">
                    Total: USD 25.00
                </div>
            </Form>
            <StripeCheckout
                stripeKey={key as string}
                token={handleToken}
                email={data.email}
            />
        </div>
    )
}

export default ReservationForm