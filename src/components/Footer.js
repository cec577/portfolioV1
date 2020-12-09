import React from "react"
import FormContact from "./FormContact"
import { Row, Container } from "react-bootstrap"
import { FaMailBulk, FaPhoneAlt, FaRegCalendarCheck, FaInstagram } from 'react-icons/fa';
import ScrollableAnchor from 'react-scrollable-anchor'

function Footer() {
  return (
  <>
  <div class="footer-section bg-dark text-white">
    <ScrollableAnchor id={'EcrisMoi'}>
      <h2><span class="mr-1"><FaRegCalendarCheck /></span>Contact</h2>
    </ScrollableAnchor>
    <Container>
      <Row>
        <div class="col-12 col-lg-6 my-lg-auto pl-2 pl-lg-0 mb-2">
          <div class="mb-1">
            <FaMailBulk className="icon-footer mr-1" /> cecile.henry577@gmail.com
          </div>
          <div>
            <FaPhoneAlt className="icon-footer mr-1" /> 0649435797
          </div>
          <div class="mb-1 mt-3">
            <a href="https://www.instagram.com/cec_dm/">
              <FaInstagram className="icon-footer link-icon mr-1 "/> Sur les réseaux
            </a>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <FormContact />
        </div>
      </Row>
    </Container>
  </div>

  </>
    )
  }

  export default Footer