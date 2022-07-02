import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function SecondPost() {
  return (
    <>
        <Head>
            <title>Second Post</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <article>
                <h1>Second Post</h1>
                <p className="description">
                    Get started by editing <code>pages/index.js</code>
                </p>
                <Link href="/next-blog/first-post">
                    <a>Go to first post</a>
                </Link>
            </article>
        </Layout>
    </>
  );
}