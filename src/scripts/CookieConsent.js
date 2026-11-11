import React, { useEffect, useRef, useState } from "react"
import { CloseIcon } from "./Icons"
import { getConsent, setConsent, CONSENT_EVENT, OPEN_SETTINGS_EVENT } from "./consent"

const cfg = window.cmjConfig || {}

// Banner de cookies (primera visita) + modal "Cookie Settings" (desde el banner o
// desde el link del Footer). Lógica de guardado/aplicación en consent.js.
// Opt-in: hasta que el visitante decide, los mapas de Google quedan bloqueados.

const CATEGORIES = [
  {
    key: "necessary",
    title: "Strictly Necessary",
    copy: "Required for the website to work, such as remembering your cookie choices. These can't be turned off.",
    locked: true,
  },
  {
    key: "thirdParty",
    title: "Third-Party Content",
    copy: "Loads the Google Maps shown on our Home, Contact, and Locations pages. Google may set its own cookies when a map loads.",
  },
]

const btnPrimary =
  "inline-flex items-center justify-center rounded-md bg-linear-to-b from-tan to-tan-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-paper hover:from-ink hover:to-ink transition-colors"
const btnSecondary =
  "inline-flex items-center justify-center rounded-md border border-ink/25 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-ink hover:border-tan hover:text-tan-2 transition-colors"

function Toggle({ checked, onChange, disabled, labelledBy }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-labelledby={labelledBy}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tan ${
        checked ? "bg-tan-2" : "bg-ink/20"
      } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`inline-block h-5 w-5 rounded-full bg-paper shadow transition-transform ${checked ? "translate-x-5.5" : "translate-x-0.5"}`}
      />
    </button>
  )
}

function CookieConsent() {
  const [consent, setConsentState] = useState(() => getConsent())
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [draft, setDraft] = useState({ thirdParty: false })
  const dialogRef = useRef(null)
  const openerRef = useRef(null)

  const openSettings = () => {
    openerRef.current = document.activeElement
    setDraft({ thirdParty: Boolean(getConsent()?.thirdParty) })
    setSettingsOpen(true)
  }
  const closeSettings = () => {
    setSettingsOpen(false)
    if (openerRef.current && openerRef.current.focus) openerRef.current.focus()
  }
  const save = (next) => {
    setConsent(next)
    setConsentState(next)
    closeSettings()
  }

  // Link "Cookie Settings" del Footer y botones "Show Map" de los placeholders.
  useEffect(() => {
    const onOpen = () => openSettings()
    const onChange = (e) => setConsentState(e.detail)
    window.addEventListener(OPEN_SETTINGS_EVENT, onOpen)
    window.addEventListener(CONSENT_EVENT, onChange)
    return () => {
      window.removeEventListener(OPEN_SETTINGS_EVENT, onOpen)
      window.removeEventListener(CONSENT_EVENT, onChange)
    }
  }, [])

  // Modal: foco adentro, Tab atrapado en el diálogo, Esc cierra, scroll bloqueado.
  useEffect(() => {
    if (!settingsOpen) return
    const dialog = dialogRef.current
    const focusables = () =>
      dialog.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')
    focusables()[0]?.focus()
    const onKey = (e) => {
      if (e.key === "Escape") {
        closeSettings()
      } else if (e.key === "Tab") {
        const items = focusables()
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [settingsOpen])

  const privacyLink = (cfg.privacyUrl || "/privacy-policy/") + "#cookies"

  return (
    <>
      {/* ===== Banner (solo hasta que el visitante decide) ===== */}
      {!consent && !settingsOpen ? (
        <div
          role="region"
          aria-label="Cookie consent"
          className="cmj-cookie-in fixed inset-x-4 bottom-4 z-[70] sm:right-auto sm:max-w-md rounded-lg border border-ink/10 bg-paper p-6 shadow-2xl"
        >
          <h2 className="text-lg font-semibold text-ink">We value your privacy</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink/75">
            We use essential cookies to make our site work. With your consent, we'll also load third-party content like
            Google Maps, which may set its own cookies.{" "}
            <a href={privacyLink} className="font-semibold text-tan-2 underline underline-offset-2 hover:text-tan">
              Privacy Policy
            </a>
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button type="button" className={btnPrimary} onClick={() => save({ thirdParty: true })}>
              Accept All
            </button>
            <button type="button" className={btnSecondary} onClick={() => save({ thirdParty: false })}>
              Reject All
            </button>
            <button
              type="button"
              className="text-xs font-semibold uppercase tracking-[0.08em] text-ink/70 underline underline-offset-4 hover:text-tan-2"
              onClick={openSettings}
            >
              Customize
            </button>
          </div>
        </div>
      ) : null}

      {/* ===== Modal "Cookie Settings" ===== */}
      {settingsOpen ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-ebano/60 backdrop-blur-sm" onClick={closeSettings} aria-hidden="true" />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cmj-cookie-title"
            className="cmj-cookie-in relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-lg bg-paper p-6 sm:p-8 shadow-2xl"
          >
            <button
              type="button"
              onClick={closeSettings}
              aria-label="Close"
              className="absolute top-4 right-4 text-ink/50 hover:text-ink transition-colors"
            >
              <CloseIcon width="20" height="20" />
            </button>

            <h2 id="cmj-cookie-title" className="text-2xl font-normal tracking-wide text-ink">
              Cookie Settings
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Choose which cookies we can use. You can change these settings anytime from the "Cookie Settings" link at the
              bottom of every page.
            </p>

            <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
              {CATEGORIES.map((cat) => (
                <li key={cat.key} className="flex items-start justify-between gap-5 py-4">
                  <div>
                    <p id={`cmj-cookie-${cat.key}`} className="text-sm font-semibold text-ink">
                      {cat.title}
                      {cat.locked ? <span className="ml-2 text-xs font-medium text-tan-2">Always active</span> : null}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">{cat.copy}</p>
                  </div>
                  <Toggle
                    labelledBy={`cmj-cookie-${cat.key}`}
                    checked={cat.locked ? true : Boolean(draft[cat.key])}
                    disabled={cat.locked}
                    onChange={(v) => setDraft((d) => ({ ...d, [cat.key]: v }))}
                  />
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
              <button type="button" className={btnSecondary} onClick={() => save(draft)}>
                Save Preferences
              </button>
              <button type="button" className={btnPrimary} onClick={() => save({ thirdParty: true })}>
                Accept All
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default CookieConsent
