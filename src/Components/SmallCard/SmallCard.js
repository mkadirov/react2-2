import React from 'react'

function SmallCard(props) {
  return (
    <div className="col-lg-6 col-sm-12">
                        <div className={`card shadow-sm mb-4 ${ props.theme && "bg-dark-gray"}`}>
                           <div className="p-5 card-body">
                           <div className="mb-4 d-flex">
                                <div className="mb-3 imgRounded btn-prime">
                                    <img src="https://geeks-react.netlify.app/static/media/feature-icon-1.d81a3fc1e4004c4b67e31168c1898c64.svg" alt="" />
                                </div>
                                <div className="ms-md-4">
                                    <h2 className={`mb-1 ${props.theme && "white-text"}`}>
                                    Introduction to JavaScript
                                    </h2>
                                    <span className="text-dark me-3">
                                      COURSES - 1
                                    </span>
                                    <span className="light-dark me-3">
                                    6 LESSONS
                                    </span>
                                    <span className="light-dark me-3">
                                    1 HOUR 12 MIN
                                    </span>
                                </div>
                            </div>
                            <p className="light-dark mb-5">
                            In et tempus dui, in porta dolor. Donec molestie a purus 
                            ut interdum. Donec quis felis dignissim, luctus libero ornare
                            </p>

                            <a href="#" className="mt-5 fw-bold">
                            View Chapter Details +
                            </a>
                           </div>
                        </div>
                    </div>
  )
}

export default SmallCard