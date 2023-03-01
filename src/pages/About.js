import React from 'react';
import Navigation from './Navigation';
import Logos from '../styles//images/logosFiles.png';
const About = () => (
    <>
        <Navigation />
        <div className="the-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 about-me">
                        <h1>Hello! I'm Danny Suazo</h1>

                        <p>As a designer and front-end developer, I have experience in web design, web development, creating brands and designing print materials for over four years. I find inspiration in nature, architecture, music, and other creative designers/developers. I'm a fan of <strong>structure</strong> and <strong>simplicity</strong> in both design and code; <strong>organization</strong> and <strong>consistency</strong> always shows in my work. While taking courses, I also learn from tutorials and resource sites to expand my knowledge. My nights consist of designing & coding for hours with coffee and some awesome music. TEST</p>

                        <h3>Credentials</h3>

                        <p><span className="cert-title">Certificate Houston Coding Bootcamp - The University of Texas at Austin</span>
                            An intensive 24-week long boot camp dedicated to designing and building web applications.</p>

                        <p><span className="cert-title">B.S. Multimedia Design & Development - DeVry University</span>
                            Focused on Web Design, Graphic Design, Advertising & Marketing</p>

                        {/* <div className={workShow}>
                                        <p>Few projects I'm currently working on..</p>
                                        <div className="row no-gutters">
                                            <div className="col-12 work-projects">
                                                <span className="link--bravoo">Bravoo
                                                    <span>
                                                        <a href="https://bravoo.herokuapp.com/" target="_blank" rel="noopener noreferrer">See App</a> | <a href="https://github.com/suazod/bravoo" target="_blank" rel="noopener noreferrer">See Code</a>
                                                    </span>
                                                </span>

                                                <span className="link--bravoo">Audio Buzz
                                                    <span>
                                                        <a href="https://gboyce.github.io/audiobuzz/" target="_blank" rel="noopener noreferrer">See App</a> | <a href="https://github.com/gboyce/audiobuzz" target="_blank" rel="noopener noreferrer">See Code</a>
                                                    </span>
                                                </span>

                                                <span className="link--bravoo">Petential
                                                    <span>
                                                        <a href="https://stormy-stream-36757.herokuapp.com/" target="_blank" rel="noopener noreferrer">See App</a> | <a href="https://github.com/suazod/petential" target="_blank" rel="noopener noreferrer">See Code</a>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div> */}
                    </div>

                </div>
                <div className="container">
                    <div className=" text-center align-items-center">
                        <div className="row no-gutters barcode">
                            <div className="col-12">
                                <div className="w-100 text-white">
                                    <h1 className="display-3"><span className="main-title about">Digital Designer + Developer</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Logos} className="logos App-logo" alt="logo" />
            </div>
        </div>
    </>
)

export default About;