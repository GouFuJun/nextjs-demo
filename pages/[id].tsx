import Head from 'next/head'
import { getAllPostIds, getPostData  } from '../lib/posts'
import Date from '../components/date'

export default function Post({postData}: any) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div>
        <h1>{postData.title}</h1>
        <div className='text-gray-400'>
          <Date dateString={postData.date} />
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}