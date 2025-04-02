import styles from './style.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; {new Date().getFullYear()} | Todos os direitos reservados.</p>
        <p>
          Desenvolvido por @
          <a
            href={'https://www.linkedin.com/in/vaz-fernanda/'}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
          >
            Fernanda Vaz
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
