import React, { useState } from "react"
import emailjs from "@emailjs/browser"
import { PhoneIcon, MailIcon, CheckIcon } from "./Icons"
import { NAV_ITEMS } from "./navigation"

const cfg = window.cmjConfig || {}

// Mismo listado de servicios que usa el mega menu del Navbar (ver navigation.js) —
// una sola fuente para no repetir los 9 servicios en un tercer lugar.
const SERVICES_ITEM = NAV_ITEMS.find((item) => item.children)
const PROJECT_TYPES = (SERVICES_ITEM ? SERVICES_ITEM.children : []).concat([
  { label: "Something Else", slug: "other" },
])

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialFields = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  message: "",
  website: "", // honeypot: campo invisible para humanos, si llega lleno es un bot
}

function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = "Please enter your name."
  if (!fields.phone.trim()) errors.phone = "Please enter a phone number."
  if (!fields.email.trim()) {
    errors.email = "Please enter your email."
  } else if (!EMAIL_RE.test(fields.email.trim())) {
    errors.email = "That email doesn't look right."
  }
  if (!fields.message.trim()) errors.message = "Tell us a bit about your project."
  return errors
}

// Dos pieles del mismo form: "light" = card sólida (fondo cmj-wood-bg del hero
// de contacto), "glass" = card traslúcida con backdrop-blur, para usarse sobre
// el slideshow de fotos del hero de Home (ver home-template.php). Todo lo demás
// (validación, envío, estados) es idéntico entre las dos.
const THEME = {
  light: {
    card: "rounded-lg bg-paper p-8",
    heading: "text-ink",
    subtext: "text-ink/70",
    label: "text-ink",
    input:
      "w-full rounded-md border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 " +
      "focus:outline-none focus:ring-2 focus:ring-tan focus:border-transparent transition-colors",
    error: "text-red-600",
    divider: "border-ink/10",
    contactLink: "text-ink hover:text-tan-2",
    resetLink: "text-ink border-ink/30 hover:border-tan hover:text-tan-2",
    iconBg: "bg-tan/15 text-tan-2",
  },
  glass: {
    card: "rounded-lg bg-paper/10 backdrop-blur-md border border-paper/20 shadow-2xl p-8",
    heading: "text-paper",
    subtext: "text-cream/80",
    label: "text-cream",
    input:
      "w-full rounded-md border border-cream/25 bg-paper/10 px-4 py-2.5 text-sm text-paper placeholder:text-cream/45 " +
      "focus:outline-none focus:ring-2 focus:ring-tan focus:border-transparent transition-colors",
    error: "text-red-300",
    divider: "border-cream/20",
    contactLink: "text-cream hover:text-tan",
    resetLink: "text-cream border-cream/40 hover:border-tan hover:text-tan",
    iconBg: "bg-paper/15 text-tan",
  },
}

function Field({ id, label, error, t, children }) {
  return (
    <div>
      <label htmlFor={id} className={`block text-sm font-medium mb-1.5 ${t.label}`}>
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className={`mt-1 text-xs ${t.error}`}>
          {error}
        </p>
      ) : null}
    </div>
  )
}

