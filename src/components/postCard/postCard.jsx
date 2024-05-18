import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/22674727/pexels-photo-22674727/free-photo-of-a-black-and-white-photo-of-a-church-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
            alt=''
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ut,
          libero exercitationem at praesentium ad doloribus itaque minus aut
          nam?
        </p>
        <Link className={styles.link} href='/blog/post'>
          READ MORE
        </Link>
      </div>
    </div>
  )
}

export default PostCard
