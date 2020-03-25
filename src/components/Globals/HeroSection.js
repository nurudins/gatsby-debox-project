import React, { Component } from 'react'

export default class HeroSection extends Component {
    render() {
        return (
            <section id="hero" class="d-flex justify-cntent-center align-items-center">
    <div id="heroCarousel" class="container carousel carousel-fade" data-ride="carousel">

      <div class="carousel-item active">
        <div class="carousel-container">
          <h2 class="animated fadeInDown">Welcome to <span>Inhuaschool</span></h2>
          <p class="animated fadeInUp">Berapa lama belajar program, apakah sulit? ISEA menggunakan 10 tahun meneliti metode pembelajaran software yang efektif
            dan diterapkan ke industri IT.  Penasaran dengan metode tersebut?
          </p>
          <a href="" class="btn-get-started animated fadeInUp">Read More</a>
        </div>
      </div>

      <div class="carousel-item">
        <div class="carousel-container">
          <h2 class="animated fadeInDown">Grammatical FAST Track</h2>
          <p class="animated fadeInUp">Cara mudah memahami program, menggunakan konsep yang lebih manusiawi dengan menggunakan Grammar, menerjemahkan bisnis secara langsung dengan
            metode GFT.
          </p>
          <a href="" class="btn-get-started animated fadeInUp">Read More</a>
        </div>
      </div>

      <div class="carousel-item">
        <div class="carousel-container">
          <h2 class="animated fadeInDown">Sequi ea ut et est quaerat</h2>
          <p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
          <a href="" class="btn-get-started animated fadeInUp">Read More</a>
        </div>
      </div>

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

    </div>
  </section>
        )
    }
}
