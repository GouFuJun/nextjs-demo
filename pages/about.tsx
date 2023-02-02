import Link from 'next/link'
import Head from 'next/head'

export default function About() {
  return <>
  <Head>
    <title>About</title>
  </Head>
    <h1 className='text-red-300'>About</h1>
    <Link href="/">
      Back to home
    </Link>
  </>
}