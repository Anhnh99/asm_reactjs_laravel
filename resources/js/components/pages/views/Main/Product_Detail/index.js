import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Product_Detail = () => {
    const [product, setProduct] = useState({})
    const [productByCate, setProductByCate] = useState([])
    const location = useLocation()
    const { id } = useParams();

    useEffect(() => {
        getDataProduct()
    }, [location]);


    // lấy danh sách sản phẩm
    const getDataProduct = () => {
        axios.get(`/api/product/${id}`)
            .then(function (response) {
                setProduct(response.data);
            })
    }

    // lấy danh sách sản phẩm theo danh mục
    const getProductByCate = () => {
        axios.get(`/api/getProductByCate/${id}`)
            .then(function (response) {
                setProductByCate(response.data);
            });
    }
    getProductByCate()
    const productsByCate = productByCate.map((pro, index) => {
        return <div className="col-sm-6 col-md-4 col-lg-3 p-b-50" key={index}>
            <div className="block2">
                <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                    <img src={pro.image} alt="IMG-PRODUCT" />
                    <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                            <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                            <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                        </a>
                        <div className="block2-btn-addcart w-size1 trans-0-4">
                            {/* Button */}
                            <Link to={`/productDetail/${pro.id}`} className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                Chi Tiết
    </Link>
                        </div>
                    </div>
                </div>
                <div className="block2-txt p-t-20">
                    <Link to={`/productDetail/${pro.id}`} className="block2-name dis-block s-text3 p-b-5">
                        {pro.name}
                    </Link>
                    {pro.discount > 0 ? <strike>{pro.price} vnđ</strike> : <span className="block2-price m-text6 p-r-5">{pro.price} vnđ</span>}
                    {pro.discount > 0 ? <span className="block2-price m-text6 p-r-5"> {pro.discount} vnđ</span> : ''}
                </div>
            </div>

        </div>

    })
    return (
        <div>
            <div>
                <div className="container bgwhite p-t-35 p-b-80">
                    <div className="flex-w flex-sb">
                        <div className="w-size13 p-t-30 respon5">
                            <div className="wrap-slick3 flex-sb flex-w">
                                <div className="wrap-slick3-dots" />
                                <div className="slick3">
                                    <div className="item-slick3" data-thumb="images/thumb-item-01.jpg">
                                        <div className="wrap-pic-w">
                                            <img src={product.image} alt="IMG-PRODUCT" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-size14 p-t-30 respon5">
                            <h4 className="product-detail-name m-text16 p-b-13">
                                {product.name}
                            </h4>

                            {product.discount > 0 ? <strike>{product.price}</strike> : <span>{product.price}</span>}
                            {product.discount > 0 ? <span> {product.discount}</span> : ''}

                            <p className="s-text8 p-t-10">
                                Tình Trạng: {product.quantity > 0 ? 'Còn hàng' : 'Hết hàng'}
                            </p>
                            <pre className="s-text8 p-t-10">
                                Mô tả sản phẩm: {product.description}
                            </pre>
                            {/*  */}
                            <div className="p-t-33 p-b-60">
                                <div className="flex-r-m flex-w p-t-10">
                                    <div className="w-size16 flex-m flex-w">
                                        <div className="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
                                            <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                                                <i className="fs-12 fa fa-minus" aria-hidden="true" />
                                            </button>
                                            <input className="size8 m-text18 t-center num-product" type="number" name="num-product" defaultValue={1} />
                                            <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                                                <i className="fs-12 fa fa-plus" aria-hidden="true" />
                                            </button>
                                        </div>
                                        <div className="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">
                                            {/* Button */}
                                            <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                                                Mua Ngay
                      </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Relate Product */}
                <section className="relateproduct bgwhite p-t-45 p-b-138">
                    <div className="container">
                        <div className="sec-title p-b-60">
                            <h3 className="m-text5 t-center">
                                SẢN PHẨM LIÊN QUAN
              </h3>
                        </div>
                        {/* Slide2 */}
                        <div className="row">
                            {productsByCate}

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Product_Detail
