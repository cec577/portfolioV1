import React from "react"
import ScrollableAnchor from 'react-scrollable-anchor'

//import Typed from 'react-typed'

function HeroSection() {
  return (
    <>
    <div class="fond">
      <div class="title-hero-section" data-aos="zoom-in">
        <ScrollableAnchor id={'Home'}>
          <h1>Création de sites web</h1>
        </ScrollableAnchor>
        <h2>Développeuse Web Front-end</h2>
          <div class="d-flex">
            <a class="btn btn-primary mr-1" href="#EcrisMoi">
              J'ai besoin d'un site
            </a>
            <a class="btn btn-outline-primary" href="#AproposdeMoi">
              Plus d'infos
            </a>
          </div>
        </div>
    </div>
    </>
  )
}

export default HeroSection