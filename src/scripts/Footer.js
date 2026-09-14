import React from "react"
import {
  PhoneIcon, MailIcon, PinIcon,
  FacebookIcon, InstagramIcon, TikTokIcon, BbbIcon, GmbIcon,
} from "./Icons"
import { NAV_ITEMS } from "./navigation"

const cfg = window.cmjConfig || {}

const SOCIALS = [
  { label: "Facebook", key: "facebook", Icon: FacebookIcon },
  { label: "Instagram", key: "instagram", Icon: InstagramIcon },
  { label: "TikTok", key: "tiktok", Icon: TikTokIcon },
  { label: "BBB", key: "bbb", Icon: BbbIcon },
  { label: "Google Business Profile", key: "gmb", Icon: GmbIcon },
]

const QUICK_LINKS = NAV_ITEMS.filter((item) => !item.children)
const SERVICES = NAV_ITEMS.find((item) => item.children)?.children || []

function Footer() {
  const year = new Date().getFullYear()
  const socials = SOCIALS.filter(({ key }) => cfg.socials && cfg.socials[key])

  return (
    <footer className="relative isolate bg-linear-to-b from-ink to-ebano text-cream">
      {/* ===== Fondo del footer: mismo degradado que la Stats Band + el estampado
          nuevo (pedido explícito) =====
          Antes tenía el video de textura de madera (se quitó) y, antes de eso,
          un patrón "liquid" (PNG horneado desde un filtro SVG en vivo que
          causaba jank real en scroll). Ahora es el mismo bg-linear-to-b
          from-ink to-ebano que ya usa la Stats Band (mismo criterio: reusar,
          no inventar un tono nuevo) más el estampado que también usan las
          secciones bg-cream (ver .bg-cream.cmj-pattern-bg en index.css) — acá
          va aparte porque el footer es un componente React, no puede
          condicionarse a esa clase de Tailwind. mix-blend-mode:screen porque
          el PNG no es transparente (tiene relleno claro sólido + líneas más
          oscuras): sobre fondo oscuro, "screen" deja pasar el relleno claro
          como una textura suave y no tapa el degradado con un rectángulo
          sólido detrás. */}
      <div className="cmj-footer-pattern" aria-hidden="true">
        {cfg.footerPatternImgUrl ? (
          <div
            className="cmj-footer-pattern-img w-full h-full"
            style={{ backgroundImage: `url(${cfg.footerPatternImgUrl})` }}
          />
        ) : null}
      </div>

      {/* ===== CUERPO ===== */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Marca + contacto */}
        <div className="lg:col-span-1 text-center">
          <a href={cfg.homeUrl || "/"} className="inline-flex items-center" aria-label="CMJ Cabinets — Home">
            {cfg.footerLogoUrl ? (
              <img src={cfg.footerLogoUrl} alt="CMJ Cabinets, Inc." className="h-[90px] w-auto" />
            ) : (
              <span className="text-xl font-bold tracking-tight text-paper">
                CMJ <span className="text-tan">Cabinets</span>
              </span>
            )}
          </a>
          <p className="mt-4 text-sm text-cream/70 leading-relaxed">
            Custom cabinetry crafted in Los Angeles: kitchens, closets, bars and more, built to last.
          </p>
          <div className="flex items-center justify-center gap-4 mt-5 text-tan">
            {socials.map(({ label, key, Icon }) => (
              <a
                key={key}
                href={cfg.socials[key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-paper transition-colors"
              >
                <Icon width="18" height="18" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-display font-bold uppercase tracking-wide text-paper">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((item) => (
              <li key={item.label}>
                <a href={item.url} className="text-sm text-tan hover:text-paper transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-display font-bold uppercase tracking-wide text-paper">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.map((item) => (
              <li key={item.label}>
                <a href={item.url} className="text-sm text-tan hover:text-paper transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-sm font-display font-bold uppercase tracking-wide text-paper">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-tan">
            <li>
              <a href={`tel:${cfg.phoneRaw || ""}`} className="flex items-center gap-2 hover:text-paper transition-colors">
                <PhoneIcon />
                <span>{cfg.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${cfg.email || ""}`} className="flex items-center gap-2 hover:text-paper transition-colors">
                <MailIcon />
                <span className="truncate">{cfg.email}</span>
              </a>
            </li>
            <li>
              <a
                href={cfg.mapsUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-paper transition-colors"
              >
                <PinIcon />
                <span>{cfg.address}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== BARRA INFERIOR ===== */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:grid sm:grid-cols-3 items-center gap-2 text-xs text-cream/50">
          <p className="sm:justify-self-start">&copy; {year} CMJ Cabinets, Inc. All rights reserved.</p>
          <a
            href="https://828marketingsolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:justify-self-center hover:text-tan transition-colors"
          >
            Site by 828 Marketing Solutions
          </a>
          <p className="sm:justify-self-end">Built with care in Los Angeles, CA.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
