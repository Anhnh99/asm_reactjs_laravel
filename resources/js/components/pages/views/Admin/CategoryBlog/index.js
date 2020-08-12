import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CategoryBlog = () => {
    const [categoryBlog, setCategoryBlog] = useState([])

    useEffect(() => {
        getCategoryBlog()
    }, [])
    // lấy data cate
    const getCategoryBlog = () => {
        axios.get('/api/categoryblog')
            .then(function ({ data }) {
                setCategoryBlog(data);
            });
    }
    //show cate
    const showCateBlog = categoryBlog.map((cate, index) => {
        return <tr key={index}>
            <td>{cate.id}</td>
            <td>{cate.name_cate_blog}</td>
            <td>{cate.description}</td>
            <td><Link to={`/admin/cate_blog/edit/${cate.id}`} className="btn btn-warning">Sửa</Link>
                <button className="btn btn-danger" onClick={() => { removeCate(cate.id) }} >Xóa</button></td>
        </tr >
    })
    //xóa cate
    const removeCate = (id) => {

        swal({
            title: "Bạn có muốn xóa không?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`/api/categoryblog/${id}`)
                        .then(({ data }) => {
                            getCategoryBlog()
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
                            <th>ID</th>
                            <th>Tên Danh Mục Bài Viết</th>
                            <th>Mô Tả</th>
                            <th><Link to="/admin/cate_blog/add" className="btn btn-success">Thêm</Link></th>
                        </tr>
                    </thead>
                    <tbody>
                        {showCateBlog}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CategoryBlog
