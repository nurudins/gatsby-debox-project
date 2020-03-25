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
      <header id="header" class="fixed-top">
        <div class="container">
          <div class="logo float-left">
            <h1 class="text-light">
              <a href="index.html">
                <span>Inhuaschool</span>
              </a>
            </h1>
            {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
          </div>

          <nav class="nav-menu float-right d-none d-lg-block">
            <ul>
              {
                  this.state.links.map(link => {
                    return(
                    <Link to={link.path} className="menu-link"><li key={link.id}>{link.text}</li></Link>
                    );
                  })
              }
            </ul>
          </nav>
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
