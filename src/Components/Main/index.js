import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faVideo, faUser} from '@fortawesome/free-solid-svg-icons'
import MainStyled from '../../Style/MainStyle'
import SmallCard from '../SmallCard/SmallCard'
import Accord from '../Accord'


function Main(props) {
  return (
    <MainStyled>
        <section className={`py-5 bg-white section1 ${props.theme && "dark"}`}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="mb-4 mb-xl-0 text-center text-md-start">
                            <h1 className="display-3 fw-bold mb-4 ls-sm grey-300">
                            Become a Vanilla JavaScript Developer
                            </h1>
                            <p className="mb-4 fs-3 light-dark">
                            In this tutorial, we are going to learn about JavaScript
                             (Vanilla JS) - for building incredible, 
                            powerful JavaScript applications.
                            </p>
                            <div className="list-unstyled fs-4">
                                    <span className='mb-2 ' >
                                        <span className="orange">
                                        <FontAwesomeIcon icon={faClock} className='me-2' />
                                        </span>
                                        <span className="light-dark">
                                            4 Hours
                                        </span>
                                    </span>
                                    <span className='mb-2 ' >
                                        <span className="orange">
                                        <FontAwesomeIcon icon={faVideo} className='me-2' />
                                        </span>
                                        <span className="light-dark">
                                          12 Videos
                                        </span>
                                    </span>
                                    <span className='mb-2 ' >
                                        <span className="orange">
                                        <FontAwesomeIcon icon={faUser} className='me-2' />
                                        </span>
                                        <span className="light-dark">
                                           10,234+ Enrolled
                                        </span>
                                    </span>
                            </div>

                            <button className="btn btn-success fw-bold py-2 px-4 mt-4">
                                Watch Prewiev
                            </button>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-12 offset-xl-1">
                        <div className="card shadow-sm">
                            <div className="card-body p-5 border-bottom">
                                <div className="pb-4 border-bottom">
                                    <h2 className="fw-bold grey-300">
                                    Create Free Account
                                    </h2>

                                    <div className="row g-2 mt-3">
                                        <div className="col-lg-4 ">
                                            <button className="btn btn-light shadow-sm btn-block">
                                                <span>
                                                  <svg viewBox="0 0 24 24" role="presentation" className="text-danger me-2" style={{width: '15px'}}><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" ></path></svg>
                                                </span>
                                                Google
                                            </button>
                                        </div>
                                        <div className="col-lg-4">
                                            <button className="btn btn-light shadow-sm btn-block">
                                                <span>
                                                <svg viewBox="0 0 24 24" role="presentation" class="text-info me-2" style={{width: '15px'}} ><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" ></path></svg>
                                                </span>
                                                Google
                                            </button>
                                        </div>
                                        <div className="col-lg-4">
                                            <button className="btn btn-light shadow-sm btn-block">
                                                <span>
                                                <svg viewBox="0 0 24 24" role="presentation" class="text-primary me-2" style={{width: '15px'}}><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" ></path></svg>
                                                </span>
                                                Google
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="form">
                                    <input type="text" className="form-control ps-4 mt-4" placeholder='Email' />
                                    <input type="text" className="form-control ps-4 mt-4" placeholder='Password' />
                                    <button className="btn btn-prime btn-block mt-4">Start Course For Free</button>
                                </div>
                            </div>

                            <div className="px-5 py-4">
                                <p><span className="light-dark">By continuing you accept the</span> 
                                <span className="fw-bold"> Terms of Use, Privacy Policy,</span> <span className="light-dark"> and</span> 
                                <span className="fw-bold"> Data Policy</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>

        <section className={`section2 shadow-sm ${props.theme && "dark"}`}>
        <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <p className="text-center fs-5 s2p">
                        Shareable Certificate
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <p className="text-center fs-5 s2p">
                        Shareable Certificate
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <p className="text-center fs-5 s2p">
                        Shareable Certificate
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <p className="text-center fs-5 s2p">
                        Shareable Certificate
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className={`section3  py-8   ${props.theme? "bg-darker-gray" : "bg-gray-300"}`}>
            <div className="container">
                <div className="row mb-10 justify-content-center ">
                    <div className="col-lg-8 col-md-12 col-sm-12 text-center">
                        <span className="text-primary text-uppercase mb-3 fw-semi-bold">   
                        COURSE DESCRIPTION
                        </span>
                        <h2 className={`display-4 mb-3 fw-bold ${props.theme && "white-text"}`}>
                        What will you learn?
                        </h2>
                        <p className="light-dark display-7">
                        Vanilla JS is a fast, lightweight, cross-platformframework 
                        for building incredible, powerful JavaScript applications.
                        </p>
                    </div>
                </div>

                <div className="row mt-5">

                    <SmallCard theme= {props.theme}/>
                    <SmallCard theme= {props.theme}/>
                    <SmallCard theme= {props.theme}/>
                    <SmallCard theme= {props.theme}/>
                </div>
            </div>
        </section>

        <section className={`section4 ${props.theme && "dark-theme"}`}>
            <div className="container">
                <div className="row justify-content-center pb-5 align-items-center">
                    <div className="col-md-10">
                        <div className="row align-items-center justify-content-between">
                            <div className="text-center col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <span className="text-primary text-uppercase">
                                YOUR INSTRUCTOR
                                </span>
                                <h2 className={`${props.theme? "white-text": 'text-dark'}`}>
                                Hi, I’m <span className="text-primary">James Davies, </span>
                                I will be taking you through lessons.
                                </h2>
                                <p className="light-dark pb-5 mt-5 border-bottom">
                                Create beautiful website with this Geeks UI template. Get started building a site today.
                                </p>

                                <div className="row mt-3">
                                    <div className="col col-sm">
                                        <div>
                                            <h1 className={`${props.theme? "white-text": 'text-dark'}`}>
                                             45
                                            </h1>
                                            <p className="light-dark">
                                            Lessons
                                            </p>
                                        </div>
                                       
                                    </div>
                                    <div className="col col-sm">
                                        <div>
                                            <h1 className={`${props.theme? "white-text": 'text-dark'}`}>
                                            10,500+
                                            </h1>
                                            <p className="light-dark">
                                            Students
                                            </p>
                                        </div>
                                       
                                    </div>
                                    <div className="col col-sm">
                                        <div>
                                            <h1 className={`${props.theme? "white-text": 'text-dark'}`}>
                                            12+
                                            </h1>
                                            <p className="light-dark">
                                            Learning Hours
                                            </p>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="text-center col-xl-5 col-lg-5 col-md-12 col-sm-12">
                                <img src="https://geeks-react.netlify.app/static/media/instructor-img.1ed9cc40ee4734876e12.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className={`section5 py-8 py-lg-16 ${props.theme && "dark-theme"}`}>
            <div className="container">
                <div className="row justify-content-center mb-6">
                    <div className="col-lg-8 col-md-12 col-sm-12 text-center">
                    <span class="text-primary mb-3 d-block text-uppercase fw-semi-bold ls-xl">
                        Trusted by top-tier product companies
                    </span>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <div className="mb-4 text-center">
                        <img src="https://geeks-react.netlify.app/static/media/gray-logo-stripe.6b556d06bcc209f1c051bbdb399131f0.svg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <div className="mb-4 text-center">
                        <img src="https://geeks-react.netlify.app/static/media/gray-logo-airbnb.5908aac3e8062333869d580f4b2f3d59.svg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <div className="mb-4 text-center">
                        <img src="https://geeks-react.netlify.app/static/media/gray-logo-discord.2e0bae69d24feccf4efdd3f80746031b.svg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <div className="mb-4 text-center">
                        <img src="https://geeks-react.netlify.app/static/media/gray-logo-intercom.870602b99ded665ecf0c2d5b2ffeb8c4.svg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <div className="mb-4 text-center">
                        <img src="https://geeks-react.netlify.app/static/media/gray-logo-pinterest.928eaa29223a809cc5554847139d26a9.svg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <div className="mb-4 text-center">
                        <img src="https://geeks-react.netlify.app/static/media/gray-logo-netflix.a47db6eaf2de7327844f27eb230da39c.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className={`section6  py-8   ${props.theme? "bg-darker-gray" : "bg-gray-300"}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12 col-sm-12 text-center">
                                <span className="text-primary text-uppercase">
                                TESTIMONIALS
                                </span>
                                <h1 className={`display-4 ${props.theme? "white-text": 'text-dark'}`}>
                                What our learners are saying
                                </h1>
                                <p className="light-dark pb-5 mt-3">
                                12+ million people are already learning on Geeks
                                </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col sm-12">
                        <div className="card shadow-sm text-center ">
                           <div className={`card-body p-5 ${props.theme && "bg-dark-gray"}`}>
                           <svg viewBox="0 0 24 24" role="presentation"  style={{width: '50px'}}><path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" ></path></svg>
                           <p className="light-dark">
                            The generated lorem Ipsum is therefore always free
                             from repetition, injected humour, or words
                             etc generate lorem Ipsum which looks racteristic reasonable.
                            </p>
                           </div>
                           <div className="card-footer btn-prime pt-5 pb-3">
                              <h2 className="white-text">
                              Barry Watson
                              </h2>
                              <p className="light-dark">
                              Web Developer,UK
                              </p>

                              <div className="imgRounded big-box-img">
                                <img src="https://geeks-react.netlify.app/static/media/avatar-1.d2fd9642fd3628734b27.jpg" alt="" />
                              </div>
                           </div>
                        </div>
                    </div>
                    <div className="col-md-6 col sm-12">
                        <div className="card shadow-sm text-center ">
                           <div className={`card-body p-5 ${props.theme && "bg-dark-gray"}`}>
                           <svg viewBox="0 0 24 24" role="presentation"  style={{width: '50px'}}><path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" ></path></svg>
                           <p className="light-dark">
                            The generated lorem Ipsum is therefore always free
                             from repetition, injected humour, or words
                             etc generate lorem Ipsum which looks racteristic reasonable.
                            </p>
                           </div>
                           <div className="card-footer bg-primary pt-5 pb-3">
                              <h2 className="white-text">
                              Linda Shenoy
                              </h2>
                              <p className="light-dark">
                              Developer and Bootcamp Instructor
                              </p>

                              <div className="imgRounded big-box-img">
                                <img src="https://geeks-react.netlify.app/static/media/avatar-2.397cdd4b772a83b9166e.jpg" alt="" />
                              </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className={`section7 py-8 py-lg-16 ${props.theme && "dark-theme"}`} >
            <div className="container">

               <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12 col-sm-12 text-center">
                                <span className="text-primary text-uppercase">
                                NEED TO KNOW
                                </span>
                                <h1 className={`display-4 ${props.theme? "white-text": 'text-dark'}`}>
                                Frequently Asked Questions.
                                </h1>
                                <p className="light-dark pb-5 mt-3 ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non accumsan in, tempor dictum neque.
                                </p>
                    </div>
               </div>

               <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8 col-sm-12">
                    <Accord theme = {props.theme}/>
                  </div>
               </div>
              
            </div>
        </section>

        <section className={`section6  py-8   ${props.theme? "bg-darker-gray" : "bg-gray-300"}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12 col-sm-12 text-center">
                        <h2 className={`display-4 ${props.theme && "white-text"}`}>
                        Join more than 1 million learners worldwide
                        </h2>
                        <p className="light-dark display-7">
                        Effective learning starts with assessment. Learning a new skill is hard work—Signal makes it easier.
                        </p>
                        <button className="btn btn-prime me-2">
                            Start Learning for Free
                        </button>
                        <button className="btn btn-success">
                            Geeks for Business
                        </button>
                    </div>
                </div>
            </div>
        </section>

    </MainStyled>
  )
}

export default Main