import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const AddNewService = () => {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();
    const handleAddServices = e => {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;
        const newServices = { title, description, price, img };
        fetch('https://spooky-flesh-57250.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newServices)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Add Services')
                    e.target.reset();
                }
            })

        e.preventDefault();
    }
    return (
        <>
            {/* <div>
                <h2>Please Add Services</h2>
                <form onSubmit={handleAddServices}>
                    <input type="text" ref={titleRef} />
                    <input type="text" ref={descriptionRef} />
                    <input type="text" ref={priceRef} />
                    <input type="text" ref={imgRef} />
                    <input type="submit" value="Add" />
                </form>
            </div> */}
            <Container className="p-5">
                <Form onSubmit={handleAddServices}>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Title</Form.Label>
                        <Form.Control ref={titleRef} type="text" placeholder="Enter title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }} ref={descriptionRef} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Price</Form.Label>
                        <Form.Control ref={priceRef} type="text" placeholder="Enter Price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control ref={imgRef} type="text" placeholder="Enter Image URL" />
                    </Form.Group>

                    <Button variant="primary" type="submit" value="Add">
                        Add Services
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default AddNewService;