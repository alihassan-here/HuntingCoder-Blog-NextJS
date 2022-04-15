import React, { useState } from 'react'
import style from '../styles/Contact.module.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [desc, setDesc] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'phone') {
            setPhone(e.target.value);
        } else if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'desc') {
            setDesc(e.target.value);
        } else if (e.target.name === 'name') {
            setName(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, email, phone, desc }
        fetch('http://localhost:3000/api/postcontact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: JSON.stringify(data),
        })
            .then(() => {
                alert('Success!');
                setName('');
                setEmail('');
                setPhone('');
                setDesc('');
            })
            .catch(error => alert(error));
    }
    return (
        <div className={style.container}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className={style.mb3}>
                    <label htmlFor="name" className={style.formlabel}>Enter your name</label>
                    <input
                        value={name}
                        onChange={handleChange}
                        type="text" className={`form-control ${style.input}`} id="name"
                        name='name'
                        placeholder="Enter name" />
                </div>
                <div className={style.mb3}>
                    <label htmlFor="email" className={style.formlabel}>Email Address</label>
                    <input
                        value={email}
                        onChange={handleChange}
                        type="email" className={`form-control ${style.input}`} id="email"
                        name='email'
                        placeholder="email" />
                </div>
                <div className={style.mb3}>
                    <label htmlFor="phone" className={style.formlabel}>Phone</label>
                    <input
                        value={phone}
                        onChange={handleChange}
                        type="phone" className={`form-control ${style.input}`} id="phone"
                        name='phone'
                        placeholder="phone" />
                </div>
                <div className={style.mb3}>
                    <label className={style.formlabel} htmlFor="desc" >Concern</label>
                    <textarea
                        value={desc}
                        onChange={handleChange}
                        className={`form-control ${style.input}`} id="desc"
                        name='desc'
                        placeholder="Write your concern here"
                    />
                </div>
                <button type="submit" className={style.btn}>Submit</button>
            </form>
        </div>
    )
}

export default Contact;