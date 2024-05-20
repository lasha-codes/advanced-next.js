'use server'

import { connectToDb } from './utils'
import { Post, User } from './models'
import { revalidatePath } from 'next/cache'
import { signIn, signOut } from './auth'
import bcrypt from 'bcryptjs'

export const addPost = async (formData) => {
  //   const title = formData.get('title')
  //   const desc = formData.get('desc')
  //   const slug = formData.get('slug')]

  const { title, desc, slug, userId } = Object.fromEntries(formData)

  try {
    connectToDb()
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    })

    await newPost.save()
    console.log('saved to db')
    revalidatePath('/blog')
  } catch (err) {
    console.log(err)
    return { error: 'Something went wrong!' }
  }
}

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    connectToDb()

    await Post.findByIdAndDelete(id)
    console.log('deleted post from the db')
    revalidatePath('/blog')
  } catch (err) {
    console.log(err)
    return { error: 'Something went wrong!' }
  }
}

export const handleLogout = async () => {
  'use server'
  await signOut()
}

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData)

  if (password !== passwordRepeat) {
    return { error: 'Passwords do not match' }
  }

  try {
    connectToDb()

    const user = await User.findOne({ username })

    if (user) {
      return { error: 'User already exists!' }
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    })

    await newUser.save()
    console.log('saved to the db')

    return { success: true }
  } catch (err) {
    console.log(err)
    return { error: 'Something went wrong!' }
  }
}

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData)

  try {
    await signIn('credentials', { username, password })
  } catch (err) {
    if (err.message.includes('Read more at')) {
      return { error: 'Invalid username or password' }
    }
    return { error: 'Something went wrong' }
  }
}
