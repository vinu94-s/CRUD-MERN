
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import { Link,useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../actions/userActions";

function Header({ setSearch }) {
 const history=useHistory();
 const dispatch = useDispatch();

 const userLogin = useSelector(state => state.userLogin)

 const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="/">CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
          <Form inline>
                 <FormControl 
                 type="text" 
                 placeholder="Search" 
                 classname="mr-sm-2"
                 onChange={(e) => setSearch(e.target.value)}
                 />
               </Form>
          </Nav>
          
       {   userInfo ?  <Nav>

                <Nav.Link href="/notes">
                 My Notes
                  </Nav.Link>
                
                <NavDropdown title={userInfo?.name}
                  id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item onClick={logoutHandler}
                    >
                    Log out
                  </NavDropdown.Item>
               </NavDropdown>
               </Nav>:<Nav>
               <Nav.Link href="/login">
                 Login
                  </Nav.Link>
                        </Nav>}
                    
                </Navbar.Collapse>
                </Container>
                </Navbar>
  );
};
export default Header;