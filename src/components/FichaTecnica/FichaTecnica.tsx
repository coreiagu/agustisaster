import styles from './FichaTecnica.module.css'
import { fichaTecnica } from '../../data/content'

export default function FichaTecnica() {
  return (
    <section data-screen-label="Ficha técnica" id="ficha" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span>{fichaTecnica.pageLabel}</span>
          <span className={styles.headerRight}>{fichaTecnica.label}</span>
        </div>
        <h2 className={styles.heading}>{fichaTecnica.heading}</h2>
        <div className={styles.grid}>
          {fichaTecnica.columns.map((column) => (
            <div className={styles.column} key={column.title}>
              <div className={styles.columnTitle}>{column.title}</div>
              <div className={styles.columnItems}>
                {column.items.map((item, i) => (
                  <span key={item}>
                    {item}
                    {i < column.items.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
