<?php
/**
 * Template Name: Locations Template
 * Reemplaza al link de "Testimonials" del navbar (esa página nunca existió —
 * era un link muerto a /testimonials/, ver navigation.js) por un hub de área
 * de servicio: un mapa de Google por cada condado que cubrimos, mismos 4 que
 * ya se mencionan en la sección "Proudly Serving Greater Los Angeles" de Home
 * (home-template.php) y en el footer del Contact — CMJ no tiene sucursales
 * por condado, es UN taller que atiende un radio de 40–60 millas; cada mapa
 * está centrado en el condado como referencia geográfica, no en una
 * dirección física distinta.
 *
 * Asignar a la página /locations vía Page Attributes → Template en el editor.
 *
 * SEO Title: Service Areas | Custom Cabinets Los Angeles, Orange, Ventura & San Bernardino
 * Meta description: CMJ Cabinets builds custom kitchens, closets & cabinetry for
 * homeowners across Los Angeles, Orange, San Bernardino, and Ventura counties.
 * TODO: conectar SEO Title / meta description a un plugin SEO (Yoast/RankMath) cuando se instale.
 */

$cfg = cmj_config();

$locations = array(
  array(
    'county' => 'Los Angeles County',
    'copy' => 'Our home base. Custom kitchens, closets, and cabinetry for homeowners from the Westside to the Valley.',
    'mapQuery' => 'Los Angeles County, CA',
  ),
  array(
    'county' => 'Orange County',
    'copy' => 'Custom cabinetry for OC homes, from Anaheim to Irvine to the coast, built in our LA workshop.',
    'mapQuery' => 'Orange County, CA',
  ),
  array(
    'county' => 'San Bernardino County',
    'copy' => 'Same craftsmanship, same in-house team — custom kitchens and closets for San Bernardino County homeowners.',
    'mapQuery' => 'San Bernardino County, CA',
  ),
  array(
    'county' => 'Ventura County',
    'copy' => 'Custom kitchens, closets, and built-ins for Ventura County homes, from Thousand Oaks to Oxnard.',
    'mapQuery' => 'Ventura County, CA',
  ),
);

get_header(); ?>

