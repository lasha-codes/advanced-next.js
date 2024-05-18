import Image from 'next/image'
import styles from './singlePost.module.css'

const SinglePostPage = () => {
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
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}></div>
        <Image
          className={styles.avatar}
          src={
            'https://images.pexels.com/photos/22674727/pexels-photo-22674727/free-photo-of-a-black-and-white-photo-of-a-church-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
          }
          alt=''
          width={50}
          height={50}
        />
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>Terry Jefferson</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>01.01.2024</span>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          placeat odit eveniet dolore ducimus accusamus architecto tempora at,
          libero blanditiis sequi, esse error nulla omnis fugiat, unde aperiam
          dolores est?
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage
