import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'


function MyNavbar() {
    const navigate = useNavigate()
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
            <Container>
                <Navbar.Brand href="#home">React Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            {' '}
                            <Link className="text-decoration-none text-white" to="/">
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            {' '}
                            <Link className="text-decoration-none text-white" to="/about">
                                About
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            {' '}
                            <Link className="text-decoration-none text-white" to="/shop">
                                Shop
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <Nav className="gap-2">
                        <Nav.Link onClick={() => { navigate('/login') }} className="btn btn-primary" href="#">Login</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/register') }} eventKey={2} className="btn btn-light text-black" href="#">
                            Sign up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar