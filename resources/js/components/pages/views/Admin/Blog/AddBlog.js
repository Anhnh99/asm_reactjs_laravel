import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom'
import axios from 'axios';
import swal from 'sweetalert';
import { Editor } from '@tinymce/tinymce-react';
import firebase from './../../../../firebase'

const AddBlog = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [categoryBlog, setCategoryBlog] = useState([]);
    const [content, setContent] = useState("");
    let history = useHistory();
    useEffect(() => {
        getCategoryBlog();
    }, [])
    //lấy danh mục Bài Viết
    const getCategoryBlog = () => {
        axios.get('/api/categoryblog')
            .then(function ({ data }) {
                setCategoryBlog(data);
                // console.log(data)
            });
    }
    // Show Cate Blog
    const showCategoryBlog = () => {
        return categoryBlog.map((category) => {
            return (
                <option key={category.id} value={category.id}>{category.name_cate_blog}</option>
            )
        })
    }
    // Lưu
    const onHandleSubmit = (blog) => {
        event.preventDefault();
        let file = blog.image[0];
        // tạo folder chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        let uploadTask = storageRef.put(file);
        // thực hiện việc đầy ảnh lên firebase
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED);
        firebase.storage().ref().child(`images/${file.name}`).getDownloadURL().then((url) => {
            const newBlog = {
                ...blog,
                content,
                image: url
            }
            axios.post('/api/blog', newBlog)
                .then(function ({ data }) {
                    swal("Đã thêm bài viết thành công", "Nhấn vào OK để quay lại", "success");
                    history.push('/admin/blogs')
                })
            // console.log(newBlog)
        })
    }
    //lưu Nội dung
    const handleEditorChange = (content, editor) => {
        setContent(content);
    }
    return (
        <div className="container" >
            <h1>Thêm Bài Viết</h1>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} >
                <div className="form-group">
                    <label >Danh mục Bài Viết</label>
                    <select
                        className="form-control"
                        name="id_cate_blog"
                        ref={register({ required: true })}>
                        <option>-----Hãy Chọn Danh Mục Cho Sản Phẩm-----</option>
                        {showCategoryBlog()}
                    </select>
                    <span className="text-danger">
                        {errors.id_cate_blog && errors.id_cate_blog.type === "required" && ('Hãy chọn danh mục cho sản phẩm')}
                    </span>
                </div>
                <div className="form-group">
                    <label >Tiêu Đề Bài Viết</label>
                    <input type="text"
                        className="form-control"
                        name="title"
                        ref={register({ required: true, minLength: 5, pattern: /^\S{1}.{0,100}$/i })} />
                    <span className="text-danger">
                        {errors.title && errors.title.type === "required" && ('Hãy nhập tên sản phẩm')}
                        {errors.title && errors.title.type === "minLength" && ('Hãy nhập tên sản phẩm ít nhất 5 ký tự')}
                        {errors.title && errors.title.type === "pattern" && ('Tên bài viết không được có khoảng trống đầu tiên')}
                    </span>
                </div>
                <div className="form-group">
                    <label >Ảnh Bài Viết</label>
                    <input type="file"
                        className="form-control"
                        name="image"
                        ref={register({ required: true })} />
                    <span className="text-danger">
                        {errors.image && errors.image.type === "required" && ('Hãy chọn ảnh sản phẩm')}
                    </span>
                </div>
                <div className="form-group">
                    <label >Mô tả Ngắn Nội Dung</label>
                    <textarea className="form-control"
                        name="description"
                        ref={register({ required: true })} rows="3"></textarea>
                    <span className="text-danger">
                        {errors.description && errors.description.type === "required" && ('Hãy nhập mô tả sản phẩm')}
                    </span>
                </div>
                <div className="form-group">
                    <label >Nội Dung</label>
                    <Editor
                        initialValue="<p>This is the initial content of the editor</p>"
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
                    />
                </div>


                <button className="btn btn-success" type="submit">Thêm</button>
                <Link to="/admin/blog" className="btn btn-danger">Hủy</Link>
            </form>
            <br />
        </div >
    )
}

export default AddBlog
