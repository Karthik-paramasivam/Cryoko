import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "react-bootstrap";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import { EffectCreative, Pagination, Autoplay } from "swiper/modules";
import Image1 from "../Images/CryokoImage1.jpg";
import Image2 from "../Images/Image2.jpeg";
import Image3 from "../Images/Image3.jpg";
import "../App.css";
import { useInView } from "react-intersection-observer";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnowflake,
  faHeartbeat,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const navigate = useNavigate();

  const [hasViewed, setHasViewed] = useState({
    myElement: false,
    secondElement: false,
  });

  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.myElement) {
        setHasViewed((prev) => ({ ...prev, myElement: true }));
      }
    },
  });

  const { ref: myRef2, inView: secondElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.secondElement) {
        setHasViewed((prev) => ({ ...prev, secondElement: true }));
      }
    },
  });

  return (
    <div className="container-fluid border border-white">
      <div className="container-fluid border border-white">
        <div className="row">
          <div className="col">
            <div className="container ">
              <div className="row">
                <div className="col col-12 m-auto text-center">
                  <Swiper
                    effect="creative"
                    grabCursor={true}
                    loop={true}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                      },
                      next: {
                        translate: ["100%", 0, 0],
                      },
                    }}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[EffectCreative, Pagination, Autoplay]}
                    speed={1500}
                    className="mySwiper border border-white"
                  >
                    <SwiperSlide>
                      <img
                        src={Image2}
                        alt="Image2"
                        className="img-fluid border border-light rounded slider-image w-100"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={Image2}
                        alt="Image2"
                        className="img-fluid border border-light rounded slider-image w-100"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={Image2}
                        alt="Image3"
                        className="img-fluid border border-light rounded slider-image w-100"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 container">
        <div
          className={`row  slide-in-left  ${
            hasViewed.myElement ? "animate-slide-in" : ""
          }`}
          ref={myRef}
        >
          <div className="col-12 col-lg-6">
            <p className="fw-bold text-primary fs-4">CRYOKO WELLNESS STUDIO</p>
            <p className="fw-bold fs-5">Cryotherapy</p>

            <p className="fw-bold text-justify fs-6">
              Rejuvenate Your Mind, Body & Soul
            </p>
            <p className=" text-justify">
              Cryoko stands as a premier cryotherapy destination in Chennai,
              offering an exclusive experience in wellness and recovery.
            </p>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon
                  icon={faSnowflake}
                  shake
                  className="text-primary me-2"
                />
                Nestled within our opulent studio lies the world’s most advanced
                whole-body cryotherapy chamber.
              </li>

              <li>
                <FontAwesomeIcon
                  icon={faHeartbeat}
                  beatFade
                  className="text-danger me-2 mt-3 "
                />
                Tailored recovery and wellness regimens cater to diverse needs:
              </li>
              <ul className="ms-4">
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-success me-2"
                    />
                  </span>
                  <span className="fw-bold">Alleviating inflammation</span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-success me-2"
                    />
                  </span>
                  <span className="fw-bold"> Enhancing muscle recovery</span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-success me-2"
                    />
                  </span>
                  <span className="fw-bold">
                    Combating arthritis and joint pains
                  </span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-success me-2"
                    />
                  </span>
                  <span className="fw-bold">Boosting performance</span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-success me-2"
                    />
                  </span>
                  <span className="fw-bold">Defying aging</span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-success me-2"
                    />
                  </span>
                  <span className="fw-bold fs-6">
                    Achieving weight loss goals
                  </span>
                </li>
              </ul>
              <li>
                <FontAwesomeIcon
                  icon={faSnowflake}
                  shake
                  className="text-primary me-2 mt-3"
                />
                Trusted by a diverse clientele seeking transformative wellness
                benefits.
              </li>
            </ul>

            <p>
              <Button>More About Us</Button>
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img
              src={Image1}
              alt="Cryoko Image 01"
              className="img-fluid border rounded-3 mt-lg-4"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 container-fluid">
        <div
          className={`row slide-in-left ${
            hasViewed.secondElement ? "animate-slide-in" : ""
          }`}
          ref={myRef2}
        >
          <div className="col col-lg-12">
            <p className="text-primary fs-4 fw-bold text-center">
              CRYOKO AMAZING FEATURES
            </p>
            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-stretch flex-wrap gap-3">
              <div className="card shadow-sm border border-white  col-12 col-lg-3">
                <img
                  src={Image3}
                  alt="Image 3"
                  className="img-fluid border border-white rounded-1"
                />
                <p className="text-primary text-center fs-5 fw-bold mt-2 cryotherapy-style">
                  Cryotherapy
                </p>
                <p className="m-0 p-0 fw-light text-center">
                  Lorem ipsum dolor sit amet conse Lorem ipsum dolor sit amet
                  conse Lorem ipsum dolor sit amet conse Lorem ipsum dolor sit
                  amet conse
                </p>
              </div>
              <div className="card shadow-sm border border-white col-12 col-lg-3">
                <img
                  src={Image3}
                  alt="Image 3"
                  className="img-fluid border border-white rounded-1"
                />
                <p className="text-primary text-center fs-5 fw-bold mt-2 cryotherapy-style">
                  Cryotherapy
                </p>
                <p className="m-0 p-0 fw-light text-center">
                  Lorem ipsum dolor sit amet conse Lorem ipsum dolor sit amet
                  conse Lorem ipsum dolor sit amet conse Lorem ipsum dolor sit
                  amet conse
                </p>
              </div>
              <div className="card shadow-sm border border-white col-12 col-lg-3">
                <img
                  src={Image3}
                  alt="Image 3"
                  className="img-fluid border border-white rounded-1"
                />
                <p className="text-primary text-center fs-5 fw-bold mt-2 cryotherapy-style">
                  Cryotherapy
                </p>
                <p className="m-0 p-0 fw-light text-center">
                  Lorem ipsum dolor sit amet conse Lorem ipsum dolor sit amet
                  conse Lorem ipsum dolor sit amet conse Lorem ipsum dolor sit
                  amet conse
                </p>
              </div>
            </div>

            <div className=" mt-3 d-flex flex-column flex-lg-row justify-content-center align-items-stretch flex-wrap gap-3">
              <div className="card shadow-sm border border-white  col-12 col-lg-3">
                <img
                  src={Image3}
                  alt="Image 3"
                  className="img-fluid border border-white rounded-1"
                />
                <p className="text-primary text-center fs-5 fw-bold mt-2 cryotherapy-style">
                  Cryotherapy
                </p>
                <p className="m-0 p-0 fw-light text-center">
                  Lorem ipsum dolor sit amet conse Lorem ipsum dolor sit amet
                  conse Lorem ipsum dolor sit amet conse Lorem ipsum dolor sit
                  amet conse
                </p>
              </div>
              <div className="card shadow-sm border border-white col-12 col-lg-3">
                <img
                  src={Image3}
                  alt="Image 3"
                  className="img-fluid border border-white rounded-1"
                />
                <p className="text-primary text-center fs-5 fw-bold mt-2 cryotherapy-style">
                  Cryotherapy
                </p>
                <p className="m-0 p-0 fw-light text-center">
                  Lorem ipsum dolor sit amet conse Lorem ipsum dolor sit amet
                  conse Lorem ipsum dolor sit amet conse Lorem ipsum dolor sit
                  amet conse
                </p>
              </div>
              <div className="card shadow-sm border border-white col-12 col-lg-3">
                <img
                  src={Image3}
                  alt="Image 3"
                  className="img-fluid border border-white rounded-1"
                />
                <p className="text-primary text-center fs-5 fw-bold mt-2 cryotherapy-style">
                  Cryotherapy
                </p>
                <p className="m-0 p-0 fw-light text-center">
                  Lorem ipsum dolor sit amet conse Lorem ipsum dolor sit amet
                  conse Lorem ipsum dolor sit amet conse Lorem ipsum dolor sit
                  amet conse
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid m-0 p-0">
        <div className="row mt-5">
          <div className="col-12 m-0 p-0">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
