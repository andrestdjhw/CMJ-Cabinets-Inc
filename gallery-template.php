<?php
/**
 * Template Name: Gallery Template
 * Brief: Parte 4.13 (Gallery, página nueva). Asignar a la página /gallery vía
 * Page Attributes → Template en el editor.
 *
 * SEO Title: Project Gallery | Custom Cabinets Los Angeles | CMJ Cabinets
 * Meta description: Browse real custom cabinet projects from Southern California
 * homes — kitchens, closets, bars, vanities & more by CMJ Cabinets.
 * TODO: conectar SEO Title / meta description a un plugin SEO (Yoast/RankMath) cuando se instale.
 *
 * Nota dev (brief): filtrado client-side con vanilla JS (sin componente React —
 * ver arquitectura del tema). Los 14 items ya tienen foto real (Pendiente #5
 * del brief resuelto): mismas que usa cmj_service_images(), algunas del
 * slideshow del hero de Home, y el resto subidas directo a /uploads. Un item
 * sin la key 'img' cae en placeholder de textura de madera automáticamente
 * (por si se agregan proyectos nuevos antes de tener su foto).
 * Si el volumen de fotos crece mucho, evaluar CPT 'project' con taxonomía por categoría.
 */

$cfg = cmj_config();
$service_images = cmj_service_images();

$filters = array(
  'all'         => 'All',
  'kitchens'    => 'Kitchens',
  'closets'     => 'Closets',
  'bars'        => 'Bars',
  'vanities'    => 'Vanities',
  'garages'     => 'Garages',
  'murphy-beds' => 'Murphy Beds',
  'more'        => 'More',
);

