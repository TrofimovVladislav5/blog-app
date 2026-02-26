import styles from './Header.module.scss'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo__text}>Блог</Link>
        <div className={styles.menu}>
          <Link to="/articles" className={styles.menu__articles}>Статьи</Link>
          <Link to="/articles/new" className={styles.menu__write}>Написать пост</Link>
        </div>
        <Link to="/"></Link>
      </nav>
    </header>
  )
}

export default Header;