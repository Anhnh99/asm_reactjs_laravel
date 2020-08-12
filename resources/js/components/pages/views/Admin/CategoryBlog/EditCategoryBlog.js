import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom'
import axios from 'axios';
import swal from 'sweetalert';

const EditCategoryBlog = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [categoryBlog, setCategoryBlog] = useState([])
    const { id } = useParams()
    const history = useHistory()
    //get cate mỗi lần render
    useEffect(() => {
        axios.get(`/api/categoryblog/${id}`)
            .then((respon) => {
                const getCate = respon.data
                setCategoryBlog(getCate)
            })
    }, [])
    //lưu new cate
    const onHandleSubmit = (data) => {
        // console.log(data)
        axios.put(`/api/categoryblog/${id}`, data)
            .then((response) => {
                swal("Đã sửa danh mục thành công", "Nhấn vào OK để quay lại", "success");
                history.push('/admin/cate_blog')
            })
    }

    return (
        <div className="container" >
            <h1>Sửa Danh Mục </h1>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} >
                <div className="form-group">
                    <label >Tên danh mục Bài Viết</label>
                    <input type="text"
                        className="form-control"
                        name="name_cate_blog"
                        defaultValue={categoryBlog.name_cate_blog}
                        ref={register({ required: true, minLength: 3 })}
                    />
                    <span className="text-danger">
                        {errors.name_cate_blog && errors.name_cate_blog.type === "required" && ('Hãy nhập tên danh mục')}
                        {errors.name_cate_blog && errors.name_cate_blog.type === "minLength" && ('Hãy nhập tên danh mục ít nhất 3 ký tự')}
                        {/* {errors.name && errors.name.type === "pattern" && ('Tên danh mục không được chưa ký tự đặc biệt hoặc khoảng trống')} */}
                    </span>

                </div>
                <div className="form-group">
                    <label >Mô tả về danh mục Bài Viết</label>
                    <textarea className="form-control"
                        name="description"
                        defaultValue={categoryBlog.description}
                        ref={register({ required: true })}
                        rows="3"></textarea>
                    <span className="text-danger">
                        {errors.description && errors.description.type === "required" && ('Hãy nhập mô tả danh mục')}
                    </span>
                </div>

                <button className="btn btn-success" type="submit">Cập Nhật</button>
                <Link to="/admin/cate_blog" className="btn btn-danger">Hủy</Link>
            </form>
            <br />
        </div >
    )
}

export default EditCategoryBlog
