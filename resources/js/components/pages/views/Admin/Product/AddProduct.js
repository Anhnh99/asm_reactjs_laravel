import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom'
import axios from 'axios';
import swal from 'sweetalert';
const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    // const [product, setProduct] = useState({})
    const [category, setCategory] = useState([]);
    useEffect(() => {
        getCategory();
    }, [])

    //lấy danh mục sp
    const getCategory = () => {
        axios.get('/api/category')
            .then(function ({ data }) {
                setCategory(data);
            });
    }

    let history = useHistory();
    const onHandleSubmit = (product) => {
        event.preventDefault();
        axios.post('/api/product', product)
            .then(function ({ data }) {
                swal("Đã thêm sản phẩm thành công", "Nhấn vào OK để quay lại", "success");
                history.push('/admin/products')
            })
    }
    const showCategory = () => {
        return category.map((category) => {
            return (
                <option key={category.id} value={category.id}>{category.name}</option>
            )
        })
    }
    return (
        <div className="container" >
            <h1>Thêm Sản Phẩm</h1>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label >Danh mục sản phẩm</label>
                    <select
                        className="form-control"
                        name="category_id"
                        ref={register}>
                        {showCategory()}
                    </select>
                </div>
                <div className="form-group">
                    <label >Tên sản phẩm</label>
                    <input type="text"
                        className="form-control"
                        name="name"
                        ref={register({ required: true, minLength: 5 })} />
                    <span className="text-danger">
                        {errors.name && errors.name.type === "required" && ('Hãy nhập tên sản phẩm')}
                        {errors.name && errors.name.type === "minLength" && ('Hãy nhập tên sản phẩm ít nhất 5 ký tự')}
                    </span>

                </div>
                <div className="form-group">
                    <label >URL ảnh sản phẩm</label>
                    <input type="text"
                        className="form-control"
                        name="image"
                        ref={register({ required: true })} />
                    <span className="text-danger">
                        {errors.image && errors.image.type === "required" && ('Hãy nhập URL ảnh sản phẩm')}
                    </span>
                </div>
                <div className="form-group">
                    <label >Giá sản phẩm</label>
                    <input type="number"
                        className="form-control"
                        name="price"
                        ref={register({ required: true, min: 0 })} />
                    <span className="text-danger">
                        {errors.price && errors.price.type === "required" && ('Hãy nhập giá sản phẩm')}
                        {errors.price && errors.price.type === "min" && ('Hãy nhập giá sản phẩm ít nhất là 0')}
                    </span>
                </div>
                <div className="form-group">
                    <label >Giá đã giảm sản phẩm</label>
                    <input type="number"
                        className="form-control"
                        name="discount"
                        ref={register({ required: true, min: 0 })} />
                    <span className="text-danger">
                        {errors.discount && errors.discount.type === "required" && ('Hãy nhập giá đã giảm sản phẩm')}
                        {errors.discount && errors.discount.type === "min" && ('Hãy nhập giá giảm sản phẩm ít nhất là 0')}
                    </span>
                </div>
                <div className="form-group">
                    <label >Số lượng sản phẩm</label>
                    <input type="number"
                        className="form-control"
                        name="quantity"
                        ref={register({ required: true, min: 1 })} />
                    <span className="text-danger">
                        {errors.quantity && errors.quantity.type === "required" && ('Hãy nhập số lượng sản phẩm')}
                        {errors.quantity && errors.quantity.type === "min" && ('Hãy nhập số lượng sản phẩm ít nhất là 1')}
                    </span>
                </div>
                <div className="form-group">
                    <label >Mô tả về sản phẩm</label>
                    <textarea className="form-control"
                        name="description"
                        ref={register({ required: true })} rows="3"></textarea>
                    <span className="text-danger">
                        {errors.description && errors.description.type === "required" && ('Hãy nhập mô tả sản phẩm')}
                    </span>
                </div>


                <button className="btn btn-success" type="submit">Thêm</button>
                <Link to="/admin/products" className="btn btn-danger">Hủy</Link>
            </form>
            <br />
        </div >
    )
}

export default AddProduct
