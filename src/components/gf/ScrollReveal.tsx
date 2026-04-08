'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

/**
 * Componente che attiva le scroll animations su tutta la pagina.
 * Va inserito una volta per pagina (layout o page).
 */
export function ScrollReveal() {
  useScrollReveal()
  return null
}
