import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';


const Blog = ({ allBlogs }) => {
    const [posts, setPosts] = useState(allBlogs);
    const fetchData = () => {
        setTimeout(() => {

        }, 1500)
    }

    return <div className={styles.container}>
        <main className={styles.main}>

            <InfiniteScroll
                dataLength={posts.length} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {
                    posts.map((post, id) => {
                        return <div id={id}>
                            <Link href={`/blogpost/${post.slug}`}>
                                <h2 className={styles.blogItemh3}>{post.title}</h2></Link>
                            <p className={styles.blogItemp}>{post.metadesc.substr(0, 140)}...</p>

                        </div>
                    })
                }
            </InfiniteScroll>



        </main>
    </div>
};



export async function getStaticProps(context) {
    let data = await fs.promises.readdir("blogdata");
    let myfile;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        console.log(item)
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }

    return {
        props: { allBlogs }, // will be passed to the page component as props
    }
}

export default Blog;