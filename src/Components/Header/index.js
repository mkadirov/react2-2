import React, {useState} from 'react'
import HeaderStyled from '../../Style/HeaderStyle'
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header(props) {
    let mode;
    if(props.theme) {
        mode = "white"
    }else {
        mode = "black"
    }

  return (
    <> 
       <HeaderStyled>
       <div className={`mainBox  py-3 px-3 ${props.theme && "dark"} border-bottom`}>
          <div className="inner d-flex aligen-items-center gap-2">
          <div className="logo">
            <img src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg" alt="" />
            
           </div>
           <div className="headerMain d-flex justify-content-between flex-fill aligen-items-center">
            <div className="navBox d-flex gap-2">

                 <Dropdown >
                  <Dropdown.Toggle variant="white" id="dropdown-basic" style={{color: mode}}>
                    Browse
                 </Dropdown.Toggle>

                 <Dropdown.Menu className='mt-3' >
                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                 </Dropdown.Menu>
                 </Dropdown>

                 <Dropdown >
                  <Dropdown.Toggle variant="white" id="dropdown-basic" style={{color: mode}}>
                    Landings
                 </Dropdown.Toggle>

                 <Dropdown.Menu className='mt-3' >
                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                 </Dropdown.Menu>
                 </Dropdown>

                 <Dropdown >
                  <Dropdown.Toggle variant="white" id="dropdown-basic" style={{color: mode}}>
                    Pages
                 </Dropdown.Toggle>

                 <Dropdown.Menu className='mt-3' >
                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                 </Dropdown.Menu>
                 </Dropdown>

                 <Dropdown >
                  <Dropdown.Toggle variant="white" id="dropdown-basic" style={{color: mode}}>
                    Accounts
                 </Dropdown.Toggle>

                 <Dropdown.Menu className='mt-3' >
                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                 </Dropdown.Menu>
                 </Dropdown>
                


              <div className="search-box">
               <div className="span search-icon">
               <FontAwesomeIcon icon={faMagnifyingGlass} />
               </div>
              <input type="text" className="form-control ps-5 input" placeholder='Search Courses..' />
              </div>
            </div>
            <div className="controllBox d-flex align-items-center">
                <div className="themeBtn me-4" onClick={() => props.setTheme(!props.theme)}>
                    <img src="https://geeks-react.netlify.app/static/media/sun.b75d9ae1f8dafcf0365aa12aeb1e0362.svg" alt="" />
                </div>

                <a className={`btn btn-${props.theme? "dark": "white"} shadow-sm me-2 btn`} href="#">Sign In</a>
                <a className="btn btn-prime shadow-sm me-2 btn" href="#">Sign Up</a>
            </div>
           </div>
          </div>
         </div>
       </HeaderStyled>

    </>
  )
}

export default Header