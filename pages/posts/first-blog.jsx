
import Link from 'next/link'
import React from 'react'
import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image'
import Blog_content from './blog_content';

export default function firstblog() {
  return (
    <>
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
        <Link href="/">
          <Image
            src="/images/aaaa.jpg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </Link>
        <h1>React Blog</h1>
      <h2>
        <Blog_content />
      </h2>
    </Layout>
    </>
  )
}
