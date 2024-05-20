import { signIn, auth } from '@/app/lib/auth'
import { login } from '@/app/lib/action'

const LoginPage = async () => {
  const session = await auth()

  console.log(session)

  const handleGithubLogin = async () => {
    'use server'
    await signIn('github')
  }

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
      <form action={login}>
        <input type='text' placeholder='username' name='username' />
        <input type='password' placeholder='password' name='password' />
        <button>Login with Credentials</button>
      </form>
    </div>
  )
}

export default LoginPage
