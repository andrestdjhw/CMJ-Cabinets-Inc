<?php
/**
 * Template Name: Coming Soon Template
 * Página provisional SOLO para el dominio de producción: crear una página
 * "Coming Soon", asignarle este template y ponerla como portada en
 * Ajustes → Lectura → Página estática. En el dominio de desarrollo no se
 * asigna, así el cliente sigue viendo el sitio completo.
 *
 * Sin get_header()/get_footer() a propósito: el Navbar y el Footer (React)
 * solo montan si existen #cmj-navbar / #cmj-footer, que viven en header.php
 * y footer.php — acá no están, así que no aparecen. wp_head()/wp_footer() sí
 * se llaman (CSS del tema, <title>, barra de admin, plugins).
 */

// El bundle de React (Navbar/Footer/Contact Form) no tiene nada que montar
// en esta página — no lo cargamos.
add_action('wp_enqueue_scripts', function () {
  wp_dequeue_script('cmjmainjs');
}, 20);
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class('bg-ebano'); ?>>
    <main class="relative isolate flex min-h-svh items-center justify-center overflow-hidden px-4">
      <!-- Fondo con zoom in / zoom out continuo (ver .cmj-coming-soon-bg en index.css) -->
      <img
        src="<?php echo esc_url(content_url('/uploads/2026/09/CMJHero3-scaled.webp')); ?>"
        alt=""
        aria-hidden="true"
        fetchpriority="high"
        class="cmj-coming-soon-bg absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <!-- Mismo overlay ebano que el hero de Home, para que el texto claro se lea -->
      <div class="absolute inset-0 -z-10 bg-linear-to-b from-ebano/70 via-ebano/55 to-ebano/75" aria-hidden="true"></div>

      <h1 class="cmj-hero-text-shadow text-center text-5xl sm:text-7xl font-normal uppercase tracking-[0.2em] pl-[0.2em] text-paper">
        Coming Soon
      </h1>
    </main>
    <?php wp_footer(); ?>
  </body>
</html>
