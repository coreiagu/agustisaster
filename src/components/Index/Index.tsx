import styles from './Index.module.css'
import { useContent } from '../../hooks/useContent'

export default function Index() {
  const { indice } = useContent()
  return (
    <section data-screen-label="Índice" id="indice" className={styles.section}>
      <div className={styles.header}>
        <span>{indice.pageLabel}</span>
        <span className={styles.headerVol}>{indice.volLabel}</span>
      </div>
      <div className={styles.grid}>
        <div>
          <h2 className={styles.heading}>{indice.heading}</h2>
          <div className={styles.highlights}>
            {indice.highlights.map((h) => (
              <div className={styles.highlightItem} key={h.page}>
                <span className={styles.highlightPage}>{h.page}</span>
                <span className={styles.highlightText}>{h.text}</span>
              </div>
            ))}
          </div>
        </div>
        <ol className={styles.toc}>
          {indice.tocItems.map((item) => (
            <li key={item.num}>
              <a href={item.href} className={styles.tocLink}>
                <span className={styles.tocNum}>{item.num}</span>
                <span className={styles.tocLabel}>{item.label}</span>
                <span className={styles.tocPage}>{item.page}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
