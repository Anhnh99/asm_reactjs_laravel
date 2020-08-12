import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Contact = () => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getDataContacts();
    }, []);
    // lấy danh sách sản phẩm và danh mục
    const getDataContacts = () => {
        axios.get('/api/contact')
            .then(function ({ data }) {
                setContacts(data);
                // console.log(data)
            });
    }
    // show
    const showContact = contacts.map((contact, index) => {
        return <tr key={index}>
            <td>{contact.id}</td>
            <td>{contact.name_user}</td>
            <td>{contact.email}</td>
            <td>{contact.message}</td>
            <td>{contact.date}</td>
        </tr >
    })
    return (
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Họ và Tên</th>
                            <th>Email</th>
                            <th>Nội Dung</th>
                            <th>Ngày Gửi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showContact}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Contact
