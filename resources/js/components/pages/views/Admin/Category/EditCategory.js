import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import swal from 'sweetalert';

const EditCategory = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [category, setCategory] = useState([])
    const { id } = useParams()
    //get cate mỗi lần render
    useEffect(() => {
        axios.get(`/api/category/${id}`)
            .then((respon) => {
                const getCate = respon.data
                setCategory(getCate)
            })
    }, [])

    const history = useHistory()
    //lưu new cate
    const onHandleSubmit = (data) => {
        // console.log(data)
        axios.put(`/api/category/${id}`, data)
            .then((response) => {
                swal("Đã sửa danh mục thành công", "Nhấn vào OK để quay lại", "success");
                history.push('/admin/category')
            })
    }
    return (
        <div className="container" >
            <h1>Sửa Danh Mục</h1>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label >Tên danh mục</label>
                    <input type="text"
                        className="form-control"
                        name="name"
                        defaultValue={category.name_cate}
                        ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,24}$/i })} />
                    <span className="text-danger">
                        {errors.name && errors.name.type === "required" && ('Hãy nhập tên danh mục')}
                        {errors.name && errors.name.type === "minLength" && ('Hãy nhập tên danh mục ít nhất 3 ký tự')}
                        {errors.name && errors.name.type === "pattern" && ('Tên danh mục không được chưa ký tự đặc biệt hoặc khoảng trống đầu tiên')}
                    </span>
                </div>
                <div className="form-group">
                    <label >Mô tả về danh mục</label>
                    <textarea className="form-control"
                        name="description"
                        defaultValue={category.description}
                        ref={register({ required: true })} rows="3"></textarea>
                    <span className="text-danger">
                        {errors.description && errors.description.type === "required" && ('Hãy nhập mô tả danh mục')}
                    </span>
                </div>

                <button className="btn btn-success" type="submit">Cập Nhật</button>
                <Link to="/admin/category" className="btn btn-danger">Hủy</Link>
            </form>
            <br />
        </div >
    )
}

export default EditCategory
