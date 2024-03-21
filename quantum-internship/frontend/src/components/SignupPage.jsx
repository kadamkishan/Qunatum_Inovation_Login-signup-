import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';



const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        password: ''
    });


    const navigate=useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axios.post('http://localhost:3001/register',{name:formData.name,dob:formData.dob,email:formData.email,password:formData.password})
        .then(result=>{
            console.log(result)
            navigate('/login')
        })
        .catch(err=>console.log(err))
    };


    return (
        <div className="container mt-5 ">
            <div className="row justify-content-center ">
                <div className='border border-dark rounded p-3' style={{width:"50%",backgroundColor:'skyblue'}}>
                    <h2 className="mb-4">Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDob">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <div className='d-flex  justify-content-between'>

                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>

                        <Button>
                          <Link to={"/"}>
                            <span  className=" text-white fw-bold text-decoration-none">
                               Login
                            </span>
                          </Link>
                        </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
