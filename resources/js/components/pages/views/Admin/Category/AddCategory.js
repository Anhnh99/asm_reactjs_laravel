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
                    <label >Tên sản phẩm</label>
                    <input type="text"
                        className="form-control"
                        name="name"
                        ref={register({ required: true, minLength: 3 })} />
                    <span className="text-danger">
                        {errors.name && errors.name.type === "required" && ('Hãy nhập tên danh mục')}
                        {errors.name && errors.name.type === "minLength" && ('Hãy nhập tên danh mục ít nhất 3 ký tự')}
                        {/* {errors.name && errors.name.type === "pattern" && ('Tên danh mục không được chưa ký tự đặc biệt hoặc khoảng trống')} */}
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
