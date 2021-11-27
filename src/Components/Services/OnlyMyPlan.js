import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

import { useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';

const OnlyMyPlan = () => {

    const { user } = useAuth({ email: '' });
    const email = user.email;
    console.log(email);
    const [onlyMyPlan, setOnlyMyPlan] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const url = `https://spooky-flesh-57250.herokuapp.com/allplan/`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOnlyMyPlan(data));

    }, [])

    useEffect(() => {
        const productInfo = onlyMyPlan.filter(pro => pro?.email == email);

        setDetails(productInfo)
    }, [onlyMyPlan])

    const handleDeleteServices = id => {
        const proced = window.confirm('Are You sure you want to delete..?');
        if (proced) {
            const url = `https://spooky-flesh-57250.herokuapp.com/allplan/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingServices = details.filter(details => details._id !== id);
                        setDetails(remainingServices);

                    }

                })
        }
    }

    return (
        <>
            <div className=" mr-3 w-100  d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-3 g-5">


                {
                    details.map(Services => <Card className="mx-3 servicescard ">

                        <Card.Body>
                            <Card.Title>{Services.title}</Card.Title>
                            <p>Services: {Services.description}</p>
                            <p>Price :{Services.price}</p>
                            <p>Status :{Services.status}</p>

                            <button className="btn btn-danger" onClick={() => handleDeleteServices(Services._id)}>Cancel</button>
                            <button className="btn btn-warning" >Confirm</button>

                        </Card.Body>
                    </Card>)
                }


            </div >

        </>
    );
};

export default OnlyMyPlan;