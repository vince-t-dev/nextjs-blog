import Link from 'next/link';
import Head from 'next/head';

export default function SecondPost() {
  return (
    <>
        <Head>
            <title>Second Post</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <article className="p-5">
                <h1>Second Post</h1>
                <p className="description">
                    Get started by editing <code>pages/index.js</code>
                </p>
                <Link href="/next-blog/first-post">
                    <a>Go to first post</a>
                </Link>
                <br/>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </article>
        </main>
    </>
  );
}