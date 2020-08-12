import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import { useForm } from "react-hook-form";
import firebase from './../../../../firebase'

const EditProduct = () => {
    const { register, handleSubmit, errors } = useForm();
    const [product, setProduct] = useState({})
    const [category, setCategory] = useState([])
    const { id } = useParams()
    useEffect(() => {
        //gọi category
        getCategory()
        //gọi product
        axios.get(`/api/product/${id}`)
            .then((respon) => {
                const getProduct = respon.data
                setProduct(getProduct)
                // console.log(getProduct)
            })
    }, [])
    //get cate
    const getCategory = () => {
        axios.get('/api/category')
            .then(function ({ data }) {
                setCategory(data);
            });
    }
    //show cate
    const showCategory = () => {
        return category.map((category, index) => {
            return (
                <option key={index} value={category.id}>{category.name_cate}</option>
            )
        })
    }
    let history = useHistory()
    //update
    const onHandleSubmit = (product) => {
        event.preventDefault()
        let file = product.imageNew[0];
        if (file == undefined) {
            axios.put(`/api/product/${id}`, product)
                .then(function ({ data }) {
                    swal("Đã sửa sản phẩm thành công", "Nhấn vào OK để quay lại", "success");
                    history.push('/admin/products')
                })
        } else {
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
                axios.put(`/api/product/${id}`, newPro)
                    .then(function ({ data }) {
                        swal("Đã sửa sản phẩm thành công", "Nhấn vào OK để quay lại", "success");
                        history.push('/admin/products')
                    })
            })
        }

    }
    return (
        <div className="container" >
            <h1>Sửa Sản Phẩm</h1>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group" hidden>
                    <label >ID</label>
                    <input type="text"
                        className="form-control"
                        name="id"
                        defaultValue={product.id} />
                </div>
                <div className="form-group">
                    <label >Danh mục sản phẩm</label>
                    <select
                        className="form-control"
                        name="category_id"
                        value={product.category_id}
                        ref={register}>
                        {showCategory()}

                    </select>
                </div>
                <div className="form-group">
                    <label >Tên sản phẩm</label>
                    <input type="text"
                        className="form-control"
                        name="name"
                        defaultValue={product.name}
                        ref={register({ required: true, minLength: 5, pattern: /^\S{1}.{0,200}$/i })}
                    />
                    <span className="text-danger">
                        {errors.name && errors.name.type === "required" && ('Hãy nhập tên sản phẩm')}
                        {errors.name && errors.name.type === "minLength" && ('Hãy nhập tên sản phẩm ít nhất 5 ký tự')}
                        {errors.name && errors.name.type === "pattern" && ('Tên sản phẩm không được có khoảng trống đầu tiên')}
                    </span>
                </div>
                <div className="form-group" hidden>
                    <input type="text"
                        className="form-control"
                        name="image"
                        defaultValue={product.image}
                        ref={register()} />
                </div>
                {/* hiển thi ảnh  */}
                <div className="form-group">
                    <label >Ảnh sản phẩm</label>
                    <img ref={register()} width={150} src={product.image} />
                </div>
                <div className="form-group">
                    <input type="file"
                        className="form-control"
                        name="imageNew"
                        ref={register()} />
                </div>

                <div className="form-group">
                    <label >Giá sản phẩm</label>
                    <input type="number"
                        className="form-control"
                        name="price"
                        defaultValue={product.price}
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
                        defaultValue={product.discount}
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
                        defaultValue={product.quantity}
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
                        defaultValue={product.description}
                        ref={register({ required: true })} rows="3"></textarea>
                    <span className="text-danger">
                        {errors.description && errors.description.type === "required" && ('Hãy nhập mô tả sản phẩm')}
                    </span>
                </div>


                <button className="btn btn-success" type="submit">Cập Nhật</button>
                <Link to="/admin/products" className="btn btn-danger">Hủy</Link>
            </form>
            <br />
        </div >
    )
}
export default EditProduct
