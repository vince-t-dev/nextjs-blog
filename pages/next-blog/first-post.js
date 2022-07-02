import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
        <Head>
            <title>First Post</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <article>
                <h1>First Post</h1>
                <p className="description">
                    Get started by editing <code>pages/index.js</code>
                </p>
                <Link href="/next-blog/second-post">
                    <a>Go to second post</a>
                </Link>
            </article>
        </Layout>
    </>
  );
}