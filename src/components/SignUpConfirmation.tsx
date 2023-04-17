import React from 'react'
import '../index.css'
import { Row, Col, Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import Logo from '../assets/fleetlogo.png'
import { useNavigate } from 'react-router-dom'

export default function SignUpConfirmation() {

    let navigate = useNavigate();

    const handleReturnToSignIn = () => {
        navigate('/');
    }

    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-center signCuz'>
                    <img src={Logo} alt='Fleet Logo' height='150px' />
                </Col>
            </Row>

            <Container>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <h1 className='pt-3 wellCuz'>Fleet Finder</h1>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <h5 className='text-center suCuz pt-5'>Thanks for signing up!</h5>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col className=' text-center pt-3'>
                        <Button
                            className='siButton text-center'
                            onClick={handleReturnToSignIn}>Sign In</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
