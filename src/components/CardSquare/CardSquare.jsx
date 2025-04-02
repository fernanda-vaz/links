import { motion } from 'motion/react'
import { Link, OpenFolder, WebIcon } from '../ui/icons'
import styles from './style.module.css'

const transition = {
  duration: 0.5,
  delay: 0.2,
  ease: [0, 0.71, 0.2, 1.01],
}

const CardSquare = () => {
  const items = [
    {
      title: 'Meu\nPortfólio',
      icons: [<WebIcon key='web' />, <Link key='link1' />],
      href: 'https://fernanda-vaz.github.io/portfolio/',
    },
    {
      title: 'Alguns\nProjetos',
      icons: [<OpenFolder key='folder' />, <Link key='link2' />],
      href: 'https://fernanda-vaz.github.io/portfolio/#projects',
    },
  ]

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 + index * 0.3 }}
          whileHover={{
            y: -10,
            scale: 1.03,
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <a href={item.href} target='_blank' rel='noopener noreferrer'>
            <div className={styles.card}>
              <div className={styles.content}>
                <div className={styles.icons}>{item.icons}</div>
                <div className={styles.title}>
                  <p>
                    {item.title.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < item.title.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  )
}

export default CardSquare
