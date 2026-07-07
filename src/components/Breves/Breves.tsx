import styles from './Breves.module.css'
import { breves } from '../../data/content'

export default function Breves() {
  return (
    <section data-screen-label="Breves" id="breves" className={styles.section}>
      <div className={styles.header}>
        <span>{breves.pageLabel}</span>
        <span className={styles.headerRight}>{breves.label}</span>
      </div>
      <h2 className={styles.heading}>{breves.heading}</h2>
      <div className={styles.grid}>
        {breves.projects.map((project) => (
          <article className={styles.card} key={project.title}>
            <div className={styles.imageFrame}>
              <img src={project.image} alt={project.alt} />
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>{project.title}</div>
              <p className={styles.cardDescription}>{project.description}</p>
              {project.cta && (
                <a href={project.cta.href} className={styles.cardCta} target="_blank" rel="noopener noreferrer">
                  {project.cta.label}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
