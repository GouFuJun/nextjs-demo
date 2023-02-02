import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ allPostsData }: any) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          
          <Link href="/about">About page!</Link>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <ul>
          {allPostsData.map(({ id, date, title }: any) => (
            <Link href={`/${id}`} key={id}>
               <li>
                <p className='font-bold'>{title}</p>
                <div className='text-gray-400'>
                  <Date dateString={date} />
                </div>
                <br />
              </li>
            </Link>
          ))}
        </ul>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
