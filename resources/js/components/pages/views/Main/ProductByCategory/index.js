import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useLocation } from 'react-router-dom'
import Pagination from "react-js-pagination";

const ProductByCategory = () => {
    const [getProducts, setgetProducts] = useState([])
    const [category, setCategory] = useState([])
    const [nameCate, setNameCate] = useState("")
    const { id } = useParams()
    const location = useLocation()
    useEffect(() => {
        getDataProducts()
        getCategory()
        getNameCate()
    }, [location]);
    // lấy danh sách danh mục
    const getCategory = () => {
        axios.get('/api/categoryLimit3')
            .then((response) => {
                setCategory(response.data)
            })
    }
    //lấy tên danh mục
    const getNameCate = () => {
        axios.get(`/api/category/${id}`)
            .then((response) => {
                setNameCate(response.data)
            })
    }
    // lấy danh sách sản phẩm theo danh mục
    const getDataProducts = () => {
        axios.get(`/api/getProByCate/${id}`)
            .then(function (response) {
                setgetProducts(response.data);
            });
    }
    // map cate
    const listCategory = category.map((cate, index) => {
        return <li className="p-t-4" key={index}>
            <Link to={`/productByCategory/${cate.id}`} className="s-text13 active1">
                {cate.name_cate}
            </Link>
        </li>
    })
    // map pro
    const listProduct = getProducts.map((product, index) => {
        return <div className="col-sm-12 col-md-6 col-lg-4 p-b-50" key={index}>
            {/* Block2 */}
            <div className="block2">
                <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                    <img src={product.image} alt="IMG-PRODUCT" />
                    <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                            <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                            <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                        </a>
                        <div className="block2-btn-addcart w-size1 trans-0-4">
                            {/* Button */}
                            <Link to={`/productDetail/${product.id}`} className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                Chi Tiết
    </Link>
                        </div>
                    </div>
                </div>
                <div className="block2-txt p-t-20">
                    <Link to={`/productDetail/${product.id}`} className="block2-name dis-block s-text3 p-b-5">
                        {product.name}
                    </Link>
                    <span className="block2-price m-text6 p-r-5">
                        {product.discount > 0 ? <strike>{product.price}</strike> : <span className="block2-price m-text6 p-r-5">{product.price}</span>}
                        {product.discount > 0 ? <span className="block2-price m-text6 p-r-5"> {product.discount}</span> : ''}
                    </span>
                </div>
            </div>
        </div>
    })
    return (
        <div>
            {/* Content page */}
            <section className="bgwhite p-t-55 p-b-65">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
                            <div className="leftbar p-r-20 p-r-0-sm">
                                <div className="search-product pos-relative bo4 of-hidden">
                                    <input className="s-text7 size6 p-l-23 p-r-50" type="text" name="search-product" placeholder="Search Products..." />
                                    <button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
                                        <i className="fs-12 fa fa-search" aria-hidden="true" />
                                    </button>
                                </div>
                                <br />
                                <h4 className="m-text14 p-b-7">
                                    Danh Mục Sản Phẩm
                  </h4>
                                <ul className="p-b-54">
                                    {listCategory}
                                </ul>


                            </div>
                        </div>
                        <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
                            {/*  */}
                            <div className="flex-sb-m flex-w p-b-35">
                                <div className="flex-w">
                                    <div className="category">
                                        <h4 style={{ color: 'red' }}>#{nameCate.name_cate}</h4>
                                    </div>
                                </div>
                                <span className="s-text8 p-t-5 p-b-5">
                                    Showing 1–12 of 16 results
                  </span>
                            </div>
                            {/* Product */}
                            <div className="row">
                                {listProduct}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default ProductByCategory
