import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const [product, setProduct] = useState([]);
    const [blog, setBlog] = useState([]);
    const [contact, setContact] = useState([]);
    const callDataProduct = () => {
        axios.get('/api/product')
            .then(res => {
                setProduct(res.data)
            }).catch(err => console.log(err))
    }
    const callDataBlog = () => {
        axios.get('/api/blog')
            .then(res => {
                setBlog(res.data)
            }).catch(err => console.log(err))
    }
    const callDataContact = () => {
        axios.get('/api/contact')
            .then(res => {
                setContact(res.data)
            }).catch(err => console.log(err))
    }
    useEffect(() => {
        callDataProduct(), callDataBlog(), callDataContact()
    }, [])
    console.log(product)
    console.log(blog)
    return (
        <div class="row">
            {/* Earnings (Monthly) Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Tổng số sản phẩm</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{product.length}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-calendar fa-2x text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Earnings (Monthly) Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Tổng số bài viết</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{blog.length}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Earnings (Monthly) Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Phản hồi của khách hàng</div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{contact.length}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pending Requests Card Example */}
            {/* <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Requests</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-comments fa-2x text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Dashboard
