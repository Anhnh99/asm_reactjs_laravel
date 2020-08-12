import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Home = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        getDataProducts();
        getCategory()
        getBlog()
    }, []);
    // lấy danh sách sản phẩm
    const getDataProducts = () => {
        axios.get('/api/getProductNews')
            .then(function ({ data }) {
                setProducts(data);
                // console.log(data)
            });
    }
    // lấy danh sách danh mục
    const getCategory = () => {
        axios.get('/api/category')
            .then((response) => {
                setCategory(response.data)
            })
    }
    // lấy danh sách bài viết
    const getBlog = () => {
        axios.get('/api/blogLimit')
            .then((response) => {
                setBlogs(response.data)
                // console.log(response.data)
            })
    }
    // map cate
    const showCategory = category.map((category, index) => {
        return <div key={index} className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
            <div className="block1 hov-img-zoom pos-relative m-b-30">
                <img src="images/banner-03.jpg" alt="IMG-BENNER" />
                <div className="block1-wrapbtn w-size2">
                    <Link to={`/productByCategory/${category.id}`} className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                        {category.name_cate}
                    </Link>
                </div>

            </div>
        </div>
    })
    // map pro
    const product = products.map((product, index) => {
        return <div className="col-sm-6 col-md-4 col-lg-3 p-b-50" key={index}>
            <div className="block2" >
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
                    {product.discount > 0 ? <strike>{product.price} vnđ</strike> : <span className="block2-price m-text6 p-r-5">{product.price} vnđ</span>}
                    {product.discount > 0 ? <span className="block2-price m-text6 p-r-5"> {product.discount} vnđ</span> : ''}
                </div>
            </div>
        </div>
    })
    // map blog
    const showBlog = blogs.map((blog, index) => {
        return <div key={index} className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
            <div className="block3">
                <Link to={`/blogDetail/${blog.id}`} className="block3-img dis-block hov-img-zoom">
                    <img src={blog.image} alt="IMG-BLOG" />
                </Link>
                <div className="block3-txt p-t-14">
                    <h4 className="p-b-7">
                        <Link to={`/blogDetail/${blog.id}`} className="m-text11">
                            {blog.title}
                        </Link>
                    </h4>
                    <span className="s-text6">{blog.published}</span>
                    <p className="s-text8 p-t-16">
                        {blog.description}
                    </p>
                </div>
            </div>
        </div>
    })
    return (
        <div>
            <section className="slide1">
                <div className="wrap-slick1">
                    <div className="slick1">
                        <div className="item-slick1 item1-slick1" style={{ backgroundImage: 'url(https://www.vascara.com/uploads/banner/2020/March/9/9011583723026.png)' }}>
                            <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                                <h6 className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37" data-appear="fadeInUp">
                                    Leather Bags
                  </h6>
                                <span className="caption2-slide1 m-text1 t-center animated visible-false m-b-33" data-appear="fadeInDown">
                                    New Collection 2018
                  </span>
                                <div className="wrap-btn-slide1 w-size1 animated visible-false" data-appear="zoomIn">
                                    {/* Button */}
                                    <a href="product.html" className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
                                        Shop Now
                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
            {/* Banner */}
            < div className="banner bgwhite p-t-40 p-b-40" >
                <div className="container">
                    <div className="row">
                        {showCategory}
                    </div>
                </div>
            </div >
            {/* Our product */}
            < section className="bgwhite p-t-45 p-b-58" >
                <div className="container">
                    <div className="sec-title p-b-22">
                        <h3 className="m-text5 t-center">
                            SẢN PHẨM MỚI NHẤT
              </h3>
                    </div>
                    {/* Tab01 */}
                    <div className="tab01">
                        {/* Tab panes */}
                        <div className="tab-content p-t-35">
                            {/* - */}
                            <div className="tab-pane fade show active" id="best-seller" role="tabpanel">
                                <div className="row">

                                    {/* Block2 */}
                                    {product}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* Blog */}
            < section className="blog bgwhite p-b-65" >
                <div className="container">
                    <div className="sec-title p-b-52">
                        <h3 className="m-text5 t-center">
                            TIN TỨC
              </h3>
                    </div>
                    <div className="row">
                        {showBlog}
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Home
