import { getUser } from '@/app/lib/data'
import styles from './postUser.module.css'
import Image from 'next/image'

// const getData = async (userId) => {
//   const res = await fetch(
// `https://jsonplaceholder.typicode.com/users/${userId}`
//   )

//   if (!res.ok) {
// throw new Error('Something went wrong')
//   }

//   return res.json()
// }

const PostUser = async ({ userId }) => {
  const user = await getUser(userId)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.avatar}
          src={user.avatar || '/noavatar.png'}
          alt=''
          width={50}
          height={50}
        />
      </div>
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>
          {user ? user.username : 'Guest'}
        </span>
      </div>
    </div>
  )
}

export default PostUser
