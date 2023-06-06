import React from "react";
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Landing = () => {
    const navigate = useNavigate();
  
    const handleLoginClick = () => {
      navigate("/login");
    };
  
    const handleSignupClick = () => {
      navigate("/signup");
    };
  
    return (
      <Container className="p-3">
        <Card className="text-center" bg="light">
          <Card.Body>
            <Card.Title>
              <h1>Welcome to GoodJob!</h1>
            </Card.Title>
            <Card.Text>
              <h4>
                Sign Up to Make Job Hunting More Tolerable
              </h4>
            </Card.Text>
            <hr />
            <Row className="justify-content-md-center">
              <Col xs lg="2">
                <Button variant="primary" onClick={handleSignupClick}>Sign Up</Button>
              </Col>
              <Col md="auto"></Col>
              <Col xs lg="2">
                <Button variant="dark" onClick={handleLoginClick}>Login</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  };
  
  export default Landing;