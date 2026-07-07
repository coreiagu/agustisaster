import styles from './CartasDirector.module.css'
import { useContent } from '../../hooks/useContent'

const STAR_PATH = 'M50 0C54 38 62 46 100 50C62 54 54 62 50 100C46 62 38 54 0 50C38 46 46 38 50 0Z'

export default function CartasDirector() {
  const { cartasDirector } = useContent()
  return (
    <section data-screen-label="Cartas al director" id="cartas" className={styles.section}>
      <div className={styles.starBurst}>
        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
          <path d={STAR_PATH} fill="#0B0B0D" />
        </svg>
      </div>
      <div className={styles.inner}>
        <div className={styles.header}>{cartasDirector.pageLabel}</div>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.heading}>{cartasDirector.heading}</h2>
          </div>
          <div className={styles.links}>
            <a href={`mailto:${cartasDirector.email}`} className={styles.emailLink}>
              {cartasDirector.email}
            </a>
            <a
              href={cartasDirector.linkedin}
              target="_blank"
              rel="noopener"
              className={`${styles.socialLink} ${styles.linkedinLink}`}
            >
              LinkedIn ↗
            </a>
            <a
              href={cartasDirector.github}
              target="_blank"
              rel="noopener"
              className={`${styles.socialLink} ${styles.githubLink}`}
            >
              GitHub ↗
            </a>
          </div>
        </div>
        <div className={styles.footer}>
          <span>{cartasDirector.footerIssn}</span>
          <span className={styles.footerLocation}>
            {cartasDirector.footerLocation} <span className={styles.footerStar}>✳</span>
          </span>
        </div>
      </div>
    </section>
  )
}
