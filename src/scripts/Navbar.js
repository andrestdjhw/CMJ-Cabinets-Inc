import React, { useEffect, useRef, useState } from "react"
import {
  PhoneIcon, MailIcon, PinIcon, ChevronIcon, MenuIcon, CloseIcon,
  FacebookIcon, InstagramIcon, TikTokIcon, BbbIcon, GmbIcon
} from "./Icons"
import { NAV_ITEMS } from "./navigation"

const cfg = window.cmjConfig || {}

// El único item de NAV_ITEMS con children es "Services" — sus hijos alimentan el mega menu.
const SERVICES_ITEM = NAV_ITEMS.find((item) => item.children)

const SOCIALS = [
  { label: "Facebook", key: "facebook", Icon: FacebookIcon },
  { label: "Instagram", key: "instagram", Icon: InstagramIcon },
  { label: "TikTok", key: "tiktok", Icon: TikTokIcon },
  { label: "BBB", key: "bbb", Icon: BbbIcon },
  { label: "Google Business Profile", key: "gmb", Icon: GmbIcon },
]

function Navbar() {
  const [topbarHidden, setTopbarHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const lastY = useRef(0)
  const ticking = useRef(false)

  // Topbar: se esconde al bajar, reaparece al subir (smooth vía CSS).
  // Bug arreglado #1: el topbar colapsa con max-height, lo que encoge el
  // documento justo arriba del navbar (sticky top-0) — el navegador
  // compensa eso solo ("scroll anchoring", para que el contenido no salte),
  // lo que mueve scrollY, lo que el handler de acá leía como "el usuario
  // scrolleó", lo que volvía a mostrar/esconder el topbar, lo que volvía a
  // encoger/crecer el documento... un loop que se sentía como que "rebotaba"
  // sin parar. Arreglado apagando overflow-anchor en el <html> entero (ver
  // index.css) — no alcanzaba con ponerlo solo en el <header>: eso saca a
  // sus hijos de la lista de candidatos a ser el "anchor", pero no evita que
  // el navegador compense por el cambio de alto del header en sí.
  // Bug arreglado #2 ("sigue rebotando al hacer scroll lento"): lastY.current
  // se reescribía en CADA frame sin importar si se cruzaba el umbral, así que
  // en realidad se comparaba el delta de un frame contra el anterior, no la
  // distancia acumulada desde el último cambio de estado. Con scroll lento
  // (trackpad, rueda de pasos chicos) el delta por frame es chico e
  // inconsistente — cualquier micro-reversa de 1-2px ya cruzaba el umbral de
  // ±4px contra ESE frame puntual, y el topbar parpadeaba. Ahora lastY solo
  // se actualiza cuando de verdad se decide mostrar/ocultar, así el delta se
  // acumula mientras el scroll lento sigue en la misma dirección, y una
  // micro-reversa que no llega a acumular 4px netos no dispara nada.
  useEffect(() => {
    lastY.current = window.scrollY
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      window.requestAnimationFrame(() => {
        const y = window.scrollY
        setScrolled(y > 8)
        if (y > lastY.current + 4 && y > 96) {
          setTopbarHidden(true)
          lastY.current = y
        } else if (y < lastY.current - 4) {
          setTopbarHidden(false)
          lastY.current = y
        }
        ticking.current = false
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Bloquear scroll del body con el drawer abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  // Cerrar dropdown con Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setServicesOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  const socials = SOCIALS.filter(({ key }) => cfg.socials && cfg.socials[key])

  return (
    <header>
      {/* ===== TOPBAR ===== */}
      <div
        className={`bg-linear-to-b from-tan to-tan-2 text-paper overflow-hidden transition-all duration-300 ease-in-out ${
          topbarHidden ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-11 flex items-center justify-between gap-4 text-sm">
          {/* Izquierda: teléfono + correo */}
          <div className="flex items-center gap-4 min-w-0">
            <a href={`tel:${cfg.phoneRaw || ""}`} className="flex items-center gap-1.5 hover:text-ebano transition-colors whitespace-nowrap">
              <PhoneIcon width="17" height="17" />
              <span>{cfg.phone}</span>
            </a>
            <a href={`mailto:${cfg.email || ""}`} className="hidden sm:flex items-center gap-1.5 hover:text-ebano transition-colors truncate">
              <MailIcon width="17" height="17" />
              <span className="truncate">{cfg.email}</span>
            </a>
          </div>

          {/* Centro: geotag → Google Maps */}
          <a
            href={cfg.mapsUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 hover:text-ebano transition-colors whitespace-nowrap"
            title="Open in Google Maps"
          >
            <PinIcon width="17" height="17" />
            <span>{cfg.address}</span>
          </a>

          {/* Derecha: redes */}
          <div className="flex items-center gap-3">
            {socials.map(({ label, key, Icon }) => (
              <a
                key={key}
                href={cfg.socials[key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-ebano transition-colors"
              >
                <Icon width="17" height="17" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ===== BARRA PRINCIPAL ===== */}
      <div className={`bg-paper transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 h-[76px] flex items-center justify-between gap-6">
          {/* Logo */}
          <a href={cfg.homeUrl || "/"} className="flex items-center shrink-0" aria-label="CMJ Cabinets — Home">
            {cfg.logoUrl ? (
              <img src={cfg.logoUrl} alt="CMJ Cabinets, Inc." className="h-10.75 w-auto" />
            ) : (
              <span className="text-2xl font-bold tracking-tight text-ink">
                CMJ <span className="text-tan-2">Cabinets</span>
              </span>
            )}
          </a>

          {/* Nav items (desktop) */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <a
                    href={item.url}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onFocus={() => setServicesOpen(true)}
                    className="flex items-center gap-1 text-[15px] font-medium text-ink hover:text-tan-2 transition-colors py-6"
                  >
                    {item.label}
                    <ChevronIcon className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </a>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.url}
                  className="text-[15px] font-medium text-ink hover:text-tan-2 transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* CTA (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-3">
            <a
              href={cfg.ctaUrl || "/contact-us/"}
              aria-label={cfg.ctaLabel || "Free Estimate"}
              className="cmj-cta hidden lg:flex items-center justify-center relative overflow-hidden w-[178px] h-[46px] bg-linear-to-b from-tan to-tan-2 text-paper text-[13px] font-semibold uppercase"
            >
              <span className="cmj-cta__frame" aria-hidden="true"></span>
              <p
                className="cmj-cta__label"
                data-title={cfg.ctaLabel || "Free Estimate"}
                data-text={cfg.ctaHover || "Let's Talk"}
              ></p>
            </a>
            <button
              type="button"
              className="lg:hidden text-ink p-1"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== MEGA MENU: SERVICES (desktop, una sola fila continua) ===== */}
      <div
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
        className={`hidden lg:block absolute inset-x-0 top-full bg-paper border-t border-cream shadow-2xl transition-all duration-200 origin-top ${
          servicesOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-8 py-8">
          {/* cmj-mega-grid: el perspective vive acá (no en cada card) para que todas
              "miren" al mismo punto de fuga al inclinarse — ver .cmj-mega-card en
              index.css. pt-2/-mt-2 dan margen para que el translateY(-8px) + sombra
              del hover no se corten contra el borde del contenedor. */}
          <div className="cmj-mega-grid flex items-stretch gap-6 overflow-x-auto overflow-y-visible pt-2 -mt-2 pb-6 scrollbar-none [perspective:1400px]">
            {SERVICES_ITEM.children.map((child) => {
              const img = cfg.serviceImages && cfg.serviceImages[child.slug]
              return (
                <a
                  key={child.label}
                  href={child.url}
                  className="cmj-mega-card group shrink-0 w-42 rounded-md border border-ink/10 bg-paper overflow-hidden"
                >
                  <div className={`aspect-square overflow-hidden relative ${img ? "" : "cmj-wood-bg"}`}>
                    {img ? (
                      <img
                        src={img}
                        alt={child.label}
                        loading="lazy"
                        className="cmj-mega-card__img absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="cmj-mega-card__img absolute inset-0" />
                    )}
                  </div>
                  <p className="px-3 py-3 text-[14px] font-semibold text-ink group-hover:text-tan-2 transition-colors">
                    {child.label}
                  </p>
                </a>
              )
            })}

            {/* Enlace a la página de Services, como último tile de la fila */}
            <a
              href={SERVICES_ITEM.url}
              className="cmj-mega-card group shrink-0 w-42 aspect-square rounded-md border border-transparent bg-ink hover:bg-tan-2 flex flex-col items-center justify-center text-center gap-2 px-4"
            >
              <span className="text-[14px] font-semibold text-paper">View All Services</span>
              <ChevronIcon className="text-tan -rotate-90" />
            </a>
          </div>

          {/* Barra utilitaria: llamar / correo */}
          <div className="mt-7 pt-6 border-t border-cream flex flex-wrap items-center gap-6">
            <a href={`tel:${cfg.phoneRaw || ""}`} className="flex items-center gap-2 text-ink font-medium text-sm hover:text-tan-2 transition-colors">
              <PhoneIcon />
              Call {cfg.phone}
            </a>
            <a href={`mailto:${cfg.email || ""}`} className="flex items-center gap-2 text-ink font-medium text-sm hover:text-tan-2 transition-colors">
              <MailIcon />
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* ===== DRAWER MOBILE ===== */}
      <div
        className={`lg:hidden fixed inset-x-0 bottom-0 top-[76px] bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <nav
          aria-label="Mobile"
          className={`absolute right-0 top-0 bottom-0 w-[86%] max-w-sm bg-paper shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="py-3">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <li key={item.label} className="border-b border-cream">
                  <details className="group">
                    <summary className="flex items-center justify-between px-5 py-3.5 text-ink font-medium cursor-pointer list-none">
                      {item.label}
                      <ChevronIcon className="transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <ul className="pb-2 bg-cream/50">
                      <li>
                        <a href={item.url} className="block px-8 py-2.5 text-[14px] font-medium text-tan-2">
                          All Services
                        </a>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a href={child.url} className="block px-8 py-2.5 text-[14px] text-ink/85 hover:text-tan-2">
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.label} className="border-b border-cream">
                  <a href={item.url} className="block px-5 py-3.5 text-ink font-medium hover:text-tan-2">
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="px-5 py-4 space-y-3">
            <a
              href={cfg.ctaUrl || "/contact-us/"}
              aria-label={cfg.ctaLabel || "Free Estimate"}
              className="cmj-cta flex items-center justify-center relative overflow-hidden w-full h-[50px] bg-linear-to-b from-tan to-tan-2 text-paper text-[13px] font-semibold uppercase"
            >
              <span className="cmj-cta__frame" aria-hidden="true"></span>
              <p
                className="cmj-cta__label"
                data-title={cfg.ctaLabel || "Free Estimate"}
                data-text={cfg.ctaHover || "Let's Talk"}
              ></p>
            </a>
            <a href={`tel:${cfg.phoneRaw || ""}`} className="flex items-center justify-center gap-2 text-ink font-medium">
              <PhoneIcon /> {cfg.phone}
            </a>
            <div className="flex items-center justify-center gap-4 pt-1 text-ink/70">
              {socials.map(({ label, key, Icon }) => (
                <a key={key} href={cfg.socials[key]} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:text-tan-2">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar