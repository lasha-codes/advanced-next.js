'use client'

import { useState } from 'react'
import style from './links.module.css'
import NavLink from './navLink/navLink'

const links = [
  { title: 'Homepage', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
  { title: 'Blog', path: '/blog' },
]

const Links = () => {
  const [open, setOpen] = useState(false)

  // temporary
  const session = true
  const isAdmin = true

  return (
    <div className={style.container}>
      <div className={style.links}>
        {links.map((link, idx) => {
          return <NavLink item={link} key={idx} />
        })}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            <button className={style.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: 'Login', path: '/login' }} />
        )}
      </div>
      <button
        className={style.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
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
