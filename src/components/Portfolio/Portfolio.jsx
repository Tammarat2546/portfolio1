import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://i.im.ge/2024/03/10/Rl9xzJ.8471bb4825047bbe437682e85769ad08.webp" alt="" />
            <p>Creative</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.im.ge/2024/03/10/RljMaP.192-300x300-Front-Color-NA.jpg" alt="" />
            <p>Love neatness</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.im.ge/2024/03/10/RljdaG.images.png" alt="" />
            <p>
            Good at cooking</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.im.ge/2024/03/10/Rlj62h.tmp-H4arPQ-856fec404822f855-pexels-photo-415380.webp" alt="" />
            <p>Peaceful love</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.im.ge/2024/03/10/Rljg2f.a1d24e-499bb647899147378037de2cd88e6fbbmv2.webp" alt="" />
            <p>Have good tolerance for pressure.</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.im.ge/2024/03/10/RlmS5D.friendly-boss-1024x708.png" alt="" />
            <p>Good-natured and friendly</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio