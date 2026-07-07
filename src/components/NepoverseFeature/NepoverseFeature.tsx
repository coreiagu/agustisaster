import styles from './NepoverseFeature.module.css'
import { nepoverseFeature } from '../../data/content'

export default function NepoverseFeature() {
  return (
    <section data-screen-label="Nota de tapa: Nepoverse" id="nepoverse" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span>{nepoverseFeature.pageLabel}</span>
          <span className={styles.liveIndicator}>
            <span className={styles.liveDot} />
            {nepoverseFeature.liveLabel}
          </span>
        </div>
        <div className={styles.grid}>
          <div>
            <div className={styles.eyebrow}>{nepoverseFeature.eyebrow}</div>
            <h2 className={styles.heading}>{nepoverseFeature.heading}</h2>
            <p className={styles.subheading}>{nepoverseFeature.subheading}</p>
            <div className={styles.urlLabel}>{nepoverseFeature.urlLabel}</div>
            <div className={styles.body}>
              <div>
                {nepoverseFeature.paragraphs.map((p, i) =>
                  typeof p === 'string' ? (
                    <p key={i}>{p}</p>
                  ) : (
                    <p key={i}>
                      <strong>{p.bold}</strong> {p.text}
                    </p>
                  )
                )}
              </div>
            </div>
            <blockquote className={styles.quote}>{nepoverseFeature.quote}</blockquote>
          </div>
          <div>
            <figure className={styles.figure}>
              <div className={styles.imageFrame}>
                <img src={nepoverseFeature.image.src} alt={nepoverseFeature.image.alt} />
              </div>
              <figcaption className={styles.figcaption}>{nepoverseFeature.figcaption}</figcaption>
            </figure>
            <div className={styles.fichaBox}>
              <div className={styles.fichaTitle}>Ficha del proyecto</div>
              <div className={styles.fichaBody}>
                <div>
                  <div className={styles.fichaLabel}>Stack</div>
                  <div className={styles.fichaValue}>{nepoverseFeature.ficha.stack}</div>
                </div>
                <div>
                  <div className={styles.fichaLabel}>Rol</div>
                  <div className={styles.fichaValue}>{nepoverseFeature.ficha.rol}</div>
                </div>
                <div>
                  <div className={styles.fichaLabel}>Estado</div>
                  <div className={styles.fichaValue}>{nepoverseFeature.ficha.estado}</div>
                </div>
              </div>
              <a
                href={nepoverseFeature.ctaHref}
                target="_blank"
                rel="noopener"
                className={styles.cta}
              >
                {nepoverseFeature.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
