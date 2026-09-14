<?php

/**
 * Fotos de servicio entregadas por el cliente, subidas a la biblioteca de medios
 * (uploads/2026/09/, ya con tamaños responsive generados por WP). Keyeadas por el
 * mismo slug que usan las URLs /services/[slug]/ (ver navigation.js y los templates).
 * "additional-services" queda sin foto por ahora — no fue entregada.
 */
function cmj_service_images() {
  static $images = null;
  if ($images === null) {
    $base = content_url('/uploads/2026/09/');
    $images = array(
      'kitchen'               => $base . 'KitchenCabinets-scaled.webp',
      'closet'                => $base . 'CustomClosets-scaled.webp',
      'bar-cabinets'          => $base . 'BarCabinets.webp',
      'bathroom-vanity'       => $base . 'BathroomVanities-scaled.webp',
      'garages'               => $base . 'GarageCabinets.webp',
      'murphy-beds'           => $base . 'MurphyBeds-scaled.webp',
      'laundry-room'          => $base . 'LaundryRoom.webp',
      'entertainment-centers' => $base . 'EntertaimentCenters-scaled.webp',
    );
  }
  return $images;
}

/**
 * Contenido de las 9 páginas individuales de servicio (/services/[slug]/), todas
 * usando el mismo service-template.php — indexado por el mismo slug que
 * cmj_service_images() y navigation.js, para no repetir la lista de servicios
 * en un cuarto lugar. Un array central en vez de 9 archivos casi idénticos:
 * mismo criterio que ya usa el resto del sitio (arrays de datos + loop).
 */
