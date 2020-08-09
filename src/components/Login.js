import React, { Component } from 'react';
import { Button, Form, Container, Col, Row, Modal} from 'react-bootstrap';

 class Login extends Component {
    
     state = {email:'',password:''}
     handleLogin = () => {
        let email = this.state.email,
          password = this.state.password
        if(email === 'admin' && password === 'admin')
          {
            localStorage.setItem('login',true)
            window.location.replace('/user')
          }
        else{
                alert('user not found')
            }
        }
    handleClose = () => {

    }

    render () {
    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container style={{backgroundColor: ''}} className='my-0'>
                        <Row className='justify-content-md-center mt-5'>
                        <Col md={5}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={this.state.email} type="email" placeholder="Enter email" onChange={(e)=>this.setState({email:e.target.value})} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                                </Form.Group>
                            
                                <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={this.state.password} type="password" placeholder="Password" onChange={(e)=>this.setState({password:e.target.value})} />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={()=>this.handleLogin()}>
                                Log In
                                </Button>
                            </Form>
                        </Col>  
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    );
  }
}

export default Login;