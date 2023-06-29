import React from 'react'

function Footer(props) {
  return (
    <footer className={`pt-5 ${props.theme && "dark-theme"}`}>
        <div className="container">
            <div className="row border-bottom">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4 p-3">
                    <img src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg" alt="" />
                    <p className={`mt-3 ${props.theme && "white-text"}`}>
                    Geek is feature-rich components and beautifully
                     Bootstrap UIKit for developers,
                     built with bootstrap responsive framework.
                    </p>

                    <div>
                        <span className="me-2">
                        <svg viewBox="0 0 24 24" role="presentation" className="text-danger me-2" style={{width: '15px'}}><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" ></path></svg>
                        </span>
                        <span className="me-2">
                        <svg viewBox="0 0 24 24" role="presentation" class="text-info me-2" style={{width: '15px'}} ><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" ></path></svg>
                        </span>
                        <span>
                        <svg viewBox="0 0 24 24" role="presentation" class="text-primary me-2" style={{width: '15px'}}><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" ></path></svg>
                        </span>
                    </div>
                </div>

                <div className={`list-unstyled col-lg-2 col-md-3 col-sm-6 mb-4 nav ${props.theme && "darkMode"}`}>
                    <p className="display-7 fw-bold">
                    Company
                    </p>
                    <a href="#">About</a>
                    <a href="#">Pricing</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                    <a href="#">Contact</a>
                </div>

                <div className={`list-unstyled col-lg-2 col-md-3 col-sm-6 mb-4 nav ${props.theme && "darkMode"}`}>
                    <p className="display-7 fw-bold">
                    Support
                    </p>
                    <a href="#">Help and Support</a>
                    <a href="#">Become Instructor</a>
                    <a href="#">Get the app</a>
                    <a href="#">FAQ’s</a>
                    <a href="#">Tutorial</a>
                </div>

                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                    <p className="display-7 fw-bold">
                    Get in touch
                    </p>
                    <span className="light-dark mb-3 d-block">
                    339 McDermott Points Hettingerhaven, NV 15283
                    </span>
                    <a href="#">Email: support@geeksui.com</a>

                    <span className="light-dark d-block">
                    Phone: (000) 123 456 789
                    </span>

                    <div className="row">
                        <div className="col-5">
                            <img src="https://geeks-react.netlify.app/static/media/appstore.b464860c93223b3fc15fc7d026bcdca0.svg" alt="" />
                        </div>
                        <div className="col-5">
                            <img src="https://geeks-react.netlify.app/static/media/playstore.f23c3dcbde32e767203274d4b1749cc7.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-4">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <p className="light-dark mb-md-4">
                        © 2023 Geeks-UI, Inc. All Rights Reserved
                        </p>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 text-end d-xs-none">
                        <span className="light-dark me-3 ">Privacy Policy</span>
                        <span className="light-dark me-3">Cookie Notice</span>
                        <span className="light-dark ">Terms of Use</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer