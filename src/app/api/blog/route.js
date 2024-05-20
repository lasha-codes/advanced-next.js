import { Post } from '@/app/lib/models'
import { connectToDb } from '@/app/lib/utils'
import { NextResponse } from 'next/server'

export const GET = async (request) => {
  try {
    connectToDb()

    const posts = await Post.find()
    return NextResponse.json(posts)
  } catch (err) {
    throw new Error('Failed to fetch posts!')
  }
}
