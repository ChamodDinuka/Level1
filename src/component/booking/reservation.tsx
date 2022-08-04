import React from 'react'
import '../../App.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Reservation() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = ``;
        navigate(path, { state: { selected: true, reservation: '' } });
    };
    return (
        <div className="reservationContent">
            <div className="headerTextDark">Haircut</div>
            <br />
            <div className="textDark">
                At Prauge we are passionate about making people feel good while looking their best. Attending advanced education allows us to keep up with the latest trends and provide each guest with a unique & customizable result. For your convenience, Schedule your reservation today!
            </div>
            <br />
            <Button variant="dark" onClick={routeChange}>Make a Reservation</Button>
        </div>
    )
}

export default Reservation