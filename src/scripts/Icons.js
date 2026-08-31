import React from "react"

const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }

export const PhoneIcon = (p) => (
  <svg viewBox="0 0 24 24" width="15" height="15" {...base} {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z" />
  </svg>
)

export const MailIcon = (p) => (
  <svg viewBox="0 0 24 24" width="15" height="15" {...base} {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
)

export const PinIcon = (p) => (
  <svg viewBox="0 0 24 24" width="15" height="15" {...base} {...p}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const ChevronIcon = (p) => (
  <svg viewBox="0 0 24 24" width="14" height="14" {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const MenuIcon = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
)

export const CloseIcon = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

const solid = { fill: "currentColor", stroke: "none" }

export const FacebookIcon = (p) => (
  <svg viewBox="0 0 24 24" width="15" height="15" {...solid} {...p}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.92 3.79-3.92 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22C18.34 21.24 22 17.08 22 12.06z" />
  </svg>
)

export const InstagramIcon = (p) => (
  <svg viewBox="0 0 24 24" width="15" height="15" {...base} {...p}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
  </svg>
)

export const TikTokIcon = (p) => (
  <svg viewBox="0 0 24 24" width="15" height="15" {...solid} {...p}>
    <path d="M19.32 5.56a5.1 5.1 0 0 1-3.02-2.6A5.06 5.06 0 0 1 15.86 1h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.3 0 .58.05.85.13V8.4a6.34 6.34 0 1 0 5.49 6.28V8.74a8.5 8.5 0 0 0 4.96 1.59V6.88c-.52 0-1.02-.08-1.5-.24z" />
  </svg>
)

export const YouTubeIcon = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...solid} {...p}>
    <path d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.6 12 4.6 12 4.6s-7.5 0-9.4.5A3 3 0 0 0 .5 7.2 31.3 31.3 0 0 0 0 12c0 1.6.17 3.2.5 4.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.33-1.6.5-3.2.5-4.8 0-1.6-.17-3.2-.5-4.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
  </svg>
)

export const YelpIcon = (p) => (
  <svg viewBox="0 0 24 24" width="15" height="15" {...solid} {...p}>
    <path d="M12.9 2.6c.3-1 1.7-.9 1.9.1l1.2 5.7c.2 1-.9 1.7-1.7 1.1l-4.6-3.5c-.8-.6-.5-1.9.5-2l2.7-1.4zm7.7 8.2c1-.2 1.7 1 1 1.8l-2.6 2.8c-.7.7-1.9.2-1.9-.8l.1-3c0-.7.6-1.2 1.3-1.1l2.1.3zm-1.1 7.9c.9.5.5 1.9-.5 1.9l-3.8-.2c-1 0-1.4-1.3-.6-1.9l2.9-2.3c.6-.4 1.4-.3 1.7.4l.3 2.1zm-7.5 1.2c0 1-1.2 1.5-1.9.8l-2.7-2.7c-.7-.7-.2-1.9.8-1.9l3 .1c.7 0 1.2.6 1.1 1.3l-.3 2.4zm-5.2-6.5c-1 .3-1.8-.9-1.2-1.7L7.9 8c.6-.8 1.9-.4 1.9.6l.1 4.6c0 .7-.7 1.2-1.4 1l-1.7-.8z" />
  </svg>
)