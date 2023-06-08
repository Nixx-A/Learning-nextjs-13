import Link from 'next/link'
import styles from '../styles/Header.module.css'

const navigation = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/posts',
    name: 'posts'
  }
]

export function Header () {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.listContainer}>
          {navigation.map((nav) => (
            <Link key={nav.name} href={nav.path}>{nav.name}</Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}
