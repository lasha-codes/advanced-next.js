'use client'

import styles from './loginForm.module.css'
import { login } from '@/app/lib/action'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'
import { useEffect } from 'react'

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined)
  const router = useRouter()

  useEffect(() => {
    state?.success && router.push('/login')
  }, [state?.success, router])

  return (
    <form action={formAction} className={styles.form}>
      <input type='text' placeholder='username' name='username' />
      <input type='password' placeholder='password' name='password' />
      {state?.error}
      <button>Login</button>
      <Link href='/register'>
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  )
}

export default LoginForm
