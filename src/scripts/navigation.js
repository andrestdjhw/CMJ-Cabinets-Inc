// Fuente única de la navegación del sitio.
// Navbar y Footer leen de aquí para no repetir la lista de servicios en dos lugares.
export const NAV_ITEMS = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about/" },
  {
    label: "Services",
    url: "/services/",
    // Orden por % de ingreso, según brief (Parte 1.3 / 4.3).
    // URLs anidadas bajo /services/ — cada página debe tener "Services" como
    // Parent en Atributos de página (WP admin) para que la URL resuelva así.
    // slug = clave usada en cmj_config().serviceImages (PHP, functions.php) para
    // resolver la foto de cada servicio en el mega menu.
    children: [
      { label: "Kitchen Cabinets", url: "/services/kitchen/", slug: "kitchen" },
      { label: "Custom Closets", url: "/services/closet/", slug: "closet" },
      { label: "Bar Cabinets", url: "/services/bar-cabinets/", slug: "bar-cabinets" },
      { label: "Bathroom Vanities", url: "/services/bathroom-vanity/", slug: "bathroom-vanity" },
      { label: "Garage Cabinets", url: "/services/garages/", slug: "garages" },
      { label: "Murphy Beds", url: "/services/murphy-beds/", slug: "murphy-beds" },
      { label: "Laundry Room", url: "/services/laundry-room/", slug: "laundry-room" },
      { label: "Entertainment Centers", url: "/services/entertainment-centers/", slug: "entertainment-centers" },
      { label: "Additional Services", url: "/services/additional-services/", slug: "additional-services" },
    ],
  },
  { label: "Gallery", url: "/gallery/" },
  { label: "Locations", url: "/locations/" },
  { label: "Contact", url: "/contact-us/" },
]