function cmj_service_details() {
  static $details = null;
  if ($details === null) {
    $details = array(
      'kitchen' => array(
        'title'    => 'Kitchen Cabinets',
        'tagline'  => 'The heart of your home, built to order.',
        'intro'    => "Custom kitchen cabinetry designed and built in our own Los Angeles workshop. No stock sizes, no warehouse shelves — every layout, finish, and detail is planned around how you actually use your kitchen.",
        'features' => array(
          'Full custom layouts, not modular stock pieces',
          'Soft-close hinges and drawers standard on every project',
          'Any wood, finish, or hardware you choose',
          'Islands, pantries, and specialty storage built in',
        ),
        'faqs' => array(
          array('q' => 'Can you work around my existing kitchen layout?', 'a' => "Yes — we design around your existing plumbing, electrical, and footprint unless you're doing a full remodel."),
          array('q' => 'Do you install countertops too?', 'a' => 'We build and install the cabinetry; we can coordinate with your countertop fabricator or recommend one we trust.'),
        ),
      ),
      'closet' => array(
        'title'    => 'Custom Closets',
        'tagline'  => 'Storage that feels like furniture.',
        'intro'    => "Walk-in and reach-in closet systems built to fit your space exactly, not adjusted to fit a pre-made kit. We design around what you actually own, from shoes to seasonal storage.",
        'features' => array(
          'Walk-in and reach-in systems, any size room',
          'Built-in drawers, shelving, and hanging space',
          'Maximizes every inch, including awkward corners',
          'Finish matched to the rest of your home',
        ),
        'faqs' => array(
          array('q' => 'Walk-in or reach-in — which is better for my space?', 'a' => "It depends on your room. We'll help you decide during the design visit, and can build either, or both, in the same home."),
          array('q' => 'Can you work with an odd-shaped room or low ceiling?', 'a' => 'Yes — every closet is designed around your exact space, awkward angles included.'),
        ),
      ),
      'bar-cabinets' => array(
        'title'    => 'Bar Cabinets',
        'tagline'  => 'Built for entertaining.',
        'intro'    => "Home bars and wine storage designed for how you host — whether that's a full wet bar for parties or a quiet wine wall for two. Built and installed by our own team, start to finish.",
        'features' => array(
          'Wine racks, glass storage, and display shelving',
          'Built-in beverage centers and mini-fridge cutouts',
          'Custom counters, backsplash, and lighting',
          'Indoor bars or outdoor-ready builds',
        ),
        'faqs' => array(
          array('q' => 'Can you build in a wine fridge or mini-fridge?', 'a' => 'Yes, we design the cutout, ventilation, and surrounding cabinetry for any beverage appliance you want built in.'),
          array('q' => 'Do you build outdoor bars?', 'a' => "We can, for covered outdoor spaces — ask us about weather-resistant material options during your estimate."),
        ),
      ),
      'bathroom-vanity' => array(
        'title'    => 'Bathroom Vanities',
        'tagline'  => 'Your exact size, your exact style.',
        'intro'    => "Single and double vanities built to your bathroom's exact dimensions, in materials made to handle daily moisture without warping or swelling.",
        'features' => array(
          'Single and double vanity builds',
          'Moisture-resistant materials built for bathrooms',
          'Custom drawer and storage layouts',
          'Any finish, matched to your existing fixtures',
        ),
        'faqs' => array(
          array('q' => 'Can I get a custom size for a small bathroom?', 'a' => 'Yes — every vanity, single or double, is built to your exact dimensions, not a standard size.'),
          array('q' => 'What materials hold up best to bathroom moisture?', 'a' => "We use moisture-resistant materials built for daily bathroom use, and we'll walk you through the options during your estimate."),
        ),
      ),
      'garages' => array(
        'title'    => 'Garage Cabinets',
        'tagline'  => 'Turns chaos into order.',
        'intro'    => "Heavy-duty garage storage systems built to hold tools, gear, and everything else that ends up on the floor. Wall cabinets, overhead storage, and workbenches, all built in-house.",
        'features' => array(
          'Heavy-duty storage systems built for real use',
          'Wall-mounted and overhead cabinet options',
          'Built to handle tools, gear, and equipment',
          'Reclaim your garage floor for parking again',
        ),
        'faqs' => array(
          array('q' => 'Will the cabinets hold up in a non-climate-controlled garage?', 'a' => 'Yes — our garage systems use heavy-duty, garage-rated materials built to handle temperature swings and daily use.'),
          array('q' => 'Can you build around my existing workbench or tools?', 'a' => 'Yes, we design around what you already have and how you actually use the space.'),
        ),
      ),
      'murphy-beds' => array(
        'title'    => 'Murphy Beds',
        'tagline'  => 'A guest room that disappears.',
        'intro'    => "Built-in wall-bed systems that turn a home office, den, or playroom into a real guest room in seconds, and back again just as fast.",
        'features' => array(
          'Built-in wall-bed systems, any room',
          'Paired with desks, shelving, or storage cabinets',
          'Smooth, easy-lift hardware built to last',
          'Turns any room into a guest room on demand',
        ),
        'faqs' => array(
          array('q' => 'Does the Murphy bed come with a desk or shelving?', 'a' => 'It can — we pair Murphy beds with desks, shelving, or storage cabinets depending on the room and how you use it.'),
          array('q' => 'What size mattresses do you build for?', 'a' => 'Any standard size, twin to king — the cabinet is built around your mattress, not the other way around.'),
        ),
      ),
      'laundry-room' => array(
        'title'    => 'Laundry Room',
        'tagline'  => 'Cabinets that make laundry day easier.',
        'intro'    => "Laundry room cabinetry built around your washer and dryer, with the folding counters, hanging space, and hidden hamper storage that make the whole room work harder.",
        'features' => array(
          'Folding counters and hanging rods',
          'Concealed hamper and supply storage',
          'Built around your exact washer and dryer',
          'Durable, easy-clean finishes for daily use',
        ),
        'faqs' => array(
          array('q' => 'Can you fit cabinets around my washer and dryer?', 'a' => 'Yes — we measure your exact appliances and build the cabinetry around them, not the other way around.'),
          array('q' => 'Do you include a folding counter?', 'a' => "Folding counters and hanging rods are common additions — we'll design one into your layout if there's room."),
        ),
      ),
      'entertainment-centers' => array(
        'title'    => 'Entertainment Centers &amp; Bookcases',
        'tagline'  => 'Media walls and bookcases built around your room.',
        'intro'    => "Built-in entertainment centers and bookcases designed around your TV, your layout, and your storage needs, not a one-size-fits-all box from a warehouse.",
        'features' => array(
          'Built-in TV walls, sized to your space',
          'Floating shelves and display niches',
          'Concealed wiring and media storage',
          'Designed around your room, not a standard box',
        ),
        'faqs' => array(
          array('q' => 'Can you build in a fireplace or soundbar?', 'a' => 'Yes, we design around your TV, fireplace, and audio equipment as part of the same build.'),
          array('q' => 'Do you conceal the wiring?', 'a' => 'Concealed wiring and hidden media storage are standard on our entertainment center builds.'),
        ),
      ),
      'additional-services' => array(
        'title'    => 'Additional Services',
        'tagline'  => "If it's built to fit, we build it.",
        'intro'    => "Pantries, mudrooms, built-in wardrobes, custom doors, and millwork — if it's a custom cabinetry or built-in project for your home, our team can design and build it.",
        'features' => array(
          'Pantries, mudrooms, and built-in wardrobes',
          'Custom doors, trim, and millwork',
          'Specialty storage for any room in the house',
          'Have something else in mind? Just ask.',
        ),
        'faqs' => array(
          array('q' => "What if my project doesn't fit any of your listed services?", 'a' => "Just ask — pantries, mudrooms, wardrobes, doors, and millwork are all things we build regularly, even if they're not on the main list."),
          array('q' => 'Do you take on small projects, like a single built-in shelf?', 'a' => 'Yes, we take on projects of any size, from a single piece to a whole-home renovation.'),
        ),
      ),
    );
  }
  return $details;
}

