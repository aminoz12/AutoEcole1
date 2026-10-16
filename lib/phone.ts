// Normalisation et validation d'un numero francais.
// La regle precedente rejetait des numeros parfaitement valides
// ("+33 6 12 34 56 78", "0033612345678") : chaque rejet est un lead perdu.

/** Retire espaces, points, tirets, points-mediants et parentheses. */
export function normalizePhone(input: string): string {
  const cleaned = input.replace(/[\s.\-·()]/g, '')
  return cleaned.startsWith('0033') ? '+33' + cleaned.slice(4) : cleaned
}

/** Accepte 0X XX XX XX XX, +33X XX XX XX XX et 0033..., quelle que soit la ponctuation. */
export function isValidFrenchPhone(input: string): boolean {
  const n = normalizePhone(input)
  return /^(?:\+33[1-9]\d{8}|0[1-9]\d{8})$/.test(n)
}

/** Format lisible pour l'e-mail recu par l'equipe : 06 12 34 56 78. */
export function formatPhone(input: string): string {
  const n = normalizePhone(input)
  const local = n.startsWith('+33') ? '0' + n.slice(3) : n
  return /^0\d{9}$/.test(local) ? local.replace(/(\d{2})(?=\d)/g, '$1 ').trim() : input.trim()
}
