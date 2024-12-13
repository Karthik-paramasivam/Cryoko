import React from "react";
import { Button } from "react-bootstrap";
import Image4 from "../Images/Image4.jpg";
import CountUp from "react-countup";

export default function About() {
  return (
    <div className="container-fluid border border-danger">
      <div className="container border border-success">
        <div className="row">
          <div className="col col-12 col-lg-6">
            <p className="text-primary fs-4 fw-bold text-center">
              Cryoko Wellness Studio
            </p>
            <p className="m-0 p-0">
              Cryoko is a leading cryotherapy wellness and recovery center
              located in Chennai. Our luxurious facility features the world’s
              most advanced whole-body cryotherapy chamber. We offer customized
              recovery and wellness programs designed to address various needs,
              including reducing inflammation, speeding up muscle recovery,
              relieving arthritis and joint pain, enhancing performance,
              promoting anti-aging, and aiding in weight management.
            </p>
            <p>
              At Cryoko, we aim to provide people of all ages and fitness levels
              with an innovative and convenient way to experience cryotherapy,
              allowing them to naturally and quickly feel refreshed in their
              bodies.
            </p>
            <p>
              We are confident that after experiencing a cryotherapy session in
              our upscale facility, you’ll be eager for more. Our therapists are
              adept at delivering top-notch luxury and attention throughout your
              visit. Following each session, your mind and body will harmonise,
              nurturing you towards a state of optimal well-being.
            </p>
            <p>
              <p>
                <CountUp
                  start={0}
                  end={2000}
                  duration={1.5}
                  className="fs-2 fw-bold text-dark"
                    suffix="+ Happy Clients"
                />
              </p>
              <p> <CountUp
                  start={0}
                  end={3}
                  duration={2}
                  className="fs-2 fw-bold text-dark"
                  suffix="+ Years in Business"
                /></p>
            </p>
            <div>
              <Button>Reach us</Button>
            </div>
          </div>
          <div className="col col-12 col-lg-6">
            <img src={Image4} alt="Image4" className="border rounded-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
