import React, { Component } from "react"
import Layout from "../components/layout"
import Footer from "../components/Globals/Footer"

export default class blogs extends Component {
  render() {
    return (
      <Layout>
        <main id="main">
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2>Blog</h2>
                <ol>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>Blog</li>
                </ol>
              </div>
            </div>
          </section>


        <section className="blog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 entries">
                        <article className="entry">
                            <div className="entry-img">
                                <img className="img-fluid" src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/news-events/news/indonesia-s-best-mountain-climbing-experiences/d62fb88eb0cc76ee91acec90be51185ac40a42c5-c10da.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg" className="img-fluid"></img>
                            </div>
                        <h2 class="entry-title">
                <a href="blog-single.html">Indahnya Alam Indonesia</a>
                </h2>

                <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="icofont-user"></i> <a href="blog-single.html">John
                      Doe</a></li>
                  <li className="d-flex align-items-center"><i className="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                  <li className="d-flex align-items-center"><i className="icofont-comment"></i> <a href="blog-single.html">12
                      Comments</a></li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et
                  laboriosam eius aut nostrum quidem aliquid dicta.
                  Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos
                  aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                </p>
                <div className="read-more">
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>


                        </article>
                    </div>
                </div>
            </div>
        </section>

        </main>

        <Footer />
      </Layout>
    )
  }
}
