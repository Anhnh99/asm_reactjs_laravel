import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
const Category = () => {
    const [category, setCategory] = useState([])
    const [products, setProducts] = useState([])
    // lấy cate
    useEffect(() => {
        getCategory()
        getProduct()
    }, [])
    // lấy data cate
    const getCategory = () => {
        axios.get('/api/category')
            .then(function ({ data }) {
                setCategory(data);
            });
    }
    // lấy data products
    const getProduct = () => {
        axios.get('/api/product')
            .then(function (response) {
                setProducts(response.data);
            });
    }
    // lấy số lượng sp 
    const getCountProduct = (id) => {
        let count = 0
        for (let i = 0; i < products.length; i++) {
            if (products[i].category_id === id) {
                count++
            }
        }
        return count
    }
    // Xóa cate
    const removeCate = (id) => {
        swal({
            title: "Bạn có muốn xóa không?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`/api/category/${id}`)
                        .then(({ data }) => {
                            getCategory()
                            swal("Đã Xóa", "Nhấn vào OK để quay lại", "success");
                        })
                }

            })
    }
    // console.log(getCountProduct(1))
    console.log(products)
    const showCate = category.map((cate, index) => {
        return <tr key={index}>
            <td>{cate.id}</td>
            <td>{cate.name_cate}</td>
            <td>{cate.description}</td>
            <td>{getCountProduct(cate.id)}</td>
            <td><Link to={`/admin/category/edit/${cate.id}`} className="btn btn-warning">Sửa</Link>
                <button className="btn btn-danger" onClick={() => { removeCate(cate.id) }} >Xóa</button></td>
        </tr >
    })
    return (
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên Danh Mục</th>
                            <th>Mô Tả Danh Mục</th>
                            <th>Số Lượng Sản Phẩm</th>
                            <th><Link to="/admin/category/add" className="btn btn-success">Thêm</Link></th>
                        </tr>
                    </thead>
                    <tbody>
                        {showCate}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Category
