import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';

const Blog = ({ data }) => {
    const [posts, setPosts] = useState(data);
    // useEffect(() => {
    //     fetch('http://localhost:3000/api/blogs').then(res => res.json()).then(data => {
    //         setPosts(data);
    //     });
    // }, []);

    return <div className={styles.container}>
        <main className={styles.main}>
            {
                posts.map(post => {
                    return <div id={post.slug}>
                        <Link href={`/blogpost/${post.slug}`}>
                            <h2 className={styles.blogItemh3}>{post.title}</h2></Link>
                        <p className={styles.blogItemp}>{post.content.substr(0, 180)}...</p>
                    </div>
                })
            }
        </main>
    </div>
};

export async function getServerSideProps(context) {
    const res = await fetch('http://localhost:3000/api/blogs');
    const data = await res.json();
    // console.log(data);
    return {
        props: {
            data
        }
    }
}

export default Blog;