/**
 * FAQs genéricas de la empresa (para las específicas de cada servicio, ver
 * cmj_service_details()[slug]['faqs']). Vivían hardcodeadas en el S10 de
 * home-template.php; ahora un array central para que about-template.php
 * pueda usar las mismas 6 preguntas sin repetirlas — mismo criterio de
 * "fuente única" que el resto de este archivo (ver [[theme-architecture]]).
 */
function cmj_faqs() {
  static $faqs = null;
  if ($faqs === null) {
    $cfg = cmj_config();
    $faqs = array(
      array(
        'q' => 'Do you offer free estimates?',
        'a' => 'Yes. We visit your home, take exact measurements, and walk you through design options at no cost and with no obligation.',
      ),
      array(
        'q' => 'How long does a custom cabinet project take?',
        'a' => 'Most kitchens and closets take 4–8 weeks from final measurements to install, depending on scope. We give you a firm timeline once the design is locked in.',
      ),
      array(
        'q' => 'Are you licensed and insured?',
        'a' => 'Yes, CMJ Cabinets is CSLB licensed ' . $cfg['cslb'] . ', BBB accredited, and fully insured. We handle design, fabrication, and installation with one accountable team.',
      ),
      array(
        'q' => 'Do you build the cabinets yourselves, or subcontract the work?',
        'a' => 'Everything is fabricated in our own Los Angeles workshop by our own craftsmen, and installed by our own team, not subcontractors. One company, start to finish.',
      ),
      array(
        'q' => 'What areas do you serve?',
        'a' => 'We are based in Los Angeles and serve homeowners within a 40–60 mile radius, including Los Angeles, Orange, San Bernardino, and Ventura counties.',
      ),
      array(
        'q' => 'Can I choose my own wood, finish, and hardware?',
        'a' => 'Absolutely. Every project is custom: you pick the wood species, finish, door style, and hardware, we build it to your exact space and style.',
      ),
    );
  }
  return $faqs;
}

/**
 * Fuente única de los datos del negocio (NAP, socials, CTA).
 * La usan tanto wp_localize_script (componentes React) como los templates PHP,
 * para no repetir el teléfono/dirección/etc. en dos lugares.
 */
