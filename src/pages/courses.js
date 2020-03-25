import React, { Component } from "react"
import Layout from "../components/layout"
import Footer from "../components/Globals/Footer"

export default class courses extends Component {
  render() {
    return (
      <Layout>
        <main id="main">
          <section className="breadcrumbs">
            <div className="container">
              <div class="d-flex justify-content-between align-items-center">
                <h2>Courses</h2>

                <ol>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Courses</li>
                </ol>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </Layout>
    )
  }
}
