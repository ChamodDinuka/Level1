import React, { useEffect, useMemo, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../App.css'

function Carousel() {

    const [serviceNumber, setServiceNumber] = useState(0);
    const [desktop, setDesktop] = useState(window.innerWidth >= 1440);
    const services = useMemo(() => {
        return (
            [
                {
                    "image": "https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc=",
                    "title": "Haircut",
                    "description": "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut."
                },
                {
                    "image": "https://media.istockphoto.com/photos/cropped-shot-of-female-client-receiving-a-haircut-picture-id961867192?k=20&m=961867192&s=612x612&w=0&h=89JWTKGPFGql7058Du1Dg4y3OjF0tXhlN9H8hPj5y6k=",
                    "title": "Hair Styling",
                    "description": "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut."
                },
                {
                    "image": "https://media.gettyimages.com/photos/young-woman-at-the-hairdressers-picture-id170173618?s=612x612",
                    "title": "Makeup",
                    "description": "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut."
                },
                {
                    "image": "https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8=",
                    "title": "Tatto",
                    "description": "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut."
                },
                {
                    "image": "https://media.gettyimages.com/photos/young-woman-at-the-hairdressers-picture-id170173618?s=612x612",
                    "title": "Coloring",
                    "description": "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut."
                }
            ]
        )
    }, [])
    const [tempService, setTempService] = useState(services.slice(0, 3));
    const ScrollLeft = () => {
        setServiceNumber(serviceNumber === 0 ? 0 : serviceNumber - 1)
    }
    const ScrollRight = () => {
        setServiceNumber(serviceNumber === services.length - 3 ? services.length - 3 : serviceNumber + 1)
    }
    const ScrollLeftMobile = () => {
        setServiceNumber(serviceNumber === 0 ? 0 : serviceNumber - 1)
    }
    const ScrollRightMobile = () => {
        setServiceNumber(serviceNumber === services.length - 1 ? services.length - 1 : serviceNumber + 1)
    }
    useEffect(() => {
        setTempService(services.slice(serviceNumber, serviceNumber + 3))
    }, [serviceNumber, services])
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        updateMedia();
        return () => window.removeEventListener("resize", updateMedia);
    })
    const updateMedia = () => {
        setDesktop(window.innerWidth >= 1024);
    }
    return (
        <Container>
            <div className="headerTextDark" style={{ "textAlign": "center", "marginBottom": "10px", "marginTop": "10px" }}>Services</div>
            {desktop ?
                <Row>
                    <Col sm={1} ><FaChevronLeft className="carouselIcon" onClick={() => ScrollLeft()} /></Col>
                    {tempService && tempService.map((service, index) => {
                        return (
                            <Col sm={3} key={index}>
                                <Card className='carouselCard' style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src={service.image} />
                                    <Card.Body>
                                        <Card.Title className="subTitleDark">{service.title}</Card.Title>
                                        <Card.Text className='textDark'>
                                            {service.description}
                                        </Card.Text>
                                        <Button variant="outline-info">MAKE A RESERVATION</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                    <Col sm={1}><FaChevronRight className="carouselIcon" onClick={() => ScrollRight()} /></Col>
                </Row>
                :
                <Row>
                    <Col><FaChevronLeft className="carouselIcon" onClick={() => ScrollLeftMobile()} /></Col>
                    <Col xs={6}>
                        <Card>
                            <Card.Img variant="top" src={services[serviceNumber].image} />
                            <Card.Body>
                                <Card.Title className="subTitleDark">{services[serviceNumber].title}</Card.Title>
                                <Card.Text className='textDark'>
                                    {services[serviceNumber].description}
                                </Card.Text>
                                <Button variant="outline-info">MAKE A RESERVATION</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col><FaChevronRight className="carouselIcon" onClick={() => ScrollRightMobile()} /></Col>
                </Row>
            }
        </Container>
    )
}

export default Carousel