import React, { Component } from 'react'

export default class HeroSection extends Component {
    render() {
        return (
            <section id="hero" className="d-flex justify-cntent-center align-items-center">
    <div id="heroCarousel" className="container carousel carousel-fade" data-ride="carousel">

      <div className="carousel-item active">
        <div className="carousel-container">
          <h2 className="animated fadeInDown">Welcome to <span>Inhuaschool</span></h2>
          <p className="animated fadeInUp">Berapa lama belajar program, apakah sulit? ISEA menggunakan 10 tahun meneliti metode pembelajaran software yang efektif
            dan diterapkan ke industri IT.  Penasaran dengan metode tersebut?
          </p>
          <a href="" className="btn-get-started animated fadeInUp">Read More</a>
        </div>
      </div>

      

      

      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>

      <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>

    </div>
  </section>
        )
    }
}
