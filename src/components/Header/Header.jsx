import { Smile } from '../ui/icons'
import styles from './style.module.css'
import { motion } from 'motion/react'

const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.image} />
      <div className={styles.text}>
        <h1>Fernanda Vaz</h1>
        <div className={styles.description}>
          <p>
            Desenvolvedora Front-end
            <span className={styles.span}>.</span>
          </p>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            whileHover={{
              rotate: 0,
              transition: { duration: 0.3 },
            }}
          >
            <Smile />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Header
