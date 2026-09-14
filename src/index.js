import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./scripts/Navbar"
import Footer from "./scripts/Footer"
import ContactForm from "./scripts/ContactForm"

const navbarMount = document.querySelector("#cmj-navbar")
if (navbarMount) {
  ReactDOM.createRoot(navbarMount).render(<Navbar />)
}

const footerMount = document.querySelector("#cmj-footer")
if (footerMount) {
  ReactDOM.createRoot(footerMount).render(<Footer />)
}

const contactFormMount = document.querySelector("#cmj-contact-form")
if (contactFormMount) {
  ReactDOM.createRoot(contactFormMount).render(<ContactForm />)
}

// Segunda instancia del mismo form, variante traslúcida para el hero de Home
// (ver home-template.php) — sobre el slideshow de fotos en vez del wood-bg sólido.
const contactFormHeroMount = document.querySelector("#cmj-contact-form-hero")
if (contactFormHeroMount) {
  ReactDOM.createRoot(contactFormHeroMount).render(<ContactForm variant="glass" />)
}

// ===== Reveal global al hacer scroll =====
// Vive acá (bundle compartido, un solo <script> enqueued en todas las páginas vía
// functions.php) en vez de repetirse en cada template — un solo lugar para
// mantener la lógica. Aplica a cada <section> de <main>, salvo la primera (el
// hero de cada página, que ya tiene sus propias animaciones). Ver .cmj-reveal
// en index.css para el CSS de la transición.
function setupScrollReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

  const targets = document.querySelectorAll("main > section:not(:first-child)")
  if (!targets.length) return

  targets.forEach((el) => el.classList.add("cmj-reveal"))

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
  )

  targets.forEach((el) => observer.observe(el))
}
setupScrollReveal()