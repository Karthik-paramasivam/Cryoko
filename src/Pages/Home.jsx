import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "react-bootstrap";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import { EffectCreative, Pagination, Autoplay } from "swiper/modules";
import logo from "../Images/logo.png";
import Image1 from "../Images/CryokoImage1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake, faHeartbeat, faCircleCheck} from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  const [changingText, setChangingText] = useState("Body");

  //   useEffect(() => {
  //     const texts = ["Body", "Mind", "Soul"];
  //     let index = 0;

  //     const interval = setInterval(() => {
  //       index = (index + 1) % texts.length; // Loop through the texts array
  //       setChangingText(texts[index]);
  //     }, 2000); // Change every 2 seconds

  //     return () => clearInterval(interval); // Clean up on component unmount
  //   }, []);

  return (
    <div className="container-fluid border border-danger">
      <div className="container border border-primary">
        <div className="row">
          <div className="col">
            <div className="container-fluid mt-4">
              <div className="row mt-4">
                <div className="col col-12 m-0 p-0">
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
                    className="mySwiper border border-danger"
                  >
                    <SwiperSlide>
                      <img
                        src={logo}
                        alt="Image1"
                        className="img-fluid border border-light rounded slider-image"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={logo}
                        alt="Image2"
                        className="img-fluid border border-light rounded slider-image"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={logo}
                        alt="Image3"
                        className="img-fluid border border-light rounded slider-image"
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
        <div className="row">
          <div className="col-12 col-lg-6">
            <p className="fw-bold text-primary fs-4">CRYOKO WELLNESS STUDIO</p>
            <p className="fw-bold fs-5">Cryotherapy</p>
            {/* <p>
              Rejuvenate Your <span className="text-uppercase">{changingText}</span>
            </p> */}
            <p className="fw-bold text-justify fs-6">
              Rejuvenate Your Mind, Body & Soul
            </p>
            <p className=" text-justify">
              Cryoko stands as a premier cryotherapy destination in Chennai,
              offering an exclusive experience in wellness and recovery.
            </p>
            <ul className="list-unstyled">
              <li>
           
                          <FontAwesomeIcon icon={faSnowflake} shake className="text-primary me-2"/>
                Nestled within our opulent studio lies the world’s most advanced
                whole-body cryotherapy chamber.
              </li>
              
              <li>
              <FontAwesomeIcon icon={faHeartbeat}  beatFade  className="text-danger me-2 mt-3"/>
              Tailored recovery and wellness regimens cater to diverse needs:
              </li>
              <ul className="ms-4">
                <li>
                  <FontAwesomeIcon icon={faCircleCheck}    className="text-success me-2"/>

                  Alleviating inflammation
                </li>
                <li>
                <FontAwesomeIcon icon={faCircleCheck}    className="text-success me-2"/>
                Enhancing muscle recovery
                </li>
                <li>
                <FontAwesomeIcon icon={faCircleCheck}    className="text-success me-2"/>
                Combating arthritis and joint pains
                </li>
                <li>
                <FontAwesomeIcon icon={faCircleCheck}    className="text-success me-2"/>
                Boosting performance
                </li>
                <li>
                <FontAwesomeIcon icon={faCircleCheck}    className="text-success me-2"/>
                Defying aging
                </li>
                <li>
                <FontAwesomeIcon icon={faCircleCheck}    className="text-success me-2"/>
                Achieving weight loss goals
                </li>
              </ul>
              <li>
              <FontAwesomeIcon icon={faSnowflake}  shake className="text-primary me-2 mt-3"/>
              Trusted by a diverse clientele seeking transformative wellness
                benefits.
              </li>
            </ul>
            {/* <p>
              Our meticulously crafted programs are designed to help you achieve
              your health and wellness goals with ease.
            </p> */}
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
    </div>
  );
}
