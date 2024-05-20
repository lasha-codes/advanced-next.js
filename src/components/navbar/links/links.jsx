'use client'

import { useState } from 'react'
import style from './links.module.css'
import NavLink from './navLink/navLink'
import { handleLogout } from '@/app/lib/action'
import Image from 'next/image'
import { auth } from '@/app/lib/auth'

const links = [
  { title: 'Homepage', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
  { title: 'Blog', path: '/blog' },
]

const Links = ({ session }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={style.container}>
      <div className={style.links}>
        {links.map((link, idx) => {
          return <NavLink item={link} key={idx} />
        })}
        {session?.user ? (
          <>
            {session.user.isAdmin && (
              <NavLink item={{ title: 'Admin', path: '/admin' }} />
            )}
            <form action={handleLogout}>
              <button className={style.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: 'Login', path: '/login' }} />
        )}
      </div>
      <Image
        src='/menu.png'
        alt=''
        width={30}
        height={30}
        className={style.menu}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={style.mobileLinks}>
          {links.map((link) => {
            return <NavLink item={link} key={link.title} />
          })}
        </div>
      )}
    </div>
  )
}

export default Links
