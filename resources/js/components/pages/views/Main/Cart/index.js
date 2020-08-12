import React from 'react'

const Cart = () => {
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
                                    <th className="column-2">Product</th>
                                    <th className="column-3">Price</th>
                                    <th className="column-4 p-l-70">Quantity</th>
                                    <th className="column-5">Total</th>
                                </tr>
                                    <tr className="table-row">
                                        <td className="column-1">
                                            <div className="cart-img-product b-rad-4 o-f-hidden">
                                                <img src="images/item-10.jpg" alt="IMG-PRODUCT" />
                                            </div>
                                        </td>
                                        <td className="column-2">Men Tshirt</td>
                                        <td className="column-3">$36.00</td>
                                        <td className="column-4">
                                            <div className="flex-w bo5 of-hidden w-size17">
                                                <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                                                    <i className="fs-12 fa fa-minus" aria-hidden="true" />
                                                </button>
                                                <input className="size8 m-text18 t-center num-product" type="number" name="num-product1" defaultValue={1} />
                                                <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                                                    <i className="fs-12 fa fa-plus" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="column-5">$36.00</td>
                                    </tr>
                                    <tr className="table-row">
                                        <td className="column-1">
                                            <div className="cart-img-product b-rad-4 o-f-hidden">
                                                <img src="images/item-05.jpg" alt="IMG-PRODUCT" />
                                            </div>
                                        </td>
                                        <td className="column-2">Mug Adventure</td>
                                        <td className="column-3">$16.00</td>
                                        <td className="column-4">
                                            <div className="flex-w bo5 of-hidden w-size17">
                                                <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                                                    <i className="fs-12 fa fa-minus" aria-hidden="true" />
                                                </button>
                                                <input className="size8 m-text18 t-center num-product" type="number" name="num-product2" defaultValue={1} />
                                                <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                                                    <i className="fs-12 fa fa-plus" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="column-5">$16.00</td>
                                    </tr>
                                </tbody></table>
                        </div>
                    </div>
                    <div className="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm">
                        <div className="flex-w flex-m w-full-sm">

                        </div>
                        <div className="size10 trans-0-4 m-t-10 m-b-10">
                            {/* Button */}
                            <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                                Update Cart
                </button>
                        </div>
                    </div>
                    {/* Total */}
                    <div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
                        <h5 className="m-text20 p-b-24">
                            Cart Totals
              </h5>
                        {/*  */}
                        <div className="flex-w flex-sb-m p-t-26 p-b-30">
                            <span className="m-text22 w-size19 w-full-sm">
                                Total:
                </span>
                            <span className="m-text21 w-size20 w-full-sm">
                                $39.00
                </span>
                        </div>
                        <div className="size15 trans-0-4">
                            {/* Button */}
                            <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                                Proceed to Checkout
                </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart
