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
                    <label >Tên sản phẩm</label>
                    <input type="text"
                        className="form-control"
                        name="name"
                        defaultValue={category.name}
                        ref={register({ required: true, minLength: 3 })} />
                    <span className="text-danger">
                        {errors.name && errors.name.type === "required" && ('Hãy nhập tên danh mục')}
                        {errors.name && errors.name.type === "minLength" && ('Hãy nhập tên danh mục ít nhất 3 ký tự')}
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
