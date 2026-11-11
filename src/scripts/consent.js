// Consentimiento de cookies — fuente única para el banner/modal (CookieConsent.js),
// el link "Cookie Settings" del Footer y los mapas bloqueados de los templates PHP.
//
// Qué se bloquea: solo los mapas de Google embebidos (Home, Contact, Locations), que
// son lo único del sitio que pone cookies de terceros. Se renderizan sin src (ver
// cmj_consent_map() en functions.php) y acá se les asigna cuando hay consentimiento.
// El widget de reseñas (Trustindex) no se bloquea: su HTML viene del servidor y no
// pone cookies propias — está declarado en la Privacy Policy.
//
// La decisión se guarda en una cookie propia (no localStorage) para que cuente como
// la cookie "estrictamente necesaria" que declara la Privacy Policy.

const COOKIE = "cmj_consent"
const MAX_AGE = 60 * 60 * 24 * 180 // 6 meses
export const CONSENT_EVENT = "cmj:consent"
export const OPEN_SETTINGS_EVENT = "cmj:open-cookie-settings"

// Formato: "v1|tp=1" — versionado por si en el futuro se agregan categorías
// (analytics, etc.) y hay que volver a pedir consentimiento.
export function getConsent() {
  const match = document.cookie.match(new RegExp("(?:^|; )" + COOKIE + "=([^;]*)"))
  if (!match) return null
  const [version, ...pairs] = decodeURIComponent(match[1]).split("|")
  if (version !== "v1") return null
  const values = Object.fromEntries(pairs.map((p) => p.split("=")))
  return { thirdParty: values.tp === "1" }
}

export function setConsent(consent) {
  const value = encodeURIComponent(`v1|tp=${consent.thirdParty ? 1 : 0}`)
  const secure = window.location.protocol === "https:" ? "; Secure" : ""
  document.cookie = `${COOKIE}=${value}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax${secure}`
  applyConsent(consent)
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }))
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))
}

// Carga (o no) los mapas bloqueados. Una vez cargado un mapa no se descarga si el
// visitante luego retira el consentimiento — el cambio aplica desde la siguiente
// página que visite (la cookie ya quedó actualizada).
export function applyConsent(consent) {
  if (!consent || !consent.thirdParty) return
  document.querySelectorAll("iframe[data-cmj-consent-src]").forEach((iframe) => {
    iframe.src = iframe.getAttribute("data-cmj-consent-src")
    iframe.removeAttribute("data-cmj-consent-src")
    const placeholder = iframe.parentElement.querySelector(".cmj-consent-placeholder")
    if (placeholder) placeholder.remove()
  })
}

// Botones que viven en HTML de PHP (no en React): "Show Map" dentro del placeholder
// de cada mapa y cualquier link con data-cmj-cookie-settings.
export function initConsent() {
  applyConsent(getConsent())

  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-cmj-consent-allow]")) {
      e.preventDefault()
      setConsent({ ...(getConsent() || {}), thirdParty: true })
    } else if (e.target.closest("[data-cmj-cookie-settings]")) {
      e.preventDefault()
      openCookieSettings()
    }
  })
}
