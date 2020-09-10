import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const Header = () => {
    const cart = useSelector(state => state.cart);
    let count = cart.cart.length
    return (
        <header className="header2">
            {/* Header desktop */}
            <div className="container-menu-header-v2 p-t-26">
                <div className="topbar2">
                    <div className="topbar-social">
                        <a href="#" className="topbar-social-item fa fa-facebook" />
                        <a href="#" className="topbar-social-item fa fa-instagram" />
                        <a href="#" className="topbar-social-item fa fa-pinterest-p" />
                        <a href="#" className="topbar-social-item fa fa-snapchat-ghost" />
                        <a href="#" className="topbar-social-item fa fa-youtube-play" />
                    </div>
                    {/* Logo2 */}
                    <a href="index.html" className="logo2">
                        <img src="images/icons/logo.png" alt="IMG-LOGO" />
                    </a>
                    <div className="topbar-child2">
                        {/*  */}
                        <a href="#" className="header-wrapicon1 dis-block m-l-30">
                            <img src="images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
                        </a>
                        <span className="linedivide1" />
                        <div className="header-wrapicon2 m-r-13">
                            <Link to="/cart">
                                <img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
                                <span className="header-icons-noti">{count}</span></Link>
                            {/* Header cart noti */}

                        </div>
                    </div>
                </div>
                <div className="wrap_header">
                    {/* Menu */}
                    <div className="header-icons">
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