<main>

  <!-- ===== S1 — HERO (video de fondo, mismo criterio que About/Contact) ===== -->
  <section class="relative overflow-hidden bg-ink">
    <video
      class="cmj-cta-video absolute inset-0 w-full h-full object-cover"
      src="<?php echo esc_url($cfg['footerVideoUrl']); ?>"
      autoplay
      muted
      loop
      playsinline
      aria-hidden="true"
    ></video>
    <div class="absolute inset-0 bg-linear-to-b from-ebano/75 via-ebano/65 to-ebano/80"></div>
    <div class="cmj-cta-video-mask" aria-hidden="true"></div>
    <div class="relative max-w-3xl mx-auto px-4 py-16 sm:py-20 text-center">
      <p class="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-tan">Where We Work</p>
      <h1 class="mt-4 text-4xl sm:text-5xl font-normal tracking-wide text-paper">Proudly Serving Southern California</h1>
      <p class="mt-4 text-lg text-cream/85">
        Based in Los Angeles, we build and install custom cabinetry for homeowners within a 40–60 mile radius, across four counties.
      </p>
    </div>
  </section>

  <!-- ===== S2 — TRUST BAR, marquee continuo (mismo patrón que el resto del sitio) ===== -->
  <?php
  $trust_items = array(
    '19+ Years in Business',
    'CSLB Licensed ' . $cfg['cslb'],
    'BBB Accredited',
    'Family Owned & Operated',
  );
  $trust_items_group = array_merge($trust_items, $trust_items, $trust_items, $trust_items);
  ?>
  <div class="bg-cream cmj-pattern-bg border-y border-cream overflow-hidden">
    <div class="cmj-marquee-track flex w-max py-5">
      <?php for ($i = 0; $i < 2; $i++) : ?>
        <div
          class="flex items-center flex-nowrap gap-x-10 pr-10 shrink-0"
          <?php echo $i === 1 ? 'aria-hidden="true"' : ''; ?>
        >
          <?php foreach ($trust_items_group as $item) : ?>
            <div class="flex items-center gap-2 text-sm font-medium text-ink/80 whitespace-nowrap">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-tan shrink-0">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span><?php echo esc_html($item); ?></span>
            </div>
          <?php endforeach; ?>
        </div>
      <?php endfor; ?>
    </div>
  </div>

  <!-- ===== S3 — GRID DE CONDADOS, cada uno con su mapa de Google ===== -->
  <section class="bg-paper cmj-pattern-bg">
    <div class="max-w-6xl mx-auto px-4 py-16 sm:py-20">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-3xl sm:text-4xl font-normal tracking-wide text-ink">Our Service Area</h2>
        <p class="mt-3 text-ink/70">One workshop, one team — four counties. Wherever you are in the radius below, we design, build, and install in person.</p>
      </div>
      <!-- cmj-form-levitate + cmj-form-shadow: mismo efecto que ya usa el
           Contact Form (ver index.css) — sombra suave + flotación lenta. La
           sombra "de piso" (cmj-form-shadow) necesita un wrapper SIN
           overflow-hidden, si no se corta — por eso va afuera de la card con
           las esquinas redondeadas del mapa, no en el mismo div. -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <?php foreach ($locations as $location) : ?>
          <div class="relative cmj-form-levitate">
            <div class="rounded-md border border-ink/10 overflow-hidden">
              <div class="aspect-video">
                <iframe
                  src="<?php echo esc_url('https://maps.google.com/maps?q=' . rawurlencode($location['mapQuery']) . '&output=embed'); ?>"
                  class="w-full h-full border-0"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="<?php echo esc_attr($location['county']); ?> map"
                ></iframe>
              </div>
              <div class="p-6 bg-linear-to-b from-paper to-silver/20">
                <h3 class="text-xl font-semibold text-ink"><?php echo esc_html($location['county']); ?></h3>
                <p class="mt-2 text-ink/70 text-[15px] leading-relaxed"><?php echo esc_html($location['copy']); ?></p>
                <a
                  href="<?php echo esc_url('https://www.google.com/maps/search/?api=1&query=' . rawurlencode($location['mapQuery'])); ?>"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-4 inline-flex items-center gap-1.5 text-tan-2 font-semibold text-sm hover:text-tan transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Open in Google Maps
                </a>
              </div>
            </div>
            <div class="cmj-form-shadow" aria-hidden="true"></div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ===== S4 — CTA BAND (mismo patrón de video que el resto del sitio) ===== -->
  <section class="relative overflow-hidden bg-ink">
    <video
      class="cmj-cta-video absolute inset-0 w-full h-full object-cover"
      src="<?php echo esc_url($cfg['ctaVideoUrl']); ?>"
      autoplay
      muted
      loop
      playsinline
      aria-hidden="true"
    ></video>
    <div class="absolute inset-0 bg-linear-to-b from-ebano/75 via-ebano/65 to-ebano/80"></div>
    <div class="cmj-cta-video-mask" aria-hidden="true"></div>
    <div class="relative max-w-4xl mx-auto px-4 py-24 sm:py-32 text-center">
      <h2 class="text-3xl sm:text-4xl font-normal tracking-wide text-paper">Ready to Transform Your Home?</h2>
      <p class="mt-3 text-cream/70">Get a free, no-pressure estimate from our family to yours.</p>
      <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="<?php echo esc_url($cfg['ctaUrl']); ?>"
          class="cmj-cta flex items-center justify-center relative overflow-hidden w-[220px] h-[52px] bg-linear-to-b from-tan to-tan-2 text-paper text-[13px] font-semibold uppercase"
        >
          <span class="cmj-cta__frame" aria-hidden="true"></span>
          <p class="cmj-cta__label" data-title="<?php echo esc_attr($cfg['ctaLabel']); ?>" data-text="<?php echo esc_attr($cfg['ctaHover']); ?>"></p>
        </a>
        <a href="tel:<?php echo esc_attr($cfg['phoneRaw']); ?>" class="text-cream/80 hover:text-tan transition-colors text-sm font-medium">
          Or call <?php echo esc_html($cfg['phone']); ?>
        </a>
      </div>
    </div>
  </section>

</main>

<script>
(function () {
  // Máscara del loop de las cintas con video (ver .cmj-cta-video-mask en
  // index.css) — esta página tiene DOS videos (hero + cinta CTA final), así
  // que iteramos sobre todos los .cmj-cta-video en vez de tomar solo el
  // primero con querySelector — cada video busca su propia
  // .cmj-cta-video-mask vecina dentro de la misma <section>.
  var videos = document.querySelectorAll('.cmj-cta-video');

  videos.forEach(function (video) {
    var section = video.closest('section');
    var mask = section ? section.querySelector('.cmj-cta-video-mask') : null;
    if (!mask) return;

    var DIP_BEFORE = 0.35; // s antes del final del clip: empieza a oscurecer
    var HOLD_AFTER = 150;  // ms después del reinicio: espera antes de revelar
    var lastTime = 0;

    video.addEventListener('timeupdate', function () {
      var t = video.currentTime;

      if (video.duration && t >= video.duration - DIP_BEFORE) {
        mask.classList.add('is-active');
      }

      if (t < lastTime - 0.5) {
        setTimeout(function () {
          mask.classList.remove('is-active');
        }, HOLD_AFTER);
      }

      lastTime = t;
    });
  });
})();
</script>

<?php get_footer(); ?>
