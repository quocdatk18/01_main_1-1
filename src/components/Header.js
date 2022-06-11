import React from 'react'
import "./style/Header.css"
import logo from "./logo-icon/logo-icon.png"
import search from './logo-icon/white-search-icon.png'
const flex = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
}
export default function Header() {

    return (
        <div className="top_box" style={flex} >
            <div className=''>
                <img src={logo} alt="logo" className="logo_icon" />
                <span className="Discover">
                    Discover
                </span>
                <span className="Job">
                    Job
                </span>
            </div>
            <div className='search_box '>
                <span className="Search-for-motion-trend">
                    Search for motion trend......
                </span>
                <div class="search_box"></div>
            </div>
            <div className=''>
                <img src={search} alt="search" className="white_search_icon" />
                <span className="Login">
                    Login
                </span>
                <span className="Sign-Up">
                    Sign Up
                </span>
            </div>
        </div >
    )
}
