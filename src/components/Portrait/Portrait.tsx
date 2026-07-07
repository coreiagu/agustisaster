import styles from './Portrait.module.css'
import { useContent } from '../../hooks/useContent'

export default function Portrait() {
  const { portrait } = useContent()
  return (
    <section data-screen-label="El retrato" id="retrato" className={styles.section}>
      <div className={styles.header}>
        <span>{portrait.pageLabel}</span>
        <span className={styles.headerRight}>{portrait.sectionLabel}</span>
      </div>
      <div className={styles.grid}>
        <figure className={styles.figure}>
          <div className={styles.imageFrame}>
            <img src="/assets/agustisaster-working.png" alt={portrait.imageAlt} />
          </div>
          <figcaption className={styles.figcaption}>{portrait.figcaption}</figcaption>
        </figure>
        <div>
          <div className={styles.eyebrow}>{portrait.eyebrow}</div>
          <h2 className={styles.heading}>{portrait.heading}</h2>
          <p className={styles.subheading}>{portrait.subheading}</p>
          <div className={styles.byline}>{portrait.byline}</div>
          <div className={styles.body}>
            <p>
              <span className={styles.dropCap}>{portrait.dropCap}</span>
              {portrait.firstParagraphRest}
            </p>
            <p>
              {portrait.secondParagraph.before}
              <strong>{portrait.secondParagraph.bold}</strong>
              {portrait.secondParagraph.after}
            </p>
          </div>
          <blockquote className={styles.quote}>{portrait.quote}</blockquote>
        </div>
      </div>
    </section>
  )
}
