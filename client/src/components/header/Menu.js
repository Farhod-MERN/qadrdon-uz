import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authAction'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import Avatar from '../Avatar'
import NotifyModal from '../NotifyModal'

const Menu = () => {
    const navLinks = [
        { label: 'Home', icon: 'house', path: '/'},
        { label: 'Message', icon: 'near_me', path: '/message'},
        { label: 'Discover', icon: 'explore', path: '/discover'}
    ]

    //eslint-disable-next-line
    const { auth, theme, notify } = useSelector(state => state)
    const dispatch = useDispatch()
    const { pathname } = useLocation()

    const isActive = (pn) => {
        if(pn === pathname) return 'active'
    }

    return (
        <div className="menu myMenus">
            <ul className="navbar-nav flex-row">
                {
                    navLinks.map((link, index) => (
                        <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
                            <Link className="nav-link" to={link.path}>
                                <span className="material-icons text-success">{link.icon}</span>
                            </Link>
                        </li>
                    ))
                }
                <li className='nav-item mt-lg-2 mt-md-2 mx-2 myAddButton'>
                    <span className="material-icons pointer text-success" onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
                       add_circle
                    </span>
                </li>

                <li className="nav-item dropdown myClasstoNotify" style={{opacity: 1}} >
                    <span className=" nav-link position-relative" id="navbarDropdown" 
                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                        <span className="material-icons text-success" 
                        style={{color: notify.data.length > 0 ? 'crimson' : ''}}>
                            favorite
                        </span>

                        <span className="notify_length">{notify.data.length}</span>

                    </span>

                    <div className="dropdown-menu" aria-labelledby="navbarDropdown"
                    style={{transform: 'translateX(75px)'}}>
                        <NotifyModal />
                    </div>

                        
                </li>
            
                <li className="nav-item dropdown myClass" style={{opacity: 1}} >
                    <span className="nav-link dropdown-toggle" id="navbarDropdown" 
                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Avatar src={auth.user.avatar} size="medium-avatar" />
                    </span>

                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>Profilim</Link>

                    {/* <label htmlFor="theme" className="dropdown-item d-none d-lg-block d-md-block"
                    onClick={() => dispatch({
                        type: GLOBALTYPES.THEME, payload: !theme
                    })}>

                        {theme ? <span className="material-icons" id='theme-icon' style={{fontSize: "1.35rem"}}>wb_sunny</span> :  <span className="material-icons" style={{fontSize: "1.35rem"}} id='theme-icon'>dark_mode</span>}
                    </label> */}

                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/"
                    onClick={() => dispatch(logout())}>
                        Chiqish
                    </Link>
                </div>
            </li>
        </ul>
    </div>

    )
}

export default Menu
