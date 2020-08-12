import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useLocation } from 'react-router-dom'
const BlogByCategory = () => {
    const [category, setCategory] = useState([])
    const [blogs, setBlogs] = useState([])
    const [nameCate, setnameCate] = useState({})
    const { id } = useParams()
    const location = useLocation()
    useEffect(() => {
        getDataBlog()
        getCategory()
        getNameCate()
    }, [location]);
    // lấy danh sách bài viết theo danh mục
    const getDataBlog = () => {
        axios.get(`/api/getBlogByCate/${id}`)
            .then(function (response) {
                setBlogs(response.data);
                // console.log(response)
            });
    }
    // lấy danh sách danh mục
    const getCategory = () => {
        axios.get('/api/categoryblog')
            .then(function (response) {
                setCategory(response.data)
                // console.log(response.data)
            });
    }
    // lấy tên danh mục
    const getNameCate = () => {
        axios.get(`/api/categoryblog/${id}`)
            .then(function (response) {
                setnameCate(response.data)
                // console.log(response.data)
            });
    }
    //map cate
    const showCate = category.map((cate, index) => {
        return <li className="p-t-6 p-b-8 bo6" key={index}>
            <Link to={`/blogByCategory/${cate.id}`} className="s-text13 p-t-5 p-b-5">
                {cate.name_cate_blog}
            </Link>
        </li>

    })
    // map blogs
    const showBlog = blogs.map((blog, index) => {
        return <div className="p-r-50 p-r-0-lg" key={index}>
            <div className="item-blog p-b-80">
                <Link to={`/blogDetail/${blog.id}`} className="item-blog-img pos-relative dis-block hov-img-zoom">
                    <img src={blog.image} alt="IMG-BLOG" />

                </Link>
                <div className="item-blog-txt p-t-33">
                    <h4 className="p-b-11">
                        <Link to={`/blogDetail/${blog.id}`} className="m-text24">
                            {blog.title}
                        </Link>
                    </h4>
                    <p className="p-b-12">
                        {blog.description}
                    </p>
                    <p lassName="p-b-12">{blog.published}</p>
                    <Link to={`/blogDetail/${blog.id}`} className="s-text20">
                        Đọc Tiếp
<i className="fa fa-long-arrow-right m-l-8" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </div>
    })
    return (
        <div>
            {/* content page */}
            <section className="bgwhite p-t-60">
                <div className="container">
                    <div className="m-b-20">
                        <h4 style={{ color: 'red' }}> # {nameCate.name_cate_blog}</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-lg-9 p-b-75">
                            {showBlog}
                            {/* Pagination */}
                            <div className="pagination flex-m flex-w p-r-50">
                                <a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
                                <a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 p-b-75">
                            <div className="rightbar">
                                {/* Categories */}
                                <h4 className="m-text23 p-t-56 p-b-34">
                                    Danh Mục Bài Viết
                  </h4>
                                <ul>
                                    {showCate}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogByCategory
