import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';


const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getDataProducts();
    }, []);
    // lấy danh sách sản phẩm và danh mục
    const getDataProducts = () => {
        axios.get('/api/getProCate')
            .then(function ({ data }) {
                setProducts(data);
                // console.log(data)
            });
    }
    // Xóa Pro
    const removePro = (id) => {
        swal({
            title: "Bạn có muốn xóa không?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`/api/product/${id}`)
                        .then(({ data }) => {
                            getDataProducts();
                            swal("Đã Xóa", "Nhấn vào OK để quay lại", "success");
                        })
                }

            })
    }
    // map pro
    const element = products.map((product, index) => {
        return <tr key={index}>
            <td>{product.name_cate}</td>
            <td>{product.name}</td>
            <td><img width={100} src={product.image}></img></td>
            <td>{product.price}</td>
            <td>{product.discount}</td>
            <td>{product.quantity}</td>
            <td><Link to={`/admin/product/edit/${product.id}`} className="btn btn-warning">Sửa</Link>
                <button className="btn btn-danger" onClick={() => { removePro(product.id) }}>Xóa</button></td>
        </tr >
    })
    const [valueSearch, setValueSearch] = useState("")
    const onHandleChange = (event) => {
        let valueSearch = event.target.value
        if (valueSearch == "") {
            getDataProducts()
        } else {
            axios.get(`/api/search/${valueSearch}`)
                .then(function (response) {
                    setProducts(response.data)
                    // console.log(response.data)
                });
        }


    }
    return (
        <div className="card-body">
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Tìm kiếm sản phẩm..."
                        aria-label="Search" aria-describedby="basic-addon2" name="product_search" onChange={onHandleChange} />
                    <div className="input-group-append">
                        {/* <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm" />
                        </button> */}
                        <Link to={`search/${valueSearch}`} className="btn btn-primar"><i className="fas fa-search fa-sm" /></Link>
                    </div>
                </div>
            </form>
            <div className="table-responsive mt-2">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>Danh Mục</th>
                            <th>Tên</th>
                            <th>Ảnh</th>
                            <th>Giá</th>
                            <th>Giá Giảm</th>
                            <th>Số Lượng</th>
                            <th><Link to="/admin/product/add" className="btn btn-success">Thêm</Link></th>
                        </tr>
                    </thead>
                    <tbody>
                        {element}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Product