function ContactForm({ variant = "light" }) {
  const t = THEME[variant] || THEME.light
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | submitting | success | error
  const [serverMessage, setServerMessage] = useState("")

  const onChange = (e) => {
    const { name, value } = e.target
    setFields((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    // Honeypot: si un bot llenó este campo invisible, fingimos éxito sin enviar nada.
    if (fields.website) {
      setStatus("success")
      setServerMessage("Thanks! We'll get back to you within one business day.")
      return
    }

    const fieldErrors = validate(fields)
    setErrors(fieldErrors)
    if (Object.keys(fieldErrors).length > 0) return

    setStatus("submitting")
    setServerMessage("")

    // Envío 100% client-side vía EmailJS (ver cmj_config() en functions.php para las
    // IDs) — ya no pasa por wp_ajax/wp_mail. Los nombres de estos parámetros son los
    // que la plantilla de EmailJS del cliente debe usar entre {{...}}.
    const templateParams = {
      name: fields.name,
      phone: fields.phone,
      email: fields.email,
      project_type: fields.projectType || "(not specified)",
      message: fields.message,
    }

    try {
      // El aviso al negocio es el envío crítico (es el lead en sí) — lo esperamos y,
      // si falla, mostramos error. El auto-reply al cliente es "best effort": si por lo
      // que sea falla, el negocio de todos modos ya recibió el lead, así que no
      // bloqueamos el success del form por eso (solo lo dejamos loggeado).
      await emailjs.send(cfg.emailjsServiceId, cfg.emailjsContactTemplateId, templateParams, {
        publicKey: cfg.emailjsPublicKey,
      })
      emailjs
        .send(cfg.emailjsServiceId, cfg.emailjsAutoReplyTemplateId, templateParams, {
          publicKey: cfg.emailjsPublicKey,
        })
        .catch((err) => console.error("EmailJS auto-reply failed:", err))

      setStatus("success")
      setServerMessage("Thanks! We'll get back to you within one business day.")
      setFields(initialFields)
    } catch (err) {
      setStatus("error")
      setServerMessage("Something went wrong sending your message. Please call or email us directly.")
    }
  }

  if (status === "success") {
    return (
      <div className={`${t.card} text-center`}>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${t.iconBg}`}>
          <CheckIcon width="22" height="22" />
        </div>
        <h2 className={`text-xl font-semibold mb-2 ${t.heading}`}>Request Sent</h2>
        <p className={`text-sm ${t.subtext}`}>{serverMessage}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={`mt-6 text-sm font-medium border-b transition-colors ${t.resetLink}`}
        >
          Send another request
        </button>
      </div>
    )
  }

  return (
    <div className={t.card}>
      <h2 className={`text-xl font-semibold mb-1 ${t.heading}`}>Request Your Free Estimate</h2>
      <p className={`text-sm mb-6 ${t.subtext}`}>Tell us about your project, we'll get back to you within one business day.</p>

      <form onSubmit={onSubmit} noValidate className="space-y-4">
        <Field id="cmj-cf-name" label="Full Name" error={errors.name} t={t}>
          <input
            id="cmj-cf-name"
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={onChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "cmj-cf-name-error" : undefined}
            className={t.input}
            placeholder="Jane Smith"
          />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="cmj-cf-phone" label="Phone" error={errors.phone} t={t}>
            <input
              id="cmj-cf-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={fields.phone}
              onChange={onChange}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "cmj-cf-phone-error" : undefined}
              className={t.input}
              placeholder="(323) 555-0100"
            />
          </Field>

          <Field id="cmj-cf-email" label="Email" error={errors.email} t={t}>
            <input
              id="cmj-cf-email"
              name="email"
              type="email"
              autoComplete="email"
              value={fields.email}
              onChange={onChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "cmj-cf-email-error" : undefined}
              className={t.input}
              placeholder="jane@email.com"
            />
          </Field>
        </div>

        <Field id="cmj-cf-project" label="Project Type (optional)" t={t}>
          <select
            id="cmj-cf-project"
            name="projectType"
            value={fields.projectType}
            onChange={onChange}
            className={t.input + " appearance-none"}
          >
            <option className="text-ink" value="">Select a project type</option>
            {PROJECT_TYPES.map((p) => (
              <option className="text-ink" key={p.slug} value={p.label}>
                {p.label}
              </option>
            ))}
          </select>
        </Field>

        <Field id="cmj-cf-message" label="Tell Us About Your Project" error={errors.message} t={t}>
          <textarea
            id="cmj-cf-message"
            name="message"
            rows="4"
            value={fields.message}
            onChange={onChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "cmj-cf-message-error" : undefined}
            className={t.input + " resize-none"}
            placeholder="Room, rough size, timeline, anything that helps us prep your estimate."
          />
        </Field>

        {/* Honeypot: oculto para personas, visible para bots que rellenan todo el formulario. */}
        <input
          type="text"
          name="website"
          value={fields.website}
          onChange={onChange}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] w-px h-px overflow-hidden"
        />

        {status === "error" ? <p className={`text-sm ${t.error}`}>{serverMessage}</p> : null}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="cmj-cta flex items-center justify-center relative overflow-hidden w-full h-[52px] bg-linear-to-b from-tan to-tan-2 text-paper text-[13px] font-semibold uppercase disabled:opacity-60 disabled:pointer-events-none"
        >
          <span className="cmj-cta__frame" aria-hidden="true"></span>
          <p
            className="cmj-cta__label"
            data-title={status === "submitting" ? "Sending…" : "Send My Request"}
            data-text={cfg.ctaHover || "Let's Talk"}
          ></p>
        </button>
      </form>

      <div className={`mt-6 pt-6 border-t space-y-3 ${t.divider}`}>
        <a href={`tel:${cfg.phoneRaw || ""}`} className={`flex items-center gap-3 text-sm font-medium transition-colors ${t.contactLink}`}>
          <PhoneIcon />
          {cfg.phone}
        </a>
        <a href={`mailto:${cfg.email || ""}`} className={`flex items-center gap-3 text-sm font-medium transition-colors ${t.contactLink}`}>
          <MailIcon />
          {cfg.email}
        </a>
      </div>
    </div>
  )
}

export default ContactForm
