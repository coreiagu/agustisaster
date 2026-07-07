import styles from './TornEdge.module.css'

interface TornEdgeProps {
  variant: 'blackToPaper' | 'paperToBlack'
}

export default function TornEdge({ variant }: TornEdgeProps) {
  if (variant === 'blackToPaper') {
    return (
      <div className={styles.blackToPaperWrap}>
        <div className={styles.blackToPaperShape} />
      </div>
    )
  }

  return <div className={styles.paperToBlackShape} />
}
