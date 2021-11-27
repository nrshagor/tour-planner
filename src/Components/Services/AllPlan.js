import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllPlan = () => {
    const [allPlan, setAllPlan] = useState([]);
    useEffect(() => {
        fetch('https://spooky-flesh-57250.herokuapp.com/allplan')
            .then(res => res.json())
            .then(data => setAllPlan(data));

    }, []);
    return (
        <>
            <div className=" mr-3 w-100  d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-3 g-5">


                {
                    allPlan.map(plan => <Card className="mx-3 servicescard ">

                        <Card.Body>
                            <Card.Title key={plan._id}>{plan.title}</Card.Title>
                            <p>Services: {plan.description}</p>
                            <Link to="/serivces"><button className="btn btn-warning">View All</button> </Link>
                            {/* <Link to={`/myplan/${plan._id}`}><button className="btn btn-warning">Update</button></Link> */}
                            {/* <button className="btn btn-danger" onClick={() => handleDeleteServices(service._id)}>Cancel</button> */}


                        </Card.Body>
                    </Card>)
                }
            </div >


        </>
    );
};

export default AllPlan;