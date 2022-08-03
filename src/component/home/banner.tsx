import React from 'react'
import Card from 'react-bootstrap/Card';
import '../../App.css'
import Button from 'react-bootstrap/Button';

function Banner() {
    return (
        <Card className="bg-dark text-white">
            <Card.Img style={{ "height": "auto", "maxHeight": 700, "minHeight": 250 }} src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpcmN1dHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Card image" />
            <Card.ImgOverlay>
                <div className="innerContent">
                    <Card.Title className="headerText">
                        Always make room for beauty in your life
                    </Card.Title>
                    <Card.Text className="subTitle">
                        At Prauge we are passionate about making people feel good while looking their best.
                        Attending advanced education allows us to keep up with the latest trends and provide each guest with a unique & customizable result.
                        For your convenience, Schedule your reservation today!
                    </Card.Text>
                </div>
                <Button variant="outline-light">Book now</Button>
            </Card.ImgOverlay>
        </Card>
    )
}

export default Banner