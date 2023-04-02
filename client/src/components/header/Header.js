import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'

const Header = () => {

    return (
        <div className="header bg-light ">
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle ">

                <Link to="/" className="logo d-lg-flex text-decoration-none">
                    <h1 className="navbar-brand text-uppercase p-0 m-0"
                    onClick={() => window.scrollTo({top: 0})}>
                        <img className='bg-transparent' src="https://media.graphassets.com/xVHfJFDfTymEaTFIpbZ8" width={52} alt="" />
                    </h1>
                    <h2 className='mt-2  ml-2 d-none d-lg-block text-green text-logo'>QADRDON</h2>
                </Link>

                <Search />

                <Menu/>
            </nav>
        </div>
    )
}

export default Header
