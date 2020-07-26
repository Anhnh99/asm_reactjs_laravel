import React, { useState } from 'react'

const Product = () => {
    const [product, setProduct] = useState('')
    const handleChange = (event) => {
        setProduct(event.target.value)
    }
    return (
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>image</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {products.map((product, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{product.name}</td>
                            <td><img src={product.image} width={100} /></td>
                            <td>{product.price}</td>
                            <td><button className="btn btn-danger" onClick={() => { onHandleRemove(product.name) }}>Xóa</button><Link to={`/product/${product.id}`} className="btn btn-danger" >Detail</Link></td>

                        </tr>
                    )
                    )
                    } */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Product
