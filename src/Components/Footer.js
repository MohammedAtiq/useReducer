import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section className="  footers bg-light pb-3 mt-5 border">
                <div className=" container-fluid  pt-5">
                    <div className="row footerCenter">
                        <div className="col-xs-12 col-sm-6 col-md-4 footers-one">
                            <div className="footers-logo">
                            <Link className="navbar-brand logo" to="/">Super</Link>
                            </div>
                            <div className="footers-info mt-3">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                                <a href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a href="https://plus.google.com/"><i className="fa fa-linkedin"></i></a>
                                <a href="mailto:bootsnipp@gmail.com"><i className="fa fa-instagram"></i></a>
                                <a href="mailto:bootsnipp@gmail.com"><i className="fa fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-2 footCenter">
                            <h5>cXfirst Platform </h5>
                            <ul className="list-unstyled">
                                <li><a href="maintenance.html">Decision Management System</a></li>
                                <li><a href="contact.html">Quality Management System</a></li>
                                <li><a href="about.html">Training Management System</a></li>
                                <li><a href="about.html">Work From Home</a></li>
                                <li><a href="about.html">Integrations</a></li>
                                <li><a href="about.html">Blogs</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-2 footCenter">
                            <h5>User Cases</h5>
                            <ul className="list-unstyled">
                                <li><a href="maintenance.html">Decision Management System</a></li>
                                <li><a href="contact.html">Quality Management System</a></li>
                                <li><a href="about.html">Training Management System</a></li>
                                <li><a href="about.html">Work From Home</a></li>
                                <li><a href="about.html">Integrations</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-2 footCenter">
                            <h5>Integrations </h5>
                            <ul className="list-unstyled">
                                <li><a href="maintenance.html">Decision Management System</a></li>
                                <li><a href="contact.html">Quality Management System</a></li>
                                <li><a href="about.html">Training Management System</a></li>
                                <li><a href="about.html">Work From Home</a></li>
                                <li><a href="about.html">Integrations</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-2 footCenter">
                            <h5>Industries </h5>
                            <ul className="list-unstyled">
                                <li><a href="maintenance.html">Engineering</a></li>
                                <li><a href="about.html">Foodtech</a></li>
                                <li><a href="about.html">Insurance</a></li>
                                <li><a href="about.html">Agritech</a></li>
                                <li><a href="contact.html">Online Ticket Booking</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section className="copyright border">
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-md-8 pt-3">
                            <p className="text-muted text-start m-0">Copyright © 2022 </p>
                        </div>
                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
