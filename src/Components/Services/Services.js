import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://spooky-flesh-57250.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));

    }, []);
    const handleDeleteServices = id => {
        const proced = window.confirm('Are You sure you want to delete..?');
        if (proced) {
            const url = `https://spooky-flesh-57250.herokuapp.com/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingServices = services.filter(service => service._id !== id);
                        setServices(remainingServices);
                    }
                })
        }
    }

    return (
        <>
            <div className=" mr-3 w-100  d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-3 g-5">


                {
                    services.map(service => <Card className="mx-3 servicescard ">
                        <Card.Img className="img" variant="top" src={service.img} />
                        <Card.Body>
                            <Card.Title key={service._id}>{service.title}</Card.Title>
                            <p>{service.description}</p>
                            <p>Price {service.price}</p>
                            <Link to={`/myplan/${service._id}`}><button className="btn btn-warning">Booking Plan</button></Link>
                            {/* <button className="btn btn-danger mx-2" onClick={() => handleDeleteServices(service._id)}>Cancel</button> */}


                        </Card.Body>
                    </Card>)
                }
            </div >


        </>
    );
};

export default Services;