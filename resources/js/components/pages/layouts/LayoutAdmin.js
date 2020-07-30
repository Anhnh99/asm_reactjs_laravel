import React from 'react'
import Footer from '../../components/Admin/Footer';
import Sidebar from '../../components/Admin/Sidebar';
import Topbar from '../../components/Admin/Topbar';
// import css\
import '../../assets/css/admin/sb-admin-2.min.css'
import '../../assets/css/admin/admin.scss'

const LayoutAdmin = ({ children }) => {
    console.log('admin layout')
    return (
        <div id="wrapper" className="admin-page">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
                <footer className="sticky-footer bg-white">
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default LayoutAdmin
