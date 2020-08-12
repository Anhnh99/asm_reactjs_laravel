import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import { useForm } from "react-hook-form";
import firebase from './../../../../firebase'
import { Editor } from '@tinymce/tinymce-react';


const EditBlog = () => {
    const { register, handleSubmit, errors } = useForm();
    const [blog, setBlog] = useState({})
    const [categoryBlog, setCategoryBlog] = useState([])
    const [content, setContent] = useState(blog.content);
    const { id } = useParams()
    let history = useHistory()
    useEffect(() => {
        //gọi category blog
        getCategoryBlog()
        //gọi blog
        axios.get(`/api/blog/${id}`)
            .then((respon) => {
                const getBlog = respon.data
                setBlog(getBlog)
                // console.log(getBlog)
            })
    }, [])
    //get cate
    const getCategoryBlog = () => {
        axios.get('/api/categoryblog')
            .then(function ({ data }) {
                setCategoryBlog(data);
                // console.log(data)
            });
    }
    //show cate
    const showCategoryBlog = () => {
        return categoryBlog.map((category, index) => {
            return (
                <option key={index} value={category.id}>{category.name_cate_blog}</option>
            )
        })
    }
    const content_old = blog.content
    //lưu Nội dung
    const handleEditorChange = (content, editor) => {
        // setContent(content);
        if (content != "") {
            setContent(content)
        }
    }
    //update
    const onHandleSubmit = (blog) => {
        event.preventDefault()
        let file = blog.imageNew[0];
        if (file == undefined) {
            const newBlog1 = {
                ...blog,
                content,
            }
            axios.put(`/api/blog/${id}`, newBlog1)
                .then(function ({ data }) {
                    swal("Đã sửa bài viết thành công", "Nhấn vào OK để quay lại", "success");
                    history.push('/admin/blogs')
                })
            console.log(newBlog1)
        } else {
            // tạo folder chứa ảnh trên firesbase
            let storageRef = firebase.storage().ref(`images/${file.name}`);
            // đẩy ảnh lên đường dẫn trên
            let uploadTask = storageRef.put(file);
            // thực hiện việc đầy ảnh lên firebase
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED);
            firebase.storage().ref().child(`images/${file.name}`).getDownloadURL().then((url) => {
                const newBlog2 = {
                    ...blog,
                    content,
                    image: url
                }
                axios.put(`/api/blog/${id}`, newBlog2)
                    .then(function ({ data }) {
                        swal("Đã sửa bài viết thành công", "Nhấn vào OK để quay lại", "success");
                        history.push('/admin/blogs')
                    })
                console.log(newBlog2)
            })
        }

    }
    return (
        <div className="container" >
            <h1>Sửa Bài Viết</h1>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} >
                <div className="form-group">
                    <label >Danh mục Bài Viết</label>
                    <select
                        className="form-control"
                        name="id_cate_blog"
                        value={blog.id_cate_blog}
                        ref={register({ required: true })}>
                        {showCategoryBlog()}
                    </select>
                    <span className="text-danger">
                        {errors.id_cate_blog && errors.id_cate_blog.type === "required" && ('Hãy chọn danh mục cho bài viết')}
                    </span>
                </div>
                <div className="form-group">
                    <label >Tiêu Đề Bài Viết</label>
                    <input type="text"
                        className="form-control"
                        name="title"
                        defaultValue={blog.title}
                        ref={register({ required: true, minLength: 5, pattern: /^\S{1}.{0,100}$/i })} />
                    <span className="text-danger">
                        {errors.title && errors.title.type === "required" && ('Hãy nhập tên bài viết')}
                        {errors.title && errors.title.type === "minLength" && ('Hãy nhập tên bài viết ít nhất 5 ký tự')}
                        {errors.title && errors.title.type === "pattern" && ('Tên bài viết không được có khoảng trống đầu tiên')}
                    </span>
                </div>
                <div className="form-group" hidden>
                    <input type="text"
                        className="form-control"
                        name="image"
                        defaultValue={blog.image}
                        ref={register()} />
                </div>
                {/* hiển thi ảnh  */}
                <div className="form-group">
                    <label >Ảnh Bài Viết</label>
                    <img ref={register()} width={150} src={blog.image} />
                </div>
                <div className="form-group">
                    <input type="file"
                        className="form-control"
                        name="imageNew"
                        ref={register()} />
                </div>
                <div className="form-group">
                    <label >Mô tả Ngắn Nội Dung</label>
                    <textarea className="form-control"
                        name="description"
                        defaultValue={blog.description}
                        ref={register({ required: true })} rows="3"></textarea>
                    <span className="text-danger">
                        {errors.description && errors.description.type === "required" && ('Hãy nhập mô tả bài viết')}
                    </span>
                </div>
                {/* <div className="form-group" hidden>
                    <label >Mô tả Ngắn Nội Dung</label>
                    <textarea className="form-control"
                        name="content"
                        defaultValue={blog.content}
                        ref={register()} rows="3"></textarea>
                </div> */}
                <div className="form-group">
                    <label >Nội Dung</label>
                    <Editor
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                           alignleft aligncenter alignright alignjustify | \
                           bullist numlist outdent indent | removeformat | help'
                        }}
                        onEditorChange={handleEditorChange}
                        value={blog.content}

                    />
                </div>


                <button className="btn btn-success" type="submit">Cập Nhật</button>
                <Link to="/admin/blogs" className="btn btn-danger">Hủy</Link>
            </form>
            <br />
        </div >
    )
}

export default EditBlog
