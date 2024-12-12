import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Images/logo.png";

function Menu() {
  const styl = `.nav-link:hover{
  transform: scale(1.05) !important;  
  transition: transform 0.1s ease-in-out;  
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); 

}
  .dropdown-item:hover{
    transform: scale(1.01) !important;  
    border-left: 3px solid blue;
  transition: transform 0.1s ease-in-out;  
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); }`;
  return (
    <>
      <style>{styl}</style>

      <Navbar expand="lg" className="bg-body-white m-0 p-0">
        <Container className="ps-md-1 pe-md-1">
          <Navbar.Brand href="#" className="border border-white m-0 p-0">
            <img
              src={logo}
              alt="cryoko logo"
              className="img-fluid border border-white rounded-1 "
              style={{ width: "30%" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "400px", textAlign: "center" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="fw-bold">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="ms-lg-3 fw-bold">
                About us
              </Nav.Link>
              <NavDropdown
                title={
                  <span>
                    {" "}
                    <span className="ms-lg-3 fw-bold">Cryotherapy</span>
                  </span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">
                  Whole Body Cryotherapy
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  WBC vs Ice Bath{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  FAQ
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#action2" className="ms-lg-3 fw-bold">
                Services
              </Nav.Link>

              <Nav.Link href="#action2" className="ms-lg-3 fw-bold">
                Benefits
              </Nav.Link>
              {/* <NavDropdown
                title={
                  <span>
                    {" "}
                    <span className="ms-lg-3 fw-bold">Benefits</span>
                  </span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">
                  Wellness
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Weight loss
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Beauty
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Pain Reduction
                </NavDropdown.Item>
            
              </NavDropdown> */}
              <Nav.Link href="#action2" className=" ms-lg-3 fw-bold">
                Blog
              </Nav.Link>
              <Nav.Link href="#action2" className=" ms-lg-3 me-lg-5 fw-bold">
                Reach us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
