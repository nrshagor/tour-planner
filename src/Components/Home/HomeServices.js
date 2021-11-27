import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeServices.css'
const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://spooky-flesh-57250.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)));

    }, []);
    return (
        <>
            <div className="title-services">
                <h2> <span>Our</span> Services</h2>
            </div>
            <div className=" mr-3 w-100  d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-3 g-5">


                {
                    services.map(service => <Card className="mx-3 servicescard ">
                        <Card.Img className="img" variant="top" src={service.img} />
                        <Card.Body>
                            <Card.Title>{service.title}</Card.Title>
                            <p>Services: {service.description}</p>
                            <Link to="/serivces"><button className="btn btn-warning">details</button></Link>

                        </Card.Body>
                    </Card>)
                }
            </div >


        </>
    );
};

export default HomeServices;