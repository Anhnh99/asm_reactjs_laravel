import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        getDataBlogs();
    }, []);
    // lấy danh sách Bài Viết và danh mục
    const getDataBlogs = () => {
        axios.get('/api/getBlogCate')
            .then(function ({ data }) {
                setBlogs(data);
                // console.log(data)
            });
    }
    // Show danh sách
    const element = blogs.map((blog, index) => {
        return <tr key={index}>
            <td>{blog.name_cate_blog}</td>
            <td>{blog.title}</td>
            <td><img width={100} src={blog.image}></img></td>
            <td>{blog.description}</td>
            <td>{blog.published}</td>
            <td><Link to={`/admin/blog/edit/${blog.id}`} className="btn btn-warning">Sửa</Link>
                <button className="btn btn-danger" onClick={() => { removeBlog(blog.id) }}>Xóa</button></td>
        </tr >
    })
    // Xóa bài viết
    const removeBlog = (id) => {
        swal({
            title: "Bạn có muốn xóa không?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`/api/blog/${id}`)
                        .then(({ data }) => {
                            getDataBlogs();
                            swal("Đã Xóa", "Nhấn vào OK để quay lại", "success");
                        })
                }

            })
    }
    return (
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>Danh Mục</th>
                            <th>Tiêu Đề</th>
                            <th>Ảnh</th>
                            <th>Mô Tả Nội Dung</th>
                            <th>Ngày Đăng</th>
                            <th><Link to="/admin/blog/add" className="btn btn-success">Thêm</Link></th>
                        </tr>
                    </thead>
                    <tbody>
                        {element}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Blog
