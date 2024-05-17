import Image from 'next/image'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/23451993/pexels-photo-23451993/free-photo-of-black-and-white-photo-of-two-people-standing-in-a-circular-room.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
          alt=''
          fill
        />
      </div>
    </div>
  )
}

export default AboutPage
