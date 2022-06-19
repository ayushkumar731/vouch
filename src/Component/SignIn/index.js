import React, { useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, InputGroup, Button, Spinner } from 'react-bootstrap';
import meetingImg from '../../images/meeting.jpg';
import './styles.scss';
import { signInUser } from '../../Services/auth';

const SignIn = () => {
  const dispatch = useDispatch();

  const isSignInSuccess = useSelector((state) => state.auth.isSignInSuccess);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const errors = useSelector((state) => state.auth.errors);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async () => {
    dispatch(signInUser(formData))
  };
  return (
    <Row className="m-0">
      <Col xs={12} lg={5} className="p-3 d-flex flex-column align-items-center justify-content-center">
        <div className='fw-bolder fs-2'>Welcome Back</div>
        <div className='fw-lighter'>Please log in</div>
        <div className="mb-3 mt-3">
          <InputGroup>
            <Form.Control
              name="email"
              placeholder="Email Address*"
              aria-label="Email Address"
              aria-describedby="basic-addon1"
              value={formData.email}
              onChange={handleChange}
            />
          </InputGroup>
        </div>
        <div className="mb-3">
          <InputGroup>
            <Form.Control
              name='password'
              placeholder="Password*"
              aria-label="Password"
              aria-describedby="basic-addon1"
              type='password'
              value={formData.password}
              onChange={handleChange}
            />
          </InputGroup>
        </div>
        {isSignInSuccess && (
          <span className="text-success mb-2">Sign In successful</span>
        )}
        {errors && (
          <span className="text-danger mb-2">{errors}</span>
        )}
        <Button className="submit-btn" onClick={handleSubmit}>
          Login  {isLoading && (<Spinner className="ml-3 spinner" animation="border"/>)}
        </Button>
      </Col>
      <Col lg={7} className="p-0 d-none d-lg-block">
        <img src={meetingImg} alt="meeting" className='meeting-img' />
      </Col>
    </Row>
  )
};

export default SignIn;
