import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
   <footer id="footer">
            {/* <div className="footer-newsletter">
                <div className="row">
                    <div className="col-lg-6">
                        <h4>Our Newsletter</h4>
                        <p>Description</p>
                    </div>
                    <div className="col-lg-6">

                    </div>
                </div>
            </div> */}


               
               <div className="container">
      <div className="copyright">
        &copy; Copyright 2020<strong><span>ISEA - DEBOX INDONESIA</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
         <a href="https://inhuaschool.com/">Inhuaschool Software Engineering Academic</a>
      </div>
    </div>
</footer>
        )
    }
}
