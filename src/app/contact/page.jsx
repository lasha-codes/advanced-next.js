import dynamic from 'next/dynamic'
import styles from './contact.module.css'
import Image from 'next/image'

const HydrationTestNoSSR = dynamic(() => import('@/components/HydrationTest'))

export const metadata = {
  title: 'Contact Page',
  description: 'Contact description',
}

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/contact.png' alt='' fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type='text' placeholder='Name and Surname' />
          <input type='text' placeholder='Email Address' />
          <input type='text' placeholder='Phone Number (Optional)' />
          <textarea cols='30' rows='10' placeholder='Message'></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
