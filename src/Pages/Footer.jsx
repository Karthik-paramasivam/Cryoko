import React from "react";
import logo from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-white py-4">
      <div className="row d-flex align-items-start">
        {/* Logo Section */}
        <div className="col-12 col-md-2 d-flex flex-column align-items-center border border-dark ms-lg-5 ">
          <img
            src={logo}
            alt="Cryoko Logo"
            className="img-fluid rounded-1 mt-3 "
            style={{ width: "50%" }}
          />
          <p className="mt-1">Cryoko Wellness Studio</p>
        </div>

        {/* Contact Section */}
        <div className="col-12 col-md-3 mt-3 border border-dark text-center">
          <h5 className="fw-bold text-center">Contact Us</h5>
          <div className="d-flex flex-column">
            <div className="mt-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                size="xl"
                className="me-2 text-white"
              />
            </div>
            <p className="mb-0 fs-6 mt-1" style={{ lineHeight: "1.6" }}>
              Cryoko Wellness Studio
              <br />
              9/4-A, Sriram Layout Rd, <br />
              Saibaba Colony, Coimbatore,
              <br />
              Tamil Nadu 641011
            </p>
            <div className="mt-3">
              <FontAwesomeIcon
                icon={faPhone}
                size="xl"
                className=" text-white"
              />
            </div>
            <p>+91 74181 47264</p>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-3 border border-dark text-center">
          <h5 className="fw-bold text-Center">Quick Links</h5>
          <div className="d-flex flex-column">
            <p className="mb-0 fs-6 mt-2" style={{ lineHeight: "1.6" }}>
              Home
            </p>
            <p className="mt-2">About us</p>
            <p>Reach us</p>
            <p>FAQ</p>
          </div>
        </div>

        <div className="col-12 col-md-3 mt-3 border border-dark text-center">
          <h5 className="fw-bold text-Center">Follow us</h5>
          <div className="d-flex flex-column mt-3 ">
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-1">
          <span className="ms-1 me-1 me-md-2 me-lg-3 brand-image logodiv">
                <a
                  href="https://wa.me/+917418147264"
                  className="text-white"
                  //   onClick={handlesocialClick}
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    size="xl"
                    className="p-1 social-image Whatslogo"
                  />
                </a>
              </span>

              <span className="ms-1 me-md-2 me-lg-3 brand-image logodiv">
                <a
                  href="#"
                  className="text-white"
                  //   onClick={handlesocialClick}
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="xl"
                    className="p-1 social-image instalogo"
                  />
                </a>
              </span>

              <span className="ms-1 me-md-2 me-lg-3 brand-image logodiv">
                <a
                  href="#"
                  className="text-white"
                  //   onClick={handlesocialClick}
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="xl"
                    className="p-1 social-image fblogo"
                  />
                </a>
              </span>

              <span className="ms-1 me-md-2 me-lg-3 brand-image logodiv">
                <a
                  href="#"
                  className="text-white"
                  //   onClick={handlesocialClick}
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="xl"
                    className="p-1 social-image youtblogo"
                  />
                </a>
              </span>

              <span className="me-md-2 me-lg-3 brand-image logodiv">
                <a
                  href="#"
                  className="text-white"
                  //   onClick={handlesocialClick}
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="xl"
                    className="p-1 social-image Xlogo"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <p className="text-end">
                <a href="https://wa.me/+917418147264" className=" fixed-icon">
                  <FontAwesomeIcon icon={faWhatsapp} beat size="3x" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
