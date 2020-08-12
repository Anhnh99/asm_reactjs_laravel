import React from 'react'

const Footer = () => {
    return (
        <footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
            <div className="flex-w p-b-90">
                <div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
                    <h4 className="s-text12 p-b-30">
                        Kết nối với chúng tôi
            </h4>
                    <div>
                        <div className="flex-m">
                            <a href="#" className="fs-18 color1 p-r-20 fa fa-facebook" />
                            <a href="#" className="fs-18 color1 p-r-20 fa fa-instagram" />
                            <a href="#" className="fs-18 color1 p-r-20 fa fa-pinterest-p" />
                            <a href="#" className="fs-18 color1 p-r-20 fa fa-snapchat-ghost" />
                            <a href="#" className="fs-18 color1 p-r-20 fa fa-youtube-play" />
                        </div>
                    </div>
                </div>
                <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
                    <h4 className="s-text12 p-b-30">
                        Danh Mục
            </h4>
                    <ul>
                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Men
                </a>
                        </li>
                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Women
                </a>
                        </li>
                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Dresses
                </a>
                        </li>
                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Sunglasses
                </a>
                        </li>
                    </ul>
                </div>
                <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
                    <h4 className="s-text12 p-b-30">
                        Liên Kết
            </h4>
                    <ul>
                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Search
                </a>
                        </li>
                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                About Us
                </a>
                        </li>
                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Contact Us
                </a>
                        </li>
                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Returns
                </a>
                        </li>
                    </ul>
                </div>
                <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
                    <h4 className="s-text12 p-b-30">
                        Hỗ Trợ
            </h4>
                    <ul>
                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Track Order
                </a>
                        </li>
                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Returns
                </a>
                        </li>
                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Shipping
                </a>
                        </li>
                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                FAQs
                </a>
                        </li>
                    </ul>
                </div>
                <div className="w-size8 p-t-30 p-l-15 p-r-15 respon3">
                    <h4 className="s-text12 p-b-30">
                        Bản Tin
            </h4>
                    <form>
                        <div className="effect1 w-size9">
                            <input className="s-text7 bg6 w-full p-b-5" type="text" name="email" placeholder="email@example.com" />
                            <span className="effect1-line" />
                        </div>
                        <div className="w-size2 p-t-20">
                            {/* Button */}
                            <button className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
                                Subscribe
                </button>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer

