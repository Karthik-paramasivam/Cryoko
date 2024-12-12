
import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../Images/logo.png";

function Menu() {
  const [expanded, setExpanded] = useState(false); // State to control the menu toggle
  const navbarRef = useRef(null); // Ref to the navbar
  const dropdownRef = useRef(null); // Ref to the dropdown

  const handleNavbarToggle = () => {
    setExpanded(!expanded); // Toggle the expanded state when the menu button is clicked
  };

  const styl = `.nav-link:hover{
       transform: scale(1.05) !important;  
       transition: transform 0.1s ease-in-out;  
       text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); 
    
     }
       .dropdown-item:hover{
         border-left: 3px solid blue;
         font-weight: bold;
       transition: transform 0.1s ease-in-out;  
       text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); }`;

  useEffect(() => {
    // Handle click events outside the navbar
    const handleClickOutside = (event) => {
      // Close the navbar if the click is outside of the navbar and dropdown
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false); // Close the navbar
      }
    };

    // Add event listener to detect clicks outside the navbar
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // For touch devices

    return () => {
      // Clean up the event listeners when the component is unmounted
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount and cleanup on unmount

  return (
    <>
     <style>{styl}</style>
    <Navbar
      expand="lg"
      className="bg-body-white m-0 p-0"
      expanded={expanded}
      ref={navbarRef} // Attach the ref to the navbar
    >
      <Container className="text-center">
        <Navbar.Brand href="#" className="border border-white m-0 p-0">
          <img
            src={logo}
            alt="cryoko logo"
            className="img-fluid border border-white rounded-1"
            style={{ width: "30%" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={handleNavbarToggle}
        >
          {expanded ? (
  <span
  style={{ padding: "0.7px", fontWeight: "bold" }}
  className="m-auto text-center"
>
  ✕
</span>          ) : (
            <FontAwesomeIcon icon={faBars} size="lx" />
          )}
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1" className="fw-bold text-dark">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="ms-lg-3 fw-bold text-dark">
              About us
            </Nav.Link>
            <NavDropdown
              title={<span className="ms-lg-3 fw-bold text-dark text-center">Cryotherapy</span>}
              id="navbarScrollingDropdown"
              ref={dropdownRef} // Attach the ref to the dropdown
            >
              <NavDropdown.Item href="#action3" className="text-center ">Whole Body Cryotherapy</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="text-center">WBC vs Ice Bath</NavDropdown.Item>
              <NavDropdown.Item href="#action5" className="text-center">FAQ</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" className="ms-lg-3 fw-bold text-dark">
              Services
            </Nav.Link>
            <Nav.Link href="#action2" className="ms-lg-3 fw-bold text-dark">
              Benefits
            </Nav.Link>
            <Nav.Link href="#action2" className="ms-lg-3 fw-bold text-dark">
              Blog
            </Nav.Link>
            <Nav.Link href="#action2" className="ms-lg-3 me-lg-5 fw-bold text-dark">
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

