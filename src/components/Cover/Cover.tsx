import styles from './Cover.module.css'
import { cover } from '../../data/content'

const STAR_PATH = 'M50 0C54 38 62 46 100 50C62 54 54 62 50 100C46 62 38 54 0 50C38 46 46 38 50 0Z'

function TickerLoop({ loopKey }: { loopKey: string }) {
  return (
    <>
      {cover.tickerItems.map((item, i) => (
        <span key={`${loopKey}-${i}`}>
          <span className={styles.tickerItem}>{item}</span>
          <span className={styles.tickerStar}>✳</span>
        </span>
      ))}
    </>
  )
}

export default function Cover() {
  return (
    <section data-screen-label="Tapa" className={styles.section}>
      <div className={styles.grain} />

      <div className={styles.navBar}>
        <span>{cover.nav.left}</span>
        <span className={styles.navCenter}>
          <span className={styles.navStar}>✳</span>
          {cover.nav.center}
          <span className={styles.navStar}>✳</span>
        </span>
        <span className={styles.navRight}>{cover.nav.right}</span>
      </div>

      <div className={styles.metaBar}>
        <span>{cover.edition}</span>
        <span>{cover.location}</span>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroText}>
          <div className={styles.starBurst}>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
              <path d={STAR_PATH} fill="#D71920" />
            </svg>
            <svg viewBox="0 0 100 100">
              <path d={STAR_PATH} fill="#D71920" />
            </svg>
          </div>
          <div className={styles.kicker}>{cover.kicker}</div>
          <h1 className={styles.title}>
            {cover.titleBefore} <span className={styles.titleHighlight}>{cover.titleHighlight}</span> {cover.titleAfter}
            <br />
            {cover.titleName}
          </h1>
          <p className={styles.bio}>
            {cover.bioLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < cover.bioLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className={styles.tickerOuter}>
        <div className={styles.tickerInner}>
          <TickerLoop loopKey="a" />
          <TickerLoop loopKey="b" />
        </div>
      </div>
    </section>
  )
}