function cmj_config() {
  static $cfg = null;
  if ($cfg === null) {
    $cfg = array(
      'homeUrl'  => home_url('/'),
      'logoUrl'  => content_url('/uploads/2026/09/CMJ_Cabinets_Una_Tinta_Positivo_Imagotipo-scaled-e1789071825136.png'),
      // Versión "negativo" (tinta blanca) para el footer, que tiene fondo oscuro (bg-ink) —
      // el logo positivo (tinta oscura) del navbar casi no se vería ahí.
      'footerLogoUrl' => content_url('/uploads/2026/09/CMJ-Cabinets-Una-Tinta-Negativo_Sello-scaled.png'),
      // Video de textura de madera en loop — fondo de la sección "Proceso" de Home
      // (ver .cmj-method-section en home-template.php). Ya no se usa en el footer
      // (ver footerPatternImgUrl más abajo, footer volvió al fondo sólido de los
      // Stats Band + el estampado nuevo). Antes había un patrón "liquid" (PNG
      // horneado desde un filtro SVG en vivo — feTurbulence/feDiffuseLighting —
      // que causaba jank real en scroll, ~30ms/frame con picos de 300ms+); se
      // quitó por completo. Un <video> lo decodifica/compone el hardware del
      // navegador, no recalcula nada en cada repaint de scroll — no debería
      // repetir ese problema.
      'footerVideoUrl' => content_url('/uploads/2026/09/rustic-wood-surface-texture-pan-background-animati-2026-01-28-03-57-11-utc.mp4'),
      // Mismo estampado nuevo que usamos en las secciones bg-cream (ver
      // .bg-cream.cmj-pattern-bg en index.css) — expuesto acá también porque el
      // footer es un componente React (Footer.js), no puede usar url() de CSS
      // condicionado a una clase Tailwind como el resto de secciones PHP.
      'footerPatternImgUrl' => content_url('/uploads/2026/09/Estampado-apoyo-scaled.png'),
      'phone'    => '(323) 971-1543',
      'phoneRaw' => '+13239711543',
      'email'    => 'info@cmjcabinets.com', // TODO: confirmar email real del cliente (Pendiente #3 del brief)
      'address'  => '3430 W 67th St, Los Angeles, CA',
      'hours'    => 'Mon–Fri 8:00 AM – 5:00 PM',
      'cslb'     => '#1020723',
      'mapsUrl'  => 'https://maps.app.goo.gl/mpWzfYDrpMPRXsSj9', // GBP de CMJ (del sitio actual)
      'mapsEmbedUrl' => 'https://maps.google.com/maps?q=3430+W+67th+St,+Los+Angeles,+CA&output=embed',
      'ctaUrl'   => home_url('/contact-us/'),
      'ctaLabel' => 'Free Estimate',
      'ctaHover' => "Let's Talk",
      'ctaVideoUrl' => content_url('/uploads/2026/09/VideoBackgroundCMJ.mp4'), // fondo de la cinta CTA final, en todas las páginas
      'contactVideoUrl' => content_url('/uploads/2026/09/LosAngeles.mp4'), // fondo del hero de la página Contact
      'serviceImages' => cmj_service_images(), // fotos por servicio, para el mega menu del Navbar (React)
      'ajaxUrl'  => admin_url('admin-ajax.php'), // ya no lo usa el Contact Form (ver EmailJS abajo), queda por si se necesita de vuelta
      'contactNonce' => wp_create_nonce('cmj_contact_form'),
      // Contact Form (React, ver ContactForm.js): envío 100% client-side vía EmailJS,
      // sin pasar por wp_mail()/wp_ajax — evita el problema de que wp_mail() "funcione"
      // (devuelve true) pero no entregue nada si el hosting no tiene SMTP configurado.
      // Cada submit manda DOS emails con la misma cuenta/servicio pero dos plantillas
      // distintas (IDs de la cuenta EmailJS del cliente):
      //   - emailjsContactTemplateId: notifica al negocio (To Email = la bandeja del
      //     negocio, fijo en la config de la plantilla en EmailJS, no viene del form).
      //   - emailjsAutoReplyTemplateId: confirmación automática al cliente que llenó
      //     el form (To Email debe ser {{email}} en la config de esa plantilla en
      //     EmailJS, para que le llegue al remitente y no al negocio).
      // Los parámetros que manda ContactForm.js a ambas plantillas: name, phone,
      // email, project_type, message.
      'emailjsServiceId'          => 'service_6pghqho',
      'emailjsContactTemplateId'   => 'template_ny2pyk3', // "ContactUS"
      'emailjsAutoReplyTemplateId' => 'template_ovutadc', // "AutoReply"
      'emailjsPublicKey'           => '2Sf5Td4wqarrSTvlY',
      'socials'  => array(
        'facebook'  => 'https://www.facebook.com/CMJCabinetsInc',
        'instagram' => 'https://www.instagram.com/cmjcabinetsinc/',
        'tiktok'    => 'https://www.tiktok.com/@cmjcabinetsinc',
        'bbb'       => 'https://www.bbb.org/us/ca/los-angeles/profile/custom-cabinets/cmj-cabinets-inc-1216-1000069521',
        'gmb'       => 'https://www.google.com/maps/place/CMJ+Cabinets,+Inc./@33.978004,-118.3321759,987m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80c2b7c0e503d14b:0x89670e0cdaa8b1a5!8m2!3d33.978004!4d-118.3321759!16s%2Fg%2F11jgcjx61l?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D',
      ),
    );
  }
  return $cfg;
}

