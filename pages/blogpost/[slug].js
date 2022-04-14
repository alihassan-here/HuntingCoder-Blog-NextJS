import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const slug = ({ data }) => {
    const [post, setPost] = useState(data);
    return <div className={styles.container}>
        <main className={styles.main}>
            <h1>{post?.title}</h1>
            <hr />
            <p>{post?.content}</p>
        </main>
    </div>;
};

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/getblog?slug=${context.query.slug}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

export default slug;