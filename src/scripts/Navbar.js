import React, { useEffect, useRef, useState } from "react"
import {
  PhoneIcon, MailIcon, PinIcon, ChevronIcon, MenuIcon, CloseIcon,
  FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon, YelpIcon
} from "./Iconscons"

const cfg = window.cmjConfig || {}

const NAV_ITEMS = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about/" },
  {
    label: "Services",
    url: "/services/",
    children: [
      { label: "Kitchen Cabinets", url: "/kitchen/" },
      { label: "Custom Closets", url: "/closet/" },
      { label: "Bar Cabinets", url: "/bar-cabinets/" },
      { label: "Bathroom Vanities", url: "/bathroom-vanity/" },
      { label: "Garage Cabinets", url: "/garages/" },
      { label: "Murphy Beds", url: "/murphy-beds/" },
      { label: "Laundry Room", url: "/laundry-room/" },
      { label: "Entertainment Centers", url: "/entertainment-centers/" },
      { label: "Additional Services", url: "/additional-services/" },
    ],
  },
  { label: "Gallery", url: "/gallery/" },
  { label: "Testimonials", url: "/testimonials/" },
  { label: "Contact", url: "/contact-us/" },
]

const SOCIALS = [
  { label: "Facebook", key: "facebook", Icon: FacebookIcon },
  { label: "Instagram", key: "instagram", Icon: InstagramIcon },
  { label: "TikTok", key: "tiktok", Icon: TikTokIcon },
  { label: "YouTube", key: "youtube", Icon: YouTubeIcon },
  { label: "Yelp", key: "yelp", Icon: YelpIcon },
]

function Navbar() {
  const [topbarHidden, setTopbarHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const lastY = useRef(0)
  const ticking = useRef(false)

  // Topbar: se esconde al bajar, reaparece al subir (smooth vía CSS)
  useEffect(() => {
    lastY.current = window.scrollY
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      window.requestAnimationFrame(() => {
        const y = window.scrollY
        setScrolled(y > 8)
        if (y > lastY.current && y > 96) {
          setTopbarHidden(true)
        } else if (y < lastY.current - 2) {
          setTopbarHidden(false)
        }
        lastY.current = y
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
    <header className="sticky top-0 z-50">
      {/* ===== TOPBAR ===== */}
      <div
        className={`bg-ink text-cream/80 overflow-hidden transition-all duration-300 ease-in-out ${
          topbarHidden ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between gap-4 text-[13px]">
          {/* Izquierda: teléfono + correo */}
          <div className="flex items-center gap-4 min-w-0">
            <a href={`tel:${cfg.phoneRaw || ""}`} className="flex items-center gap-1.5 hover:text-tan transition-colors whitespace-nowrap">
              <PhoneIcon />
              <span>{cfg.phone}</span>
            </a>
            <a href={`mailto:${cfg.email || ""}`} className="hidden sm:flex items-center gap-1.5 hover:text-tan transition-colors truncate">
              <MailIcon />
              <span className="truncate">{cfg.email}</span>
            </a>
          </div>

          {/* Centro: geotag → Google Maps */}
          <a
            href={cfg.mapsUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 hover:text-tan transition-colors whitespace-nowrap"
            title="Open in Google Maps"
          >
            <PinIcon />
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
                className="hover:text-tan transition-colors"
              >
                <Icon />
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
              <img src={cfg.logoUrl} alt="CMJ Cabinets, Inc." className="h-12 w-auto" />
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
                  className="relative"
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
                  {/* Dropdown */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full w-64 bg-paper border-t-2 border-tan shadow-xl transition-all duration-200 origin-top ${
                      servicesOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
                    }`}
                  >
                    <ul className="py-2">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.url}
                            className="block px-5 py-2.5 text-[14px] text-ink/85 hover:bg-cream hover:text-tan-2 transition-colors"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
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
              className="cmj-cta hidden lg:flex items-center justify-center relative overflow-hidden w-[178px] h-[46px] bg-tan text-paper text-[13px] font-semibold uppercase"
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
              className="cmj-cta flex items-center justify-center relative overflow-hidden w-full h-[50px] bg-tan text-paper text-[13px] font-semibold uppercase"
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