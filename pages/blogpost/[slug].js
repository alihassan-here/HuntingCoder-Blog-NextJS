import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css';
import * as fs from 'fs';

const Slug = ({ data }) => {
    function createMarkup(c) {
        return { __html: c };
    }

    const [post, setPost] = useState(data);
    return <div className={styles.container}>
        <main className={styles.main}>
            <h1>{post?.title}</h1>
            <hr />
            {post && <div dangerouslySetInnerHTML={createMarkup(post.content)}></div>}

        </main>
    </div>;
};

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'how-to-learn-flask' } },
            { params: { slug: 'how-to-learn-javascript' } },
            { params: { slug: 'how-to-learn-nextjs' } },
        ],
        fallback: true // false or 'blocking'
    };
}

export async function getStaticProps(context) {
    const { slug } = context.params;
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
    return {
        props: { data: JSON.parse(myBlog) }
    }

}

export default Slug;