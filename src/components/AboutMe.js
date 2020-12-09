import React from "react"
import Moi from "../images/moi.jpg"
import { Row, Container } from "react-bootstrap"
import { FaLaptopCode } from 'react-icons/fa';
import ScrollableAnchor from 'react-scrollable-anchor'

function AboutMe() {
  return (
  <>
  <div className="section-about pb-5 bg-dark">
  <ScrollableAnchor id={'AproposdeMoi'}>
      <h2 class="text-white">
        <span class="mr-1"><FaLaptopCode /></span>À propos de moi
      </h2>
    </ScrollableAnchor>
    <Container>
      <Row>
        <div className="col-8 col-lg-6 text-white text-center text-lg-right my-auto " data-aos="fade-right" >
          <div data-aos="fade-right">
            <p><strong>Développeur Front-end et intégrateur basée à Metz</strong></p>
            <p>Besoin d'un site internet ?</p>
          </div>
        </div>
        <div className="col-4 my-auto col-lg-6">
          <div data-aos="fade-left">
            <img src={Moi} className="shadow rounded" alt="Cecile Henry Developpeur web"/>
          </div>
        </div>
      </Row>
    </Container>
  </div>

  </>
    )
  }

  export default AboutMe