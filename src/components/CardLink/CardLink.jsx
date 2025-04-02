import { easeIn, easeInOut, easeOut, motion } from 'motion/react'
import { Coffee, GitHub, WhatsApp } from '../ui/icons'
import styles from './style.module.css'

const transition = {
  duration: 0.5,
  delay: 0.2,
  ease: [0, 0.71, 0.2, 1.01],
}

const CardLink = () => {
  const items = [
    {
      title: 'GitHub',
      icon: <GitHub />,
      className: styles.card,
      href: 'https://github.com/fernanda-vaz/',
    },
    {
      title: 'Vamos conversar!',
      icon: <WhatsApp />,
      className: styles.card,
      href: 'https://wa.link/ax1g3o',
    },
    {
      title: 'Buy me a coffee',
      icon: <Coffee />,
      className: styles.card_coffee,
      href: 'https://buymeacoffee.com/fernandavaz',
    },
  ]

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
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
            <div className={item.className}>
              <div className={styles.content}>
                <p className={styles.title}>{item.title}</p>
                {item.icon}
              </div>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  )
}

export default CardLink
