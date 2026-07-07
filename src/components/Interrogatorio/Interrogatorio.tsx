import styles from './Interrogatorio.module.css'
import { useContent } from '../../hooks/useContent'

export default function Interrogatorio() {
  const { interrogatorio } = useContent()
  const [left, right] = [
    interrogatorio.questions.slice(0, 2),
    interrogatorio.questions.slice(2, 4),
  ]

  return (
    <section data-screen-label="El interrogatorio" id="entrevista" className={styles.section}>
      <div className={styles.header}>
        <span>{interrogatorio.pageLabel}</span>
        <span className={styles.headerRight}>{interrogatorio.label}</span>
      </div>
      <h2 className={styles.heading}>{interrogatorio.heading}</h2>
      <p className={styles.subheading}>{interrogatorio.subheading}</p>
      <div className={styles.byline}>{interrogatorio.byline}</div>
      <div className={styles.grid}>
        <div className={styles.column}>
          {left.map((item) => (
            <div key={item.q}>
              <div className={styles.question}>{item.q}</div>
              <p className={styles.answer}>{item.a}</p>
              {item.link && (
                <a className={styles.link} href={item.link.url} target="_blank" rel="noopener noreferrer">
                  {item.link.label} →
                </a>
              )}
            </div>
          ))}
        </div>
        <div className={styles.column}>
          {right.map((item) =>
            item.highlighted ? (
              <div className={styles.highlightedBlock} key={item.q}>
                <div className={styles.question}>{item.q}</div>
                <p className={styles.highlightedAnswer}>{item.a}</p>
                {item.note && <p className={styles.highlightedNote}>{item.note}</p>}
              </div>
            ) : (
              <div key={item.q}>
                <div className={styles.question}>{item.q}</div>
                <p className={styles.answer}>{item.a}</p>
                {item.note && <p className={styles.note}>{item.note}</p>}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
