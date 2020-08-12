import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom'
import axios from 'axios';
import swal from 'sweetalert';

const AddCategory = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const history = useHistory();
    const onHandleSubmit = (data) => {
        axios.post('/api/category', data)
            .then((response) => {
                swal("Đã thêm danh mục thành công", "Nhấn vào  để quay lại", "success");
                history.push('/admin/category')
            })
    }
    return (
        <div className="container" >
            <h1>Thêm Danh Mục</h1>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}  >

                <div className="form-group">
                    <label >Tên danh mục</label>
                    <input type="text"
                        className="form-control"
                        name="name_cate"
                        ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,24}$/i })} />
                    <span className="text-danger">
                        {errors.name_cate && errors.name_cate.type === "required" && ('Hãy nhập tên danh mục')}
                        {errors.name_cate && errors.name_cate.type === "minLength" && ('Hãy nhập tên danh mục ít nhất 3 ký tự')}
                        {errors.name_cate && errors.name_cate.type === "pattern" && ('Tên danh mục không được chưa ký tự đặc biệt hoặc khoảng trống đầu tiên')}
                    </span>

                </div>
                <div className="form-group">
                    <label >Mô tả về danh mục</label>
                    <textarea className="form-control"
                        name="description"
                        ref={register({ required: true })} rows="3"></textarea>
                    <span className="text-danger">
                        {errors.description && errors.description.type === "required" && ('Hãy nhập mô tả danh mục')}
                    </span>
                </div>

                <button className="btn btn-success" type="submit">Thêm</button>
                <Link to="/admin/category" className="btn btn-danger">Hủy</Link>
            </form>
            <br />
        </div >
    )
}

export default AddCategory
