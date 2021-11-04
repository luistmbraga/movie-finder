
import styles from '../styles/Home.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
        <a>
          Powered by{' '}
          <span className={styles.logo} style={{fontWeight: "bold"}}>
            TMT OLX Group
          </span>
        </a>
      </footer>
    )
}

export default Footer;