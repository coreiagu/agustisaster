import * as contentEs from '../data/content'
import * as contentEn from '../data/content.en'
import { useLanguage } from '../context/LanguageContext'

export function useContent() {
  const { language } = useLanguage()
  return language === 'en' ? contentEn : contentEs
}