/**
 * Tipografía institucional (brief Parte 5.2): Miranda Sans para todo el sitio,
 * titulares (H1/H2, --font-display) y cuerpo (--font-sans) — antes los
 * titulares usaban Syncopate, ahora unificado a pedido del cliente. Google
 * Font de uso libre; solo trae el peso Regular (400), así que cualquier
 * negrita (font-bold) sobre ella queda como "faux bold" del navegador.
 */
function cmj_add_resource_hints($hints, $relation_type) {
  if ('preconnect' === $relation_type) {
    $hints[] = array('href' => 'https://fonts.gstatic.com', 'crossorigin');
  }
  return $hints;
}
add_filter('wp_resource_hints', 'cmj_add_resource_hints', 10, 2);

function cmj_load_assets() {
  wp_enqueue_style(
    'cmj-google-fonts',
    'https://fonts.googleapis.com/css2?family=Miranda+Sans&display=swap',
    array(),
    null
  );

  // Versionado dinámico con filemtime para evitar caché de assets
  $js_path  = get_theme_file_path('/build/index.js');
  $css_path = get_theme_file_path('/build/index.css');

  wp_enqueue_script(
    'cmjmainjs',
    get_theme_file_uri('/build/index.js'),
    array('wp-element', 'react-jsx-runtime'),
    file_exists($js_path) ? filemtime($js_path) : null,
    true
  );

  wp_enqueue_style(
    'cmjmaincss',
    get_theme_file_uri('/build/index.css'),
    array(),
    file_exists($css_path) ? filemtime($css_path) : null
  );

  // Config global para los componentes React
  wp_localize_script('cmjmainjs', 'cmjConfig', cmj_config());
}

add_action('wp_enqueue_scripts', 'cmj_load_assets');

/**
 * Handler del Contact Form (componente React, ver src/scripts/ContactForm.js).
 * Sin plugin de formularios: valida, filtra el honeypot y manda el lead por
 * wp_mail() a cmj_config()['email']. Requiere que el hosting tenga correo
 * saliente configurado (SMTP) para entregar de verdad — en local normalmente
 * wp_mail() devuelve true pero no llega a ningún lado.
 */
function cmj_handle_contact_form() {
  check_ajax_referer('cmj_contact_form', 'nonce');

  $name    = isset($_POST['name']) ? sanitize_text_field(wp_unslash($_POST['name'])) : '';
  $phone   = isset($_POST['phone']) ? sanitize_text_field(wp_unslash($_POST['phone'])) : '';
  $email   = isset($_POST['email']) ? sanitize_email(wp_unslash($_POST['email'])) : '';
  $project = isset($_POST['projectType']) ? sanitize_text_field(wp_unslash($_POST['projectType'])) : '';
  $message = isset($_POST['message']) ? sanitize_textarea_field(wp_unslash($_POST['message'])) : '';

  if ($name === '' || $phone === '' || $message === '' || !is_email($email)) {
    wp_send_json_error(array('message' => 'Please fill in your name, phone, a valid email, and a short message.'), 400);
  }

  $cfg = cmj_config();
  $subject = sprintf('New estimate request from %s', $name);
  $body = "Name: $name\n" .
    "Phone: $phone\n" .
    "Email: $email\n" .
    'Project type: ' . ($project !== '' ? $project : '(not specified)') . "\n\n" .
    "Message:\n$message";
  $headers = array('Reply-To: ' . $name . ' <' . $email . '>');

  $sent = wp_mail($cfg['email'], $subject, $body, $headers);

  if ($sent) {
    wp_send_json_success(array('message' => "Thanks! We'll get back to you within one business day."));
  } else {
    wp_send_json_error(array('message' => 'Something went wrong sending your message. Please call or email us directly.'), 500);
  }
}
add_action('wp_ajax_cmj_contact_form', 'cmj_handle_contact_form');
add_action('wp_ajax_nopriv_cmj_contact_form', 'cmj_handle_contact_form');

function cmj_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'cmj_add_support');
