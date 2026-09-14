<?php
/**
 * Template Name: Contact Template
 * Brief: Parte 4.15 (Contact). Asignar a la página /contact-us vía
 * Page Attributes → Template en el editor.
 *
 * SEO Title: Free Estimate | Contact CMJ Cabinets Los Angeles | (323) 971-1543
 * Meta description: Get a free custom cabinet estimate. Call (323) 971-1543 or send
 * your project details — we reply within one business day. Serving Greater LA.
 * TODO: conectar SEO Title / meta description a un plugin SEO (Yoast/RankMath) cuando se instale.
 *
 * Nota dev: el formulario (#cmj-contact-form) es el componente React "Contact Form"
 * (ver src/scripts/ContactForm.js). El markup dentro de #cmj-contact-form es un
 * fallback estático (teléfono/email) por si JS no carga; en cuanto React monta,
 * reemplaza el contenido del div (igual que Navbar/Footer).
 */

$cfg = cmj_config();

get_header(); ?>

<main>

  <!-- ===== HERO: video de fondo (LosAngeles.mp4) + headline (izquierda) + Contact
       Form flotando (derecha) =====
       Mismo patrón de overlay ebano que el resto del sitio (hero de Home, cintas
       CTA) para que el texto claro se lea bien encima del video. El form pasa a la
       variante "glass" (igual que #cmj-contact-form-hero en el hero de Home) porque
       ahora flota sobre un fondo oscuro, no sobre el cmj-wood-bg sólido. -->
  <section class="relative overflow-hidden">
    <video
      class="cmj-cta-video absolute inset-0 w-full h-full object-cover"
      src="<?php echo esc_url($cfg['contactVideoUrl']); ?>"
      autoplay
      muted
      loop
      playsinline
      aria-hidden="true"
    ></video>
    <div class="absolute inset-0 bg-linear-to-b from-ebano/80 via-ebano/70 to-ebano/85"></div>
    <div class="cmj-cta-video-mask" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

      <!-- Columna izquierda: headline + contacto directo -->
      <div class="text-center lg:text-left">
        <h1 class="text-4xl sm:text-5xl font-normal tracking-wide text-paper">Let's Build Something Great Together</h1>
        <p class="mt-4 text-lg text-cream/80 max-w-xl mx-auto lg:mx-0">Tell us about your project and we'll get back to you with a free estimate. No pressure, no obligation.</p>
        <div class="mt-8 flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-8 lg:gap-3 items-center lg:items-start justify-center">
          <a href="tel:<?php echo esc_attr($cfg['phoneRaw']); ?>" class="flex items-center gap-3 text-cream font-medium hover:text-tan transition-colors">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z"/></svg>
            <?php echo esc_html($cfg['phone']); ?>
          </a>
          <a href="mailto:<?php echo esc_attr($cfg['email']); ?>" class="flex items-center gap-3 text-cream font-medium hover:text-tan transition-colors">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
            <?php echo esc_html($cfg['email']); ?>
          </a>
        </div>
      </div>

      <!-- Columna derecha: Contact Form (React, variante glass), con efecto de levitación -->
      <div class="relative cmj-form-levitate">
        <div id="cmj-contact-form-hero">
          <!-- Fallback estático hasta que el componente React monte -->
          <div class="rounded-lg bg-paper/10 backdrop-blur-md border border-paper/20 shadow-2xl p-8">
            <h2 class="text-xl font-semibold text-paper mb-2">Request Your Free Estimate</h2>
            <p class="text-cream/80 text-sm mb-6">Loading the form… if it doesn't appear, reach us directly and we'll get back to you within one business day.</p>
            <div class="space-y-3">
              <a href="tel:<?php echo esc_attr($cfg['phoneRaw']); ?>" class="flex items-center gap-3 text-cream font-medium hover:text-tan transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z"/></svg>
                <?php echo esc_html($cfg['phone']); ?>
              </a>
              <a href="mailto:<?php echo esc_attr($cfg['email']); ?>" class="flex items-center gap-3 text-cream font-medium hover:text-tan transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
                <?php echo esc_html($cfg['email']); ?>
              </a>
            </div>
          </div>
        </div>
        <div class="cmj-form-shadow cmj-form-shadow--glow" aria-hidden="true"></div>
      </div>
    </div>
  </section>

  <!-- ===== INFO: NAP + horario + mapa + redes =====
       Pedido explícito del cliente: sin estampado (fondo blanco con
       degradado gris sutil, mismo criterio que S3/S8 de home), mapa más
       grande a la izquierda, datos de contacto a la derecha con íconos de
       redes sociales.
       Dirección/horario/teléfono/redes van todos DENTRO de una sola card
       (pedido explícito: "todo esta sección está buena en una card") en
       vez de 3 cards separadas — divide-y para los separadores internos en
       vez de gap+borde en cada fila. Esa card (una sola) + el mapa usan el
       mismo efecto de sombra/float "como si levitaran" que ya usan las
       cards de mapa de locations-template.php (.cmj-form-levitate +
       .cmj-form-shadow, ver index.css): sombra propia + float lento, con un
       wrapper SIN overflow-hidden alrededor de la card de esquinas
       redondeadas (si no, la sombra de "piso" se corta).
       Íconos de redes: mismos paths que FacebookIcon/InstagramIcon/etc. en
       src/scripts/Icons.js — se duplican acá a propósito (no se pueden
       importar desde PHP) porque el Footer es React y este template no lo
       es, ver [[theme-architecture]]. -->
  <?php
  $social_icons = array(
    array('key' => 'facebook', 'label' => 'Facebook', 'viewBox' => '0 0 24 24', 'path' => 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z'),
    array('key' => 'instagram', 'label' => 'Instagram', 'viewBox' => '0 0 24 24', 'path' => 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 00-2.13 1.38A5.88 5.88 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.88 5.88 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 002.13-1.38 5.88 5.88 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 00-1.38-2.13A5.88 5.88 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z'),
    array('key' => 'tiktok', 'label' => 'TikTok', 'viewBox' => '0 0 24 24', 'path' => 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.36a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.4z'),
    array('key' => 'bbb', 'label' => 'BBB', 'viewBox' => '0 0 50 50', 'path' => 'M 9.2832031 4 C 7.488935 4 5.9052102 5.2051958 5.4277344 6.9355469 L 2 19.365234 L 2 19.5 C 2 23.078268 4.9217323 26 8.5 26 C 10.813035 26 12.845511 24.77516 13.998047 22.945312 C 15.146939 24.778014 17.180833 26 19.5 26 C 21.819167 26 23.853061 24.778014 25.001953 22.945312 C 26.154489 24.77516 28.186965 26 30.5 26 C 32.813993 26 34.847721 24.77447 36 22.943359 C 37.152279 24.77447 39.186007 26 41.5 26 C 45.078268 26 48 23.078268 48 19.5 L 48 19.365234 L 44.570312 6.9355469 C 44.092963 5.2056548 42.509782 4 40.714844 4 L 9.2832031 4 z M 9.2832031 6 L 14.851562 6 L 13.197266 18 L 4.4511719 18 L 7.3554688 7.46875 C 7.5959929 6.597101 8.3794712 6 9.2832031 6 z M 26 6 L 33.128906 6 L 34.783203 18 L 26 18 L 26 6 z M 15 18 L 24 18 L 24 19.5 C 24 19.668891 24.012611 19.834272 24.025391 20 L 15 20 L 15 19.5 L 15 18 z M 36.802734 18 L 45.548828 18 L 45.984375 19.580078 C 45.981749 19.724009 45.951091 19.859765 45.935547 20 L 37.050781 20 C 37.032383 19.833631 37 19.67153 37 19.5 L 37 19.431641 L 36.802734 18 z M 4.0644531 20 L 12.949219 20 C 12.699714 22.256206 10.826202 24 8.5 24 C 6.175282 24 4.3143567 22.254621 4.0644531 20 z M 26.099609 20 L 34.900391 20 C 34.642986 22.247621 32.820142 24 30.5 24 C 28.179858 24 26.357014 22.247621 26.099609 20 z M 14 25.974609 C 12.517 27.235609 10.599 28 8.5 28 C 6.845 28 5.306 27.519172 4 26.701172 L 4 43 C 4 44.654 5.346 46 7 46 L 43 46 C 44.654 46 46 44.654 46 43 L 46 26.701172 C 44.694 27.519172 43.155 28 41.5 28 C 39.401 28 37.483 27.235609 36 25.974609 C 34.517 27.235609 32.599 28 30.5 28 C 28.401 28 26.483 27.235609 25 25.974609 C 23.517 27.235609 21.599 28 19.5 28 C 17.401 28 15.483 27.235609 14 25.974609 z M 35.5 29 C 37.546 29 39.372453 29.952547 40.564453 31.435547 L 39.132812 32.867188 C 38.314813 31.740187 36.996 31 35.5 31 C 33.019 31 31 33.019 31 35.5 C 31 37.981 33.019 40 35.5 40 C 37.453 40 39.102609 38.742 39.724609 37 L 36 37 L 36 35 L 41.974609 35 C 41.986609 35.166 42 35.331 42 35.5 C 42 39.084 39.084 42 35.5 42 C 31.916 42 29 39.084 29 35.5 C 29 31.916 31.916 29 35.5 29 z'),
    array('key' => 'gmb', 'label' => 'Google Business Profile', 'viewBox' => '0 0 30 30', 'path' => 'M11.166 20.194c.806.577 2.809 1.923 3.222 2.358.412.435.023 1.099.023 1.099l.618.252c.137-.298.962-1.397 1.511-2.084.496-.62.926-1.706.941-2.503.047-2.572-3.367-3.794-4.949-5.237-.778-.71-.16-1.122-.16-1.122l-.527-.343C9.808 14.926 7.662 17.686 11.166 20.194zM12.922 11.605c1.969 1.74 5.435 3.548 5.679 4.717.318 1.523-.412 2.382-.412 2.382l.394.321c.213-.304.451-.591.67-.891.892-1.222 1.752-2.463 2.629-3.695 2.004-2.818 1.254-5.49-1.765-7.648-1.537-1.098-3.032-2.26-4.584-3.339-.871-.733-.275-2.107-.275-2.107l-.367-.32c0 0-3.286 3.984-3.573 5.588C11.045 8.148 10.953 9.865 12.922 11.605zM23 27L22.341 25 7.659 25 7 27 11.19 27 11.822 29 18.217 29 18.816 27z'),
  );
  ?>
  <section class="bg-linear-to-b from-paper to-silver/10">
    <div class="max-w-6xl mx-auto px-4 py-16 sm:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        <!-- Mapa, más grande -->
        <div class="relative cmj-form-levitate order-2 lg:order-1">
          <div class="h-80 sm:h-104 overflow-hidden rounded-md">
            <iframe
              src="<?php echo esc_url($cfg['mapsEmbedUrl']); ?>"
              class="w-full h-full border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="CMJ Cabinets location map"
            ></iframe>
          </div>
          <div class="cmj-form-shadow" aria-hidden="true"></div>
        </div>

        <!-- Datos de contacto + redes sociales: una sola card -->
        <div class="relative cmj-form-levitate order-1 lg:order-2">
          <div class="rounded-md border border-ink/10 bg-paper divide-y divide-ink/10">
            <div class="flex items-start gap-3 p-5">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="text-tan mt-0.5 shrink-0"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span class="text-ink/80"><?php echo esc_html($cfg['address']); ?></span>
            </div>
            <div class="flex items-start gap-3 p-5">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="text-tan mt-0.5 shrink-0"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <span class="text-ink/80"><?php echo esc_html($cfg['hours']); ?></span>
            </div>
            <a href="tel:<?php echo esc_attr($cfg['phoneRaw']); ?>" class="group flex items-start gap-3 p-5">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="text-tan mt-0.5 shrink-0"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z"/></svg>
              <span class="text-ink/80 group-hover:text-tan-2 transition-colors"><?php echo esc_html($cfg['phone']); ?></span>
            </a>
            <div class="flex items-center gap-4 p-5">
              <?php foreach ($social_icons as $s) : ?>
                <a
                  href="<?php echo esc_url($cfg['socials'][$s['key']]); ?>"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="<?php echo esc_attr($s['label']); ?>"
                  class="text-tan-2 hover:text-tan transition-colors"
                >
                  <svg viewBox="<?php echo esc_attr($s['viewBox']); ?>" width="18" height="18" fill="currentColor" stroke="none"><path d="<?php echo esc_attr($s['path']); ?>"/></svg>
                </a>
              <?php endforeach; ?>
            </div>
          </div>
          <div class="cmj-form-shadow" aria-hidden="true"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== BADGES =====
       Pedido explícito del cliente: mismo degradado y marquee continuo que
       ya usan el trust bar de home y los badges de About (.cmj-marquee-track
       + bg-linear-to-b from-ink to-ebano) en vez de una fila estática. Ver
       la nota larga de este mismo patrón en about-template.php. -->
  <?php
  $badges = array('BBB Accredited', 'Google Top Rated', '5★ Rated on Yelp', 'CSLB Licensed ' . $cfg['cslb']);
  $badges_group = array_merge($badges, $badges, $badges, $badges);
  ?>
  <section class="bg-linear-to-b from-ink to-ebano overflow-hidden">
    <div class="cmj-marquee-track flex w-max py-8">
      <?php for ($i = 0; $i < 2; $i++) : ?>
        <div
          class="flex items-center flex-nowrap gap-4 pr-4 shrink-0"
          <?php echo $i === 1 ? 'aria-hidden="true"' : ''; ?>
        >
          <?php foreach ($badges_group as $badge) : ?>
            <span class="shrink-0 px-5 py-2.5 rounded-md border border-paper/20 text-cream/90 text-sm font-medium whitespace-nowrap"><?php echo esc_html($badge); ?></span>
          <?php endforeach; ?>
        </div>
      <?php endfor; ?>
    </div>
  </section>

  <!-- ===== BLOQUE TALLER ===== -->
  <section class="bg-cream cmj-pattern-bg">
    <div class="max-w-3xl mx-auto px-4 py-14 text-center">
      <h2 class="text-2xl font-normal tracking-wide text-ink">Prefer to See Our Work in Person?</h2>
      <p class="mt-3 text-ink/70">Visit our workshop and plan your project with us face to face.</p>
      <!-- Nota dev: dirección del taller confirmada (Pendiente #2 del brief resuelto) — ver cfg['address'] en functions.php. -->
    </div>
  </section>

</main>

<script>
(function () {
  // Máscara del loop del video de fondo del hero (ver .cmj-cta-video-mask en
  // index.css) — mismo patrón que la cinta CTA final del resto del sitio, por
  // si el archivo no cierra el loop de forma perfectamente limpia.
  var video = document.querySelector('.cmj-cta-video');
  var mask = document.querySelector('.cmj-cta-video-mask');
  if (!video || !mask) return;

  var DIP_BEFORE = 0.35; // s antes del final del clip: empieza a oscurecer
  var HOLD_AFTER = 150;  // ms después del reinicio: espera antes de revelar
  var lastTime = 0;

  video.addEventListener('timeupdate', function () {
    var t = video.currentTime;

    if (video.duration && t >= video.duration - DIP_BEFORE) {
      mask.classList.add('is-active');
    }

    // El tiempo saltó hacia atrás: el <video loop> se reinició (el corte ya pasó).
    if (t < lastTime - 0.5) {
      setTimeout(function () {
        mask.classList.remove('is-active');
      }, HOLD_AFTER);
    }

    lastTime = t;
  });
})();
</script>

<?php get_footer(); ?>
