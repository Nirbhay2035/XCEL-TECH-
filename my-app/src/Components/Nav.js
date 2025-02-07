

import React from 'react';
import link, { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Nav = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // ✅ Set user if found in local storage
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('user'); // ✅ Remove user from local storage
        setUser(null); // ✅ Update state
        navigate('/login'); // ✅ Redirect to login page
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top border-bottom border-3 " >
            <div className="container-fluid pt-3 mx-2">
                <a className="navbar-brand me-auto fw-bold" href="#">
                    <img src="2.svg" alt="Logo" className='logo' />
                    {/* <span className="logo-text">XCEL-TECH</span> */}
                </a>

                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">XCEL-TECH</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 ">
                            <li className="nav-item">


                                <Link to='/' className="nav-link mx-lg-3">Home</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cable-TV
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Samsung-TV</a></li>

                                </ul>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link mx-lg-3" href="#">Cable-TV</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-lg-3" href="#">Broadband</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-lg-3" href="#">Games</a>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="nav-buttons">
                    {user ? (
                        <button className="logout-button" onClick={handleLogout}>Logout</button>
                    ) : (
                        <Link to='/login' className='login-button'>Login/Sign-up</Link>
                    )}
                </div>
                {/* <a href='/' className='login-button'>Login/Signup</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>

    )
}

export default Nav;
