import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom'
export default function Navbar(props) {
//   let togstyle={  //object href style css
//     color:'white'
//   }

  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
            <a className="navbar-brand" href="/" >{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/" >Home</a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="/About"  >{props.about}</a>
                </li> */}
                </ul>
                {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success mx-1" type="submit" >Search</button>

                </form> */}
                </div>
                <div style={{border:`2px solid ${props.mode==='light'? 'black':'white'}`}}>
                    <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light' }`} style={{margin:'2.5px'}}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >Enable {props.textMode}</label>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
Navbar.propTypes={title: PropTypes.string.isRequired , about : PropTypes.string}

Navbar.defaultProps={
    title:"APP",
    about:"lol set about bro , otherwise this will be set defaultly"
};