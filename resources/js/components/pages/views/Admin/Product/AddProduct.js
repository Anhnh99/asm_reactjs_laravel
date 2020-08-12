import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom'
import axios from 'axios';
import swal from 'sweetalert';
import firebase from './../../../../firebase'

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
        let file = product.image[0];
        // tạo folder chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        let uploadTask = storageRef.put(file);
        // thực hiện việc đầy ảnh lên firebase
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED);
        firebase.storage().ref().child(`images/${file.name}`).getDownloadURL().then((url) => {
            const newPro = {
                ...product,
                image: url
            }
            axios.post('/api/product', newPro)
                .then(function ({ data }) {
                    swal("Đã thêm sản phẩm thành công", "Nhấn vào OK để quay lại", "success");
                    history.push('/admin/products')
                })
        })
    }
    const showCategory = () => {
        return category.map((category, index) => {
            return (
                <option key={category.id} value={category.id}>{category.name_cate}</option>
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
                        ref={register({ required: true })}>
                        <option>-----Hãy Chọn Danh Mục Cho Sản Phẩm-----</option>
                        {showCategory()}
                    </select>
                    <span className="text-danger">
                        {errors.category_id && errors.category_id.type === "required" && ('Hãy chọn danh mục cho sản phẩm')}
                    </span>
                </div>
                <div className="form-group">
                    <label >Tên sản phẩm</label>
                    <input type="text"
                        className="form-control"
                        name="name"
                        ref={register({ required: true, minLength: 5, pattern: /^\S{1}.{0,100}$/i })} />
                    <span className="text-danger">
                        {errors.name && errors.name.type === "required" && ('Hãy nhập tên sản phẩm')}
                        {errors.name && errors.name.type === "minLength" && ('Hãy nhập tên sản phẩm ít nhất 5 ký tự')}
                        {errors.name && errors.name.type === "pattern" && ('Tên sản phẩm không được có khoảng trống đầu tiên')}
                    </span>
                </div>
                <div className="form-group">
                    <label >Ảnh sản phẩm</label>
                    <input type="file"
                        className="form-control"
                        name="image"
                        ref={register({ required: true })} />
                    <span className="text-danger">
                        {errors.image && errors.image.type === "required" && ('Hãy chọn ảnh sản phẩm')}
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
