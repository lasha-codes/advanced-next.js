'use client'

import styles from './registerForm.module.css'
import { register } from '@/app/lib/action'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'
import { useEffect } from 'react'

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined)
  const router = useRouter()

  useEffect(() => {
    state?.success && router.push('/login')
  }, [state?.success, router])

  return (
    <form action={formAction} className={styles.form}>
      <input type='text' placeholder='username' name='username' />
      <input type='email' placeholder='email' name='email' />
      <input type='password' placeholder='password' name='password' />
      <input
        type='password'
        placeholder='password again'
        name='passwordRepeat'
      />
      {state?.error}
      <button>Register</button>
      <Link href='/login'>
        Have an account? <b>Login</b>
      </Link>
    </form>
  )
}

export default RegisterForm
