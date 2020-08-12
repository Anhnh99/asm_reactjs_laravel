import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">Admin</div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            <li className="nav-item">
                <Link className="nav-link" to='/admin'>
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/admin/category'>
                    <i className="fas fa-list-ul" />
                    <span>Danh Mục Sản Phẩm</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/admin/products'>
                    <i className="fas fa-grin-tongue-squint"></i>
                    <span>Sản Phẩm</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/admin/cate_blog'>
                    <i className="fas fa-list-ul"></i>
                    <span>Danh Mục Bài Viết</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/admin/blogs'>
                    <i className="fas fa-grin-tongue-squint"></i>
                    <span>Bài Viết</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/admin/contact'>
                    <i className="fas fa-list-ul"></i>
                    <span>Phản Hồi Khách Hàng</span></Link>
            </li>
        </ul>
    )
}

export default Sidebar
