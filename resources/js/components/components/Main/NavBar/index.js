import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div class="wrap_menu">
            <nav class="menu">
                <ul class="main_menu">
                    <li>
                        <Link to="/">Trang Chủ</Link>
                    </li>

                    <li>
                        <Link to="/product">Sản Phẩm</Link>
                    </li>
                    <li>
                        <Link to="/blog">Tin Tức</Link>
                    </li>
                    <li>
                        <Link to="/contact">Liên Hệ</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