$gallery_items = array(
  array('category' => 'kitchens', 'title' => 'Custom Kitchen Cabinets', 'img' => $service_images['kitchen']),
  array('category' => 'kitchens', 'title' => 'Kitchen Island &amp; Pantry', 'img' => content_url('/uploads/2026/09/KitchenIslandPantry-scaled.webp')),
  array('category' => 'kitchens', 'title' => 'Shaker Style Kitchen', 'img' => content_url('/uploads/2026/09/ShakerStyleKitchen.webp')),
  array('category' => 'closets', 'title' => 'Walk-In Closet', 'img' => content_url('/uploads/2026/09/CMJHero1-scaled.webp')),
  array('category' => 'closets', 'title' => 'Reach-In Closet System', 'img' => $service_images['closet']),
  array('category' => 'bars', 'title' => 'Home Bar &amp; Wine Storage', 'img' => $service_images['bar-cabinets']),
  array('category' => 'bars', 'title' => 'Butler\'s Pantry Bar', 'img' => content_url('/uploads/2026/09/ButlersPantryBar-scaled.webp')),
  array('category' => 'vanities', 'title' => 'Double Bathroom Vanity', 'img' => $service_images['bathroom-vanity']),
  array('category' => 'vanities', 'title' => 'Floating Vanity', 'img' => content_url('/uploads/2026/09/FloatingVanity-scaled.webp')),
  array('category' => 'garages', 'title' => 'Garage Storage Wall', 'img' => $service_images['garages']),
  array('category' => 'murphy-beds', 'title' => 'Murphy Bed &amp; Desk Combo', 'img' => $service_images['murphy-beds']),
  array('category' => 'more', 'title' => 'Entertainment Center', 'img' => $service_images['entertainment-centers']),
  array('category' => 'more', 'title' => 'Home Office Built-Ins', 'img' => content_url('/uploads/2026/09/CMJHero2-scaled.webp')),
  array('category' => 'more', 'title' => 'Built-In Desk &amp; Lit Shelving', 'img' => content_url('/uploads/2026/09/CMJHero3-scaled.webp')),
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
    <div class="relative max-w-4xl mx-auto px-4 py-16 sm:py-20 text-center">
      <h1 class="text-4xl sm:text-5xl font-normal tracking-wide text-paper">Our Work Speaks for Itself</h1>
      <p class="mt-4 text-lg text-cream/80">Browse real projects from real Southern California homes. Filter by room to see what we can build for yours.</p>
    </div>
  </section>

  <!-- ===== FILTROS + GRID ===== -->
  <section class="bg-paper cmj-pattern-bg">
    <div class="max-w-7xl mx-auto px-4 py-14 sm:py-16">

      <div id="cmj-gallery-filters" class="flex flex-wrap justify-center gap-2 mb-10">
        <?php foreach ($filters as $slug => $label) : ?>
          <button
            type="button"
            data-filter="<?php echo esc_attr($slug); ?>"
            class="cmj-gallery-filter-btn px-4 py-2 rounded-md text-sm font-medium border border-ink/15 text-ink/70 hover:border-tan hover:text-tan-2 transition-colors <?php echo $slug === 'all' ? 'is-active bg-ink text-paper border-ink' : ''; ?>"
          >
            <?php echo esc_html($label); ?>
          </button>
        <?php endforeach; ?>
      </div>

      <div id="cmj-gallery-grid" class="columns-2 sm:columns-3 gap-4 [column-fill:_balance] perspective-[1400px]">
        <?php foreach ($gallery_items as $i => $item) :
          $img = isset($item['img']) ? $item['img'] : null;
        ?>
          <button
            type="button"
            class="cmj-gallery-item block w-full mb-4 break-inside-avoid text-left group"
            data-category="<?php echo esc_attr($item['category']); ?>"
            data-title="<?php echo esc_attr(wp_strip_all_tags($item['title'])); ?>"
            <?php if ($img) : ?>data-img="<?php echo esc_url($img); ?>"<?php endif; ?>
          >
            <span class="cmj-mega-card relative block w-full rounded-md border border-transparent <?php echo $i % 5 === 0 ? 'aspect-[3/4]' : 'aspect-square'; ?> overflow-hidden">
              <?php if ($img) : ?>
                <img
                  src="<?php echo esc_url($img); ?>"
                  alt="<?php echo esc_attr(wp_strip_all_tags($item['title'])); ?>"
                  loading="lazy"
                  class="cmj-mega-card__img absolute inset-0 w-full h-full object-cover"
                />
              <?php else : ?>
                <span class="cmj-mega-card__img cmj-wood-bg absolute inset-0"></span>
              <?php endif; ?>
              <span class="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors"></span>
              <span class="absolute bottom-0 left-0 right-0 p-3 text-xs font-medium text-ink/60 bg-paper/70"><?php echo wp_kses_post($item['title']); ?></span>
            </span>
          </button>
        <?php endforeach; ?>
      </div>

      <p id="cmj-gallery-empty" class="hidden text-center text-ink/50 py-16">No projects in this category yet. Check back soon.</p>
    </div>
  </section>

  <!-- ===== LIGHTBOX ===== -->
  <div
    id="cmj-gallery-lightbox"
    class="fixed inset-0 z-[60] bg-ink/90 hidden items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
    aria-hidden="true"
  >
    <button type="button" id="cmj-gallery-lightbox-close" aria-label="Close" class="absolute top-5 right-5 text-paper hover:text-tan transition-colors">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
    <div class="max-w-3xl w-full">
      <div class="relative rounded-md overflow-hidden aspect-video">
        <div id="cmj-gallery-lightbox-placeholder" class="cmj-wood-bg absolute inset-0"></div>
        <img id="cmj-gallery-lightbox-img" class="hidden absolute inset-0 w-full h-full object-cover" alt="" />
      </div>
      <p id="cmj-gallery-lightbox-title" class="mt-4 text-center text-paper text-sm font-medium"></p>
    </div>
  </div>

  <!-- ===== CTA BAND ===== -->
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
  var grid = document.getElementById('cmj-gallery-grid');
  var empty = document.getElementById('cmj-gallery-empty');
  var buttons = document.querySelectorAll('.cmj-gallery-filter-btn');
  var items = document.querySelectorAll('.cmj-gallery-item');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');

      buttons.forEach(function (b) {
        b.classList.remove('is-active', 'bg-ink', 'text-paper', 'border-ink');
      });
      btn.classList.add('is-active', 'bg-ink', 'text-paper', 'border-ink');

      var visibleCount = 0;
      items.forEach(function (item) {
        var match = filter === 'all' || item.getAttribute('data-category') === filter;
        item.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });

      grid.classList.toggle('hidden', visibleCount === 0);
      empty.classList.toggle('hidden', visibleCount !== 0);
    });
  });

  // Lightbox
  var lightbox = document.getElementById('cmj-gallery-lightbox');
  var lightboxTitle = document.getElementById('cmj-gallery-lightbox-title');
  var lightboxClose = document.getElementById('cmj-gallery-lightbox-close');
  var lightboxImg = document.getElementById('cmj-gallery-lightbox-img');
  var lightboxPlaceholder = document.getElementById('cmj-gallery-lightbox-placeholder');

  function openLightbox(title, imgUrl) {
    lightboxTitle.textContent = title || '';
    if (imgUrl) {
      lightboxImg.src = imgUrl;
      lightboxImg.alt = title || '';
      lightboxImg.classList.remove('hidden');
      lightboxPlaceholder.classList.add('hidden');
    } else {
      lightboxImg.removeAttribute('src');
      lightboxImg.classList.add('hidden');
      lightboxPlaceholder.classList.remove('hidden');
    }
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  items.forEach(function (item) {
    item.addEventListener('click', function () {
      openLightbox(item.getAttribute('data-title'), item.getAttribute('data-img'));
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();
</script>

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
