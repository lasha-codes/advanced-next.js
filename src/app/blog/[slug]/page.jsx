import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/postUser'
import { Suspense } from 'react'
import { getPost } from '@/app/lib/data'

const SinglePostPage = async ({ params, searchParams }) => {
  // const getData = async () => {
  // const res = await fetch(
  // `https://jsonplaceholder.typicode.com/posts/${params.slug}`,
  // {}
  // )

  // if (!res.ok) {
  // throw new Error('Something went wrong')
  // }

  // return res.json()
  // }
  const post = await getPost(parseInt(params.slug))

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            'https://images.pexels.com/photos/22674727/pexels-photo-22674727/free-photo-of-a-black-and-white-photo-of-a-church-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
          }
          alt=''
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src={
              'https://images.pexels.com/photos/22674727/pexels-photo-22674727/free-photo-of-a-black-and-white-photo-of-a-church-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
            }
            alt=''
            width={50}
            height={50}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={params.slug} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  )
}

export default SinglePostPage
