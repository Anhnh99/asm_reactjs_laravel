import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, } from 'react-router-dom'
import parse from 'html-react-parser';
const BlogDetail = () => {
    const [category, setCategory] = useState([])
    const [blog, setBlog] = useState([])
    const [products, setProducts] = useState([])
    const { id } = useParams();
    useEffect(() => {
        getDataBlog()
        getCategory()
        getDataProducts()
    }, []);
    // lấy danh sách danh mục
    const getCategory = () => {
        axios.get('/api/categoryblog')
            .then(function (response) {
                setCategory(response.data)
                // console.log(response.data)
            });
    }
    // lấy danh sách bài viết
    const getDataBlog = () => {
        axios.get(`/api/blog/${id}`)
            .then(function (response) {
                setBlog(response.data);
                // console.log(response.data)
            });
    }
    // lấy danh sách sản phẩm mới nhất
    const getDataProducts = () => {
        axios.get('/api/getProductNews')
            .then(function (response) {
                setProducts(response.data);
                // console.log(response.data)
            });
    }
    // map cate
    const showCate = category.map((cate, index) => {
        return <li key={index} className="p-t-6 p-b-8 bo6">
            <Link to={`/blogByCategory/${cate.id}`} className="s-text13 p-t-5 p-b-5">
                {cate.name_cate_blog}
            </Link>
        </li>
    })
    //map products
    const showPro = products.map((pro, index) => {
        return <li key={index} className="flex-w p-b-20">
            <Link to={`/productDetail/${pro.id}`} className="dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4">
                <img src={pro.image} alt="IMG-PRODUCT" />
            </Link>
            <div className="w-size23 p-t-5">
                <Link to={`/productDetail/${pro.id}`} className="s-text20">
                    {pro.name}
                </Link>
                <span className="dis-block s-text17 p-t-6">
                    {pro.discount > 0 ? <strike>{pro.price}</strike> : <span className="block2-price m-text6 p-r-5">{pro.price}</span>}
                    {pro.discount > 0 ? <span className="block2-price m-text6 p-r-5"> {pro.discount}</span> : ''}
                </span>
            </div>
        </li>
    })
    return (
        <section className="bgwhite p-t-60 p-b-25">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-lg-9 p-b-80">
                        <div className="p-r-50 p-r-0-lg">
                            <div className="p-b-40">
                                <div className="blog-detail-img wrap-pic-w">
                                    <img src={blog.image} alt="IMG-BLOG" />
                                </div>
                                <div className="blog-detail-txt p-t-33">
                                    <h4 className="p-b-11 m-text24">
                                        {blog.title}
                                    </h4>
                                    <div className="s-text8 flex-w flex-m p-b-21">
                                        <span>
                                            {blog.published}
                                        </span>
                                    </div>
                                    {parse(`${blog.content}`)}
                                </div>
                            </div>
                            {/* Leave a comment */}
                            <form className="leave-comment">
                                <h4 className="m-text25 p-b-14">
                                    BÌNH LUẬN
                  </h4>
                                <textarea className="dis-block s-text7 size18 bo12 p-l-18 p-r-18 p-t-13 m-b-20" name="comment" placeholder="Viết bình luận..." defaultValue={""} />
                                <div className="bo12 of-hidden size19 m-b-20">
                                    <input className="sizefull s-text7 p-l-18 p-r-18" type="text" name="name" placeholder="Tên *" />
                                </div>
                                <div className="bo12 of-hidden size19 m-b-20">
                                    <input className="sizefull s-text7 p-l-18 p-r-18" type="text" name="email" placeholder="Email *" />
                                </div>
                                <div className="w-size24">
                                    {/* Button */}
                                    <button className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                        Gửi
                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 p-b-80">
                        <div className="rightbar">
                            {/* Search */}
                            <div className="pos-relative bo11 of-hidden">
                                <input className="s-text7 size16 p-l-23 p-r-50" type="text" name="search-product" placeholder="Search" />
                                <button className="flex-c-m size5 ab-r-m color1 color0-hov trans-0-4">
                                    <i className="fs-13 fa fa-search" aria-hidden="true" />
                                </button>
                            </div>
                            {/* Categories */}
                            <h4 className="m-text23 p-t-56 p-b-34">
                                Categories
                </h4>
                            <ul>
                                {showCate}
                            </ul>
                            {/* Featured Products */}
                            <h4 className="m-text23 p-t-65 p-b-34">
                                SẢN PHẨM MỚI NHẤT
                </h4>
                            <ul className="bgwhite">
                                {showPro}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetail
