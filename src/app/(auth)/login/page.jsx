import { signIn, auth } from '@/app/lib/auth'

const LoginPage = async () => {
  const session = await auth()

  const handleGithubLogin = async () => {
    'use server'
    await signIn('github')
  }

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  )
}

export default LoginPage
