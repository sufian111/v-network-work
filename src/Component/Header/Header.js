import React, { useContext } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserDetails } from "../../App";

const Header = () => {
  const [loginUser, setLoginUser] = useContext(UserDetails);
  const pageReload = () => {
    window.location.reload();
  };
  return (
    <Navbar className="container" bg="danger" variant="dark">
      <Navbar.Brand to="/">
        <Link style={{ decoration: "none", color: "white" }} to="/">
          VN
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link style={{ decoration: "none", color: "white" }} to="/">
            Home
          </Link>
        </Nav.Link>
        {loginUser.email ? (
          <Button variant="warning" onClick={pageReload}>
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button variant="warning">Login</Button>
          </Link>
        )}
        <Link to="/admin">
          <Button className="ml-2" variant="primary">
            Admin
          </Button>
        </Link>
        {loginUser.email && (
          <Link to="/profile">
            <Button className="ml-2" variant="warning">
              My Profile
            </Button>
          </Link>
        )}
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Header;
