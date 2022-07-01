import Link from 'next/link';
import Head from 'next/head';

export default function FirstPost() {
  return (
    <>
        <Head>
            <title>First Post</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <article className="p-5">
                <h1>First Post</h1>
                <p className="description">
                    Get started by editing <code>pages/index.js</code>
                </p>
                <Link href="/posts/second-post">
                    <a>Go to second post</a>
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