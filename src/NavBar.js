import { LinkContainer } from 'react-router-bootstrap';
import flowswap from './flowswap.png';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ArrowRight, WalletFill, Wallet2 } from 'react-bootstrap-icons';

const NavBar = () => {
  const cart = useContext(CartContext);

  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={flowswap} className="img-fluid" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/admin">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <Nav.Link>Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/invest">
              <Nav.Link>Invest</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/investments">
              <Nav.Link>Investment</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/addasset">
              <Nav.Link>Add Asset</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
               <LinkContainer to="/search1">
                  <Nav.Link>Search</Nav.Link>
               </LinkContainer>
	     </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
