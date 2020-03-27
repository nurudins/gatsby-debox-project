<<<<<<< HEAD
import React, { Component } from "react"
import { Link } from "gatsby"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "Home",
      },
      {
        id: 2,
        path: "/services",
        text: "Services",
      },
      {
        id: 3,
        path: "/courses",
        text: "Courses",
      },
      {
        id: 4,
        path: "/blogs",
        text: "Blogs",
      },
      {
        id: 5,
        path: "/about",
        text: "About",
      },
      {
        id: 6,
        path: "/contact",
        text: "Contact Us",
      },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({
          navbarOpen: false,
          css: "collapse navbar-collapse",
        })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <header id="header" className="fixed-top">
        <div className="container">
          <div className="logo float-left">
            <h1 className="text-light">
              <a href="index.html">
                <span>Inhuaschool</span>
              </a>
            </h1>
            {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
          </div>

          <nav className="nav-menu float-right d-none d-lg-block">
            <ul>
              {
                  this.state.links.map(link => {
                    return(
                    <Link key={link.id} to={link.path} className="menu-link"><li key={link.id}>{link.text}</li></Link>
                    );
                  })
              }
            </ul>
          </nav>
          <button type="button" className="mobile-nav-toggle d-lg-none"><i className="bx bx-menu"></i></button>
        </div>
      </header>
    )
  }
}

// export default class Navbar extends Component {
//     state = {
//         navbarOpen: false,
//         css: 'collapse navbar-collapse',
//         links:[
//             {
//                 id:1,
//                 path:'/',
//                 text:'Home'
//             },{
//                 id:2,
//                 path:'/about',
//                 text:'About'
//             }
//         ]
//     };
//     navbarHandler = () => {
//         this.state.navbarOpen ? this.setState({
//             navbarOpen: false,
//             css: "collapse navbar-collapse"
//         }) : this.setState({
//             navbarOpen: true,
//             css: "collapse navbar-collapse show"
//         });
//        };
//     render() {
//         return (
//             <nav className="navbar navbar-expand-sm bg-light navbar-light">
//                 <Link to="/" className="navbar-brand">
//                     <img src={logo} alt="logo"/>{
//                     }
//                 </Link>
//                 <button className="navbar-toggler" type="button" onClick={this.navbarHandler} >
//                     <span className="navbar-toggler-icon"/>
//                 </button>
//                 <div className={this.state.css}>
//                     <ul className="navbar-nav mx-auto">
//                     {
//                         this.state.links.map(link =>{
//                             return(
//                             <li key={link.id} className="nav-item">
//                                 <Link to={link.path} className="nav-link text-capitalize">
//                                     {link.text}
//                                 </Link>
//                             </li>
//                             );
//                         })
//                     }
//                     </ul>
//                 </div>
//             </nav>
//         )
//     }
// }
=======
import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo from '../../images/logo.png'
import { FaCartArrowDown } from 'react-icons/fa' 



export default class Navbar extends Component {
    state = {
        navbarOpen: false,
        css: 'collapse navbar-collapse',
        links:[
            {
                id:1,
                path:'/',
                text:'Home'
            },{
                id:2,
                path:'/about',
                text:'About'
            }
        ]
    };
    navbarHandler = () => {
        this.state.navbarOpen ? this.setState({
            navbarOpen: false,
            css: "collapse navbar-collapse"
        }) : this.setState({
            navbarOpen: true,
            css: "collapse navbar-collapse show"
        });
       };
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="logo"/>{
                    }
                </Link>
                <button className="navbar-toggler" type="button" onClick={this.navbarHandler} >
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className={this.state.css}>
                    <ul className="navbar-nav mx-auto">
                    {
                        this.state.links.map(link =>{
                            return(
                            <li key={link.id} className="nav-item">
                                <Link to={link.path} className="nav-link text-capitalize">
                                    {link.text}
                                </Link>
                            </li>
                            );
                        })
                    }
                    <li className="nav-item ml-sm-5">
                        <FaCartArrowDown  className="cart-icon"/>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
>>>>>>> b924f0cf4a4a1f397ee9b7b4f43335296d2036fe
