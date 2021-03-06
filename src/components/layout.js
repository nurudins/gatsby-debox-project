

import React from "react"
import PropTypes from "prop-types"

import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/animate.css/animate.min.css"
import "../assets/vendor/icofont/icofont.min.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"
import "../assets/vendor/venobox/venobox.css"
import "../assets/vendor/owl.carousel/assets/owl.carousel.min.css"
import "../assets/vendor/aos/aos.css"
import "./layout.css"
// import "../assets/css/style.css"


// import "./bootstrap.min.css"
import Navbar from './Globals/Navbar'

const Layout = ({ children }) => 
  <> 
  <Navbar/>
  {children}
  </>;


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
