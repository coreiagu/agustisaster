import styles from './ParteDiario.module.css'
import { parteDiario } from '../../data/content'

export default function ParteDiario() {
  return (
    <section data-screen-label="Parte Diario de Choferes" id="parte-diario" className={styles.section}>
      <div className={styles.header}>
        <span>{parteDiario.pageLabel}</span>
        <span className={styles.badge}>{parteDiario.badge}</span>
      </div>
      <div className={styles.grid}>
        <div>
          <div className={styles.eyebrow}>{parteDiario.eyebrow}</div>
          <h2 className={styles.heading}>{parteDiario.heading}</h2>
          <p className={styles.subheading}>{parteDiario.subheading}</p>
          <div className={styles.byline}>{parteDiario.byline}</div>
          <div className={styles.body}>
            <div>
              {parteDiario.paragraphs.map((p, i) => (
                <p key={i}>
                  <strong>{p.bold}</strong> {p.text}
                </p>
              ))}
            </div>
          </div>
          <blockquote className={styles.quote}>{parteDiario.quote}</blockquote>
        </div>
        <div>
          <figure className={styles.figure}>
            {parteDiario.images.map((img) => (
              <div className={styles.imageFrame} key={img.src}>
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
            <figcaption className={styles.figcaption}>{parteDiario.figcaption}</figcaption>
          </figure>
          <div className={styles.fichaBox}>
            <div className={styles.fichaTitle}>Ficha del proyecto</div>
            <div className={styles.fichaBody}>
              <div>
                <div className={styles.fichaLabel}>Stack</div>
                <div className={styles.fichaValue}>{parteDiario.ficha.stack}</div>
              </div>
              <div>
                <div className={styles.fichaLabel}>Rol</div>
                <div className={styles.fichaValue}>{parteDiario.ficha.rol}</div>
              </div>
              <div>
                <div className={styles.fichaLabel}>Estado</div>
                <div className={styles.fichaValue}>{parteDiario.ficha.estado}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
