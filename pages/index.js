import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getSortedPostsData } from '../lib/posts';
// import utilStyles from '../styles/global.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Learn <Link href="./posts/first-blog">Next.js!</Link>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <img 
          src="/images/aaaa.jpg"
          height={144} 
          width={144}
          alt="Your Name" 
        />
        <br/>
        <Image
          src="/images/aaaa.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
          <section>
            <h2 >Blog</h2>
            <ul >
              {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                  {title}
                  <br />
                  {id}
                  <br />
                  {date}
                </li>
              ))}
            </ul>
          </section>
        </main>
    </div>
  )
}
