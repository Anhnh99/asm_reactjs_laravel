import React from 'react'
import { useForm } from 'react-hook-form'
import swal from 'sweetalert'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const Contact = () => {
    const { handleSubmit, register, errors, reset } = useForm();
    const history = useHistory();
    const onHandleSubmit = (data) => {
        swal({
            title: "Bạn có đồng ý gửi phản hồi này?",
            icon: "info",
            buttons: true,
            buttons: ["Hủy", "Đồng ý"]
        }).then((willAdd) => {
            if (willAdd) {
                axios.post('/api/contact', data)
                    .then(res => {
                        swal("Gửi phản hồi thành công!", {
                            icon: "success",
                            timer: 2000
                        });
                        reset({})
                        history.push('/contact');
                    })
            }
        });
    }
    return (
        <div>
            {/* content page */}
            <section className="bgwhite p-t-66 p-b-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 p-b-30">
                            <div className="p-r-20 p-r-0-lg">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59585.60356837701!2d105.75589420040647!3d21.028675465443147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5756f91033%3A0x576917442d674bfd!2zQ-G6p3UgR2nhuqV5LCBIYW5vaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1596992171201!5m2!1sen!2s" width={520} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                        </div>
                        <div className="col-md-6 p-b-30">
                            <form className="leave-comment" onSubmit={handleSubmit(onHandleSubmit)}>
                                <h4 className="m-text26 p-b-36 p-t-15">
                                    Liên hệ với chúng tôi
                  </h4>
                                <div className="bo4 of-hidden size15 m-b-20">
                                    <input className="sizefull s-text7 p-l-22 p-r-22"
                                        type="text"
                                        name="name_user"
                                        placeholder="Họ và Tên"
                                        ref={register({ required: true, minLength: 4 })} />

                                </div>
                                <span className="text-danger">
                                    {errors.name_user && errors.name_user.type === "required" && ('Hãy nhập tên của bạn')}
                                    {errors.name_user && errors.name_user.type === "minLength" && ('Họ và tên quá ngắn')}
                                </span>
                                <div className="bo4 of-hidden size15 m-b-20">
                                    <input className="sizefull s-text7 p-l-22 p-r-22" type="text"
                                        name="email"
                                        placeholder="Địa chỉ Email"
                                        ref={register({ required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })} />

                                </div>
                                <span className="text-danger">
                                    {errors.email && errors.email.type === "required" && ('Hãy nhập địa chỉ Email của bạn')}
                                    {errors.email && errors.email.type === "pattern" && ('Mời nhập email hợp lệ')}
                                </span>
                                <textarea className="dis-block s-text7 size20 bo4 p-l-22 p-r-22 p-t-13 m-b-20"
                                    name="message"
                                    placeholder="Nội dung"
                                    ref={register({ required: true, minLength: 2 })} />
                                <span className="text-danger">
                                    {errors.message && errors.message.type === "required" && ('Nội dung không được để trống')}
                                    {errors.message && errors.message.type === "minLength" && ('Nội dung quá ngắn')}
                                </span>
                                <div className="w-size25">
                                    {/* Button */}
                                    <button className="flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4" type="submit">
                                        Gửi
                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
