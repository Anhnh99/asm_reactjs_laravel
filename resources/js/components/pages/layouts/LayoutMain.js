import React from 'react';
import Header from '../../components/Main/Header';
import NavBar from '../../components/Main/NavBar';
import Footer from '../../components/Main/Footer';
export default ({ children }) => {

    console.log('render Main')
    console.log('Sai đ')

    return (
        <div className="user-page">
            <Header />
            <NavBar />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}