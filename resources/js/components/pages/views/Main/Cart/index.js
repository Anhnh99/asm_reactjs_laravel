import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { deleteCart, updateCart } from "../../../../actions/cart";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const carts = cart.cart
    const showCart = carts.map((cart, index) => {
        return <tr className="table-row" key={index}>
            <td className="column-1">
                <div className="cart-img-product b-rad-4 o-f-hidden">
                    <img src={cart.image} alt="IMG-PRODUCT" />
                </div>
            </td>
            <td className="column-2">{cart.name}</td>
            <td className="column-3">{cart.price}</td>
            <td className="column-4">
                <div className="flex-w bo5 of-hidden w-size17">
                    <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2" onClick={() => dispatch(updateCart(cart.id, -1))}>
                        <i className="fs-12 fa fa-minus" aria-hidden="true" />
                    </button>
                    <input className="size8 m-text18 t-center num-product" type="number" name="num-product1" value={cart.quantity} />
                    <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2" onClick={() => dispatch(updateCart(cart.id, 1))}>
                        <i className="fs-12 fa fa-plus" aria-hidden="true" />
                    </button>
                </div>
            </td>
            <td className="column-5">{cart.price}</td>
            <td className="column-6"><button onClick={() => deleteItem(cart)} className="btn btn-danger">X</button></td>
        </tr>
    })
    // thêm vào giỏ hàng
    const deleteItem = (cart) => {
        swal({
            title: "Bạn có chắc muốn xóa?",
            text: "Sản phẩm sẽ bị xóa khỏi giỏ hàng",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Hoàn thành", {
                        icon: "success",
                    });
                    dispatch(deleteCart(cart.id));
                } else {
                    swal("Chưa xóa sản phẩm!");
                }
            });
    }
    return (
        <div>

            {/* Cart */}
            <section className="cart bgwhite p-t-70 p-b-100">
                <div className="container">
                    {/* Cart item */}
                    <div className="container-table-cart pos-relative">
                        <div className="wrap-table-shopping-cart bgwhite">
                            <table className="table-shopping-cart">
                                <tbody><tr className="table-head">
                                    <th className="column-1" />
                                    <th className="column-2">Sản Phẩm</th>
                                    <th className="column-3">Giá</th>
                                    <th className="column-4 p-l-70">Số Lượng</th>
                                    <th className="column-5">Tổng Giá</th>
                                    <th className="column-5">Xóa</th>
                                </tr>
                                    {showCart}
                                </tbody></table>
                        </div>
                    </div>

                    {/* Total */}
                    <div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">

                        {/*  */}
                        <div className="flex-w flex-sb-m p-t-26 p-b-30">
                            <span className="m-text22 w-size19 w-full-sm">
                                Tổng Tiền Trong Giỏ:
                </span>
                            <span className="m-text21 w-size20 w-full-sm">
                                {cart.total} vnđ
                            </span>
                        </div>
                        <div className="size15 trans-0-4">
                            {/* Button */}
                            <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                                Thanh Toán
                </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart;
