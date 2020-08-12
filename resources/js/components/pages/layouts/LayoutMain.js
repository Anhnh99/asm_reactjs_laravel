import React from 'react';
import Header from '../../components/Main/Header';
import NavBar from '../../components/Main/NavBar';
import Footer from '../../components/Main/Footer';
import Home from '../views/Main/Home';
// import Product_Main from '../views/Main/Product_Main';


// import css
import '../../assets/css/main/images/icons/favicon.png'
import '../../assets/css/main/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../../assets/css/main/fonts/themify/themify-icons.css'
import '../../assets/css/main/fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import '../../assets/css/main/fonts/elegant-font/html-css/style.css'
import '../../assets/css/main/vendor/animate/animate.css'
import '../../assets/css/main/vendor/css-hamburgers/hamburgers.min.css'
import '../../assets/css/main/vendor/animsition/css/animsition.min.css'
import '../../assets/css/main/vendor/select2/select2.min.css'
import '../../assets/css/main/vendor/daterangepicker/daterangepicker.css'
import '../../assets/css/main/vendor/slick/slick.css'
import '../../assets/css/main/vendor/lightbox2/css/lightbox.min.css'
import '../../assets/css/main/css/util.css'
import '../../assets/css/main/css/main.scss'
// import '../../assets/css/main/vendor/jquery/jquery-3.2.1.min.js'
import '../../assets/css/main/vendor/animsition/js/animsition.min.js'
import '../../assets/css/main/vendor/bootstrap/js/popper.js'
import '../../assets/css/main/vendor/bootstrap/js/bootstrap.min.js'
import '../../assets/css/main/vendor/select2/select2.min.js'
import '../../assets/css/main/vendor/slick/slick.min.js'
import '../../assets/css/main/js/slick-custom.js'
import '../../assets/css/main/vendor/countdowntime/countdowntime.js'
import '../../assets/css/main/vendor/lightbox2/js/lightbox.min.js'
import '../../assets/css/main/vendor/sweetalert/sweetalert.min.js'
import '../../assets/css/main/vendor/parallax100/parallax100.js'
import '../../assets/css/main/js/main.js'
// import js

export default ({ children }) => {
    return (

        <div>
            {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link> */}
            <Header />
            <NavBar />
            {children}
            <Footer />
            {/* Back to top */}
            <div className="btn-back-to-top bg0-hov" id="myBtn">
                <span className="symbol-btn-back-to-top">
                    <i className="fa fa-angle-double-up" aria-hidden="true" />
                </span>
            </div>
            {/* Container Selection1 */}
            <div id="dropDownSelect1" />
            {/*===============================================================================================*/}
            {/*===============================================================================================*/}
            {/*===============================================================================================*/}
            {/*===============================================================================================*/}
            {/*===============================================================================================*/}
            {/*===============================================================================================*/}
            {/*===============================================================================================*/}
            {/*===============================================================================================*/}
            {/*===============================================================================================*/}
            {/*===============================================================================================*/}
        </div>
    )
}