<?php
/**
 * Template Name: Services Template
 * Brief: Parte 4.3 (Services overview). Asignar a la página /services vía
 * Page Attributes → Template en el editor.
 *
 * SEO Title: Custom Cabinetry Services in Los Angeles | CMJ Cabinets
 * Meta description: Custom kitchens, closets, home bars, vanities, garage cabinets,
 * Murphy beds & more. One team — design, build & install. Serving Greater Los Angeles.
 * TODO: conectar SEO Title / meta description a un plugin SEO (Yoast/RankMath) cuando se instale.
 *
 * Objetivo: hub de navegación hacia las 9 páginas de servicio, ordenado por % de
 * ingreso (brief Parte 1.3 / 4.3).
 */

$cfg = cmj_config();
$service_images = cmj_service_images();

// "additional-services" no tiene foto todavía (no fue entregada) — cae al placeholder.
$services = array(
  array('title' => 'Kitchen Cabinets', 'copy' => 'The heart of your home, built to order.', 'url' => '/services/kitchen/', 'slug' => 'kitchen'),
  array('title' => 'Custom Closets', 'copy' => 'Storage that feels like furniture.', 'url' => '/services/closet/', 'slug' => 'closet'),
  array('title' => 'Bar Cabinets', 'copy' => 'Built for entertaining.', 'url' => '/services/bar-cabinets/', 'slug' => 'bar-cabinets'),
  array('title' => 'Bathroom Vanities', 'copy' => 'Your exact size, your exact style.', 'url' => '/services/bathroom-vanity/', 'slug' => 'bathroom-vanity'),
  array('title' => 'Garage Cabinets', 'copy' => 'Turns chaos into order.', 'url' => '/services/garages/', 'slug' => 'garages'),
  array('title' => 'Murphy Beds', 'copy' => 'A guest room that disappears.', 'url' => '/services/murphy-beds/', 'slug' => 'murphy-beds'),
  array('title' => 'Laundry Room', 'copy' => 'Cabinets that make laundry day easier.', 'url' => '/services/laundry-room/', 'slug' => 'laundry-room'),
  array('title' => 'Entertainment Centers &amp; Bookcases', 'copy' => 'Media walls and bookcases built around your room.', 'url' => '/services/entertainment-centers/', 'slug' => 'entertainment-centers'),
  array('title' => 'Additional Services', 'copy' => "Pantry, wardrobe, doors &amp; more. If it's built to fit, we build it.", 'url' => '/services/additional-services/', 'slug' => 'additional-services'),
);

get_header(); ?>

<main>

  <!-- ===== HERO (video de fondo, mismo criterio que el hero de About) ===== -->
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
      <h1 class="text-4xl sm:text-5xl font-normal tracking-wide text-paper">Custom Cabinetry for Every Room</h1>
      <p class="mt-4 text-lg text-cream/80">One team designs, builds, and installs every project, from the kitchen to the garage. Explore what we can build for you.</p>
    </div>
  </section>

  <!-- ===== TRUST BAR (bloque 3.1 del brief), marquee continuo =====
       Mismo criterio que el trust bar del hero de Home (.cmj-marquee-track,
       ver index.css): listado duplicado ×2 (el segundo con aria-hidden), y
       cada mitad repetida varias veces porque son solo 4 items cortos — con
       una sola vuelta la mitad medía menos que una pantalla ancha y se veía
       el hueco antes de que la otra mitad entrara. -->
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

  <!-- ===== GRID DE SERVICIOS (orden por % de ingreso) ===== -->
  <section class="bg-paper cmj-pattern-bg">
    <div class="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[1400px]">
        <?php foreach ($services as $service) :
          $img = isset($service_images[$service['slug']]) ? $service_images[$service['slug']] : null;
        ?>
          <a href="<?php echo esc_url(home_url($service['url'])); ?>" class="cmj-mega-card group relative overflow-hidden rounded-md border border-transparent aspect-[4/3]">
            <?php if ($img) : ?>
              <img
                src="<?php echo esc_url($img); ?>"
                alt="<?php echo esc_attr(wp_strip_all_tags($service['title'])); ?>"
                loading="lazy"
                class="cmj-mega-card__img absolute inset-0 w-full h-full object-cover"
              />
            <?php else : ?>
              <div class="cmj-mega-card__img cmj-wood-bg absolute inset-0"></div>
            <?php endif; ?>
            <div class="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"></div>
            <div class="relative h-full flex flex-col justify-end p-6">
              <h2 class="text-xl font-bold text-paper"><?php echo wp_kses_post($service['title']); ?></h2>
              <p class="mt-1 text-cream/85 text-sm"><?php echo wp_kses_post($service['copy']); ?></p>
              <span class="mt-3 inline-flex items-center gap-1.5 text-tan font-semibold text-sm">
                Learn More
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>
              </span>
            </div>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ===== CTA BAND (bloque 3.4 del brief) ===== -->
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

      // El tiempo saltó hacia atrás: el <video loop> se reinició (el corte ya pasó).
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
