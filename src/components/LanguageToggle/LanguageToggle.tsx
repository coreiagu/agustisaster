import styles from './LanguageToggle.module.css'
import { useLanguage } from '../../context/LanguageContext'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleLanguage}
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a español'}
    >
      <span className={language === 'es' ? styles.active : styles.inactive}>ES</span>
      <span className={styles.divider}>/</span>
      <span className={language === 'en' ? styles.active : styles.inactive}>EN</span>
    </button>
  )
}
