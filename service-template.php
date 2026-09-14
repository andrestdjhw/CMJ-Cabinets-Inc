<?php
/**
 * Template Name: Service Detail Template
 * Brief: Parte 4.4–4.12 (las 9 páginas individuales de servicio). Un solo
 * template para las 9 URLs /services/[slug]/ — el contenido sale de
 * cmj_service_details() (functions.php), indexado por el slug de la página
 * actual. Evita duplicar la misma estructura 9 veces: mismo criterio que ya
 * usa el resto del sitio (arrays de datos + loop, no un archivo por variante).
 *
 * Páginas que deben usar este template (Page Attributes → Template, con
 * Parent Page = Services): kitchen, closet, bar-cabinets, bathroom-vanity,
 * garages, murphy-beds, laundry-room, entertainment-centers,
 * additional-services. Los slugs deben calzar exacto con las claves de
 * cmj_service_images() / cmj_service_details() y con navigation.js (Navbar).
 *
 * TODO: conectar SEO Title / meta description por servicio a un plugin SEO
 * (Yoast/RankMath) cuando se instale — por ahora el <title> sale de
 * get_the_title() vía wp_head().
 */

$cfg = cmj_config();
$service_images = cmj_service_images();
$service_details = cmj_service_details();

$slug = get_post_field('post_name');
$service = isset($service_details[$slug]) ? $service_details[$slug] : null;

// Fallback si la página no tiene un slug reconocido (no debería pasar en producción
// con las 9 páginas bien configuradas, pero evita mostrar una página vacía/rota
// si alguien clona esta plantilla para una página nueva sin querer).
if (!$service) {
  $service = array(
    'title'    => get_the_title(),
    'tagline'  => '',
    'intro'    => '',
    'features' => array(),
  );
}

$img = isset($service_images[$slug]) ? $service_images[$slug] : '';

get_header(); ?>

<main>

  <!-- ===== HERO: foto real de la categoría + overlay oscuro =====
       Mismo overlay ebano que el resto del sitio (hero de Home, cinta CTA) para
       que el texto claro se lea bien encima de cualquier foto. Si el servicio no
       tiene foto todavía (additional-services), cae al placeholder cmj-wood-bg. -->
  <section class="relative overflow-hidden">
    <?php if ($img) : ?>
      <img src="<?php echo esc_url($img); ?>" alt="" class="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
      <div class="absolute inset-0 bg-linear-to-b from-ebano/75 via-ebano/60 to-ebano/85"></div>
    <?php else : ?>
      <div class="absolute inset-0 cmj-wood-bg" aria-hidden="true"></div>
    <?php endif; ?>
    <div class="relative max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center">
      <nav aria-label="Breadcrumb" class="text-xs <?php echo $img ? 'text-cream/70' : 'text-ink/60'; ?> mb-4">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="hover:text-tan transition-colors">Home</a>
        <span class="mx-1.5">/</span>
        <a href="<?php echo esc_url(home_url('/services/')); ?>" class="hover:text-tan transition-colors">Services</a>
        <span class="mx-1.5">/</span>
        <span class="<?php echo $img ? 'text-cream' : 'text-ink'; ?>"><?php echo wp_kses_post($service['title']); ?></span>
      </nav>
      <h1 class="text-4xl sm:text-5xl font-normal tracking-wide <?php echo $img ? 'text-paper' : 'text-ink'; ?>"><?php echo wp_kses_post($service['title']); ?></h1>
      <?php if ($service['tagline']) : ?>
        <p class="mt-4 text-lg <?php echo $img ? 'text-cream/85' : 'text-ink/70'; ?>"><?php echo esc_html($service['tagline']); ?></p>
      <?php endif; ?>
      <div class="mt-8">
        <a
          href="<?php echo esc_url($cfg['ctaUrl']); ?>"
          class="cmj-cta inline-flex items-center justify-center relative overflow-hidden w-[220px] h-[52px] bg-linear-to-b from-tan to-tan-2 text-paper text-[13px] font-semibold uppercase"
        >
          <span class="cmj-cta__frame" aria-hidden="true"></span>
          <p class="cmj-cta__label" data-title="<?php echo esc_attr($cfg['ctaLabel']); ?>" data-text="<?php echo esc_attr($cfg['ctaHover']); ?>"></p>
        </a>
      </div>
    </div>
  </section>

  <!-- ===== TRUST BAR (compacta, marquee continuo — mismo patrón que home/services) =====
       Cada mitad repetida varias veces (son solo 4 items cortos, ver la
       misma nota en home-template.php / services-template.php: con una sola
       vuelta se alcanzaba a ver el hueco antes de que la otra mitad entrara). -->
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
    <div class="cmj-marquee-track flex w-max py-4 text-sm font-medium text-ink/80">
      <?php for ($i = 0; $i < 2; $i++) : ?>
        <div
          class="flex items-center flex-nowrap gap-x-8 pr-8 shrink-0"
          <?php echo $i === 1 ? 'aria-hidden="true"' : ''; ?>
        >
          <?php foreach ($trust_items_group as $item) : ?>
            <div class="flex items-center gap-2 whitespace-nowrap">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-tan shrink-0"><path d="M20 6 9 17l-5-5" /></svg>
              <span><?php echo esc_html($item); ?></span>
            </div>
          <?php endforeach; ?>
        </div>
      <?php endfor; ?>
    </div>
  </div>

  <!-- ===== DESCRIPCIÓN + FEATURES ===== -->
  <section class="bg-paper cmj-pattern-bg">
    <div class="max-w-5xl mx-auto px-4 py-16 sm:py-20">
      <?php if ($service['intro']) : ?>
        <p class="text-lg text-ink/75 leading-relaxed max-w-3xl"><?php echo esc_html($service['intro']); ?></p>
      <?php endif; ?>

      <?php if (!empty($service['features'])) : ?>
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <?php foreach ($service['features'] as $feature) : ?>
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 flex items-center justify-center rounded-md bg-tan/15 text-tan-2 shrink-0 mt-0.5">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <p class="text-ink/80 leading-relaxed"><?php echo esc_html($feature); ?></p>
            </div>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>
    </div>
  </section>

  <!-- ===== PROCESO — reciclada tal cual de Home (S4, "Our Process") =====
       Mismo contenido (Design/Build/Install es el mismo proceso sin importar
       el servicio) y mismo fondo horneado (assets/process-bg.png — ver la
       nota larga en home-template.php sobre por qué está horneado a PNG en
       vez de compuesto en vivo: el estampado desaparecía cuando el widget de
       Trustindex de la home terminaba de cargar. Esta página no tiene
       Trustindex, pero reusamos el mismo asset por consistencia visual, no
       por necesidad). El scrollspy va en el <script> al final del archivo. -->
  <?php
  $process_steps = array(
    array(
      'n' => '1',
      'title' => 'Design',
      'copy' => 'We visit your home, take exact measurements, and design your project with you: layout, materials, finishes, and a clear quote with mock-ups.',
      'image' => content_url('/uploads/2026/09/Design1-scaled.jpg'),
    ),
    array(
      'n' => '2',
      'title' => 'Build',
      'copy' => 'Your cabinets are fabricated in our own Los Angeles workshop by our craftsmen: custom sizes, quality materials, soft-close hardware.',
      'image' => content_url('/uploads/2026/09/Build-scaled.webp'),
    ),
    array(
      'n' => '3',
      'title' => 'Install',
      'copy' => 'Our own installation team delivers and installs with precision: on time, clean, and checked with you detail by detail.',
      'image' => content_url('/uploads/2026/09/Installing-scaled.jpg'),
    ),
  );
  $process_total = count($process_steps);
  ?>
  <section
    class="cmj-method-section relative overflow-hidden bg-ink bg-cover bg-center"
    style="background-image: url('<?php echo esc_url(get_theme_file_uri('/assets/process-bg.png')); ?>');"
  >
    <div class="relative mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

      <!-- Columna izquierda: intro + foto sincronizada al paso activo (sticky en desktop) -->
      <div class="lg:sticky lg:top-28 lg:self-start text-center lg:text-left">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-paper">Our Process</p>
        <h2 class="mt-4 text-3xl sm:text-4xl font-normal tracking-wide text-paper">
          From First Visit to <span class="text-cream">Final Install</span>
        </h2>
        <p class="mt-4 text-cream/70 leading-relaxed max-w-sm mx-auto lg:mx-0">One team handles every step. Nothing gets lost between design and reality.</p>

        <div class="mt-8 flex items-center justify-center lg:justify-start gap-4" aria-hidden="true">
          <span class="relative h-px w-full max-w-40 bg-paper/15">
            <span class="cmj-method__progress-bar absolute inset-0 bg-paper"></span>
          </span>
          <span class="shrink-0 text-xs tracking-[0.16em] text-cream/60"><span class="cmj-method__counter text-paper">01</span> / <?php echo esc_html(sprintf('%02d', $process_total)); ?></span>
        </div>

        <div class="cmj-method__media relative mt-10 hidden aspect-4/5 overflow-hidden rounded-md border border-paper/15 lg:block">
          <span class="pointer-events-none absolute left-0 top-0 z-10 h-7 w-7 border-l-2 border-t-2 border-paper"></span>
          <span class="pointer-events-none absolute bottom-0 right-0 z-10 h-7 w-7 border-b-2 border-r-2 border-paper"></span>
          <?php foreach ($process_steps as $i => $step) : if (empty($step['image'])) continue; ?>
            <img
              src="<?php echo esc_url($step['image']); ?>"
              alt="<?php echo esc_attr($step['title']); ?>"
              loading="<?php echo $i === 0 ? 'eager' : 'lazy'; ?>"
              class="cmj-method__shot absolute inset-0 w-full h-full object-cover<?php echo $i === 0 ? ' is-current' : ''; ?>"
            />
          <?php endforeach; ?>
          <span class="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-24 bg-linear-to-b from-transparent to-ink/70"></span>
        </div>
      </div>

      <!-- Columna derecha: lista numerada con spine vertical -->
      <ol class="cmj-method relative lg:self-center lg:pl-6">
        <span class="absolute left-0 top-0 bottom-0 w-px bg-paper/15" aria-hidden="true"></span>
        <span class="cmj-method__spine-fill absolute left-0 top-0 bottom-0 w-px bg-paper" aria-hidden="true"></span>

        <?php foreach ($process_steps as $i => $step) : ?>
          <li
            class="cmj-method__row relative z-[1] grid grid-cols-[auto_auto_1fr] items-start gap-4 gap-x-6 border-t border-paper/10 py-8 pl-6<?php echo $i === 0 ? ' is-active' : ''; ?>"
            data-step="<?php echo esc_attr($i); ?>"
          >
            <span class="cmj-method__num font-display text-[clamp(2.2rem,5vw,3.2rem)] font-bold leading-none"><?php echo esc_html(sprintf('%02d', $i + 1)); ?></span>
            <span class="cmj-method__icon mt-1 flex h-10 w-10 items-center justify-center rounded-md border border-paper/15 bg-ink text-cream/70">
              <?php if ($step['title'] === 'Design') : ?>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
              <?php elseif ($step['title'] === 'Build') : ?>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              <?php else : ?>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M8.5 12.5l2.3 2.3L15.5 9.5"/></svg>
              <?php endif; ?>
            </span>
            <div>
              <h3 class="text-xl font-semibold text-paper mb-2"><?php echo esc_html($step['title']); ?></h3>
              <p class="text-cream/70 text-[15px] leading-relaxed max-w-lg"><?php echo esc_html($step['copy']); ?></p>
            </div>
          </li>
        <?php endforeach; ?>
      </ol>
    </div>
  </section>

  <!-- ===== FAQ (relacionadas con este servicio) =====
       2 preguntas específicas del servicio (cmj_service_details()[slug]['faqs'],
       ver functions.php) + 2 genéricas con el nombre del servicio insertado —
       así no hay que escribir 4 preguntas completas × 9 páginas para las que
       son iguales en el fondo (precio/tiempo), solo las que sí cambian por
       servicio. Mismo acordeón <details>/<summary> que la home. -->
  <?php
  $service_faqs = !empty($service['faqs']) ? $service['faqs'] : array();
  $service_faqs[] = array(
    // Sin el título acá a propósito: "a/an" según el título es más lío del
    // que vale — "Additional Services" arrancaría con vocal ("an"), el resto
    // con consonante ("a"). Más simple no necesitar el artículo.
    'q' => 'How long does a project like this usually take?',
    'a' => 'Most projects take 4–8 weeks from final measurements to install, depending on scope — we give you a firm timeline once the design is locked in.',
  );
  $service_faqs[] = array(
    'q' => 'Do you offer free estimates for ' . wp_strip_all_tags($service['title']) . '?',
    'a' => "Yes. We visit your home, take exact measurements, and walk you through options at no cost and with no obligation.",
  );
  ?>
  <section class="bg-paper cmj-pattern-bg">
    <div class="max-w-3xl mx-auto px-4 py-16 sm:py-20">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-3xl sm:text-4xl font-normal tracking-wide text-ink">Frequently Asked Questions</h2>
        <p class="mt-3 text-ink/70">Everything you need to know before starting your <?php echo esc_html(wp_strip_all_tags($service['title'])); ?> project.</p>
      </div>
      <div class="space-y-3">
        <?php foreach ($service_faqs as $faq) : ?>
          <details class="group rounded-md border border-ink/10 bg-cream/40 open:bg-cream/60 transition-colors">
            <summary class="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-medium text-ink">
              <span><?php echo esc_html($faq['q']); ?></span>
              <svg class="shrink-0 text-tan transition-transform duration-300 group-open:rotate-45" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
            </summary>
            <p class="px-5 pb-4 text-ink/70 text-[15px] leading-relaxed"><?php echo esc_html($faq['a']); ?></p>
          </details>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ===== OTROS SERVICIOS (internal linking a las otras 8 páginas) =====
       Pedido explícito del cliente: dos filas en marquee continuo, una fila
       corre de izquierda a derecha y la otra al revés — mismo patrón
       .cmj-marquee-track que el trust bar / condados de home (ver
       index.css), con el modificador --reverse en la segunda fila. A
       diferencia del trust bar (solo texto), estas son <a> clickeables, así
       que sumamos --pausable: el recorrido se detiene al pasar el mouse o
       hacer foco con teclado para poder hacer click sin perseguir el link. -->
  <?php
  $other_services = array();
  foreach ($service_details as $other_slug => $other) {
    if ($other_slug === $slug) continue;
    $other_services[] = array('slug' => $other_slug, 'title' => $other['title']);
  }
  $half = (int) ceil(count($other_services) / 2);
  $row1 = array_slice($other_services, 0, $half);
  $row2 = array_slice($other_services, $half);
  // Repetimos cada fila varias veces dentro de cada mitad del track: son
  // pocos items (4 por fila), igual que el trust bar — sin repetir, la
  // mitad del track mide menos que una pantalla ancha y se ve el hueco
  // cuando el loop reinicia.
  $other_services_rows = array(
    array('items' => array_merge($row1, $row1, $row1, $row1), 'reverse' => false),
    array('items' => array_merge($row2, $row2, $row2, $row2), 'reverse' => true),
  );
  ?>
  <section class="bg-paper cmj-pattern-bg overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 pt-16 sm:pt-20">
      <h2 class="text-2xl font-normal tracking-wide text-ink mb-8">Explore Other Services</h2>
    </div>
    <div class="space-y-4 pb-16 sm:pb-20">
      <?php foreach ($other_services_rows as $row) : ?>
        <div class="overflow-hidden">
          <div class="cmj-marquee-track cmj-marquee-track--pausable<?php echo $row['reverse'] ? ' cmj-marquee-track--reverse' : ''; ?> flex w-max">
            <?php for ($i = 0; $i < 2; $i++) : ?>
              <div
                class="flex items-center flex-nowrap gap-4 pr-4 shrink-0"
                <?php echo $i === 1 ? 'aria-hidden="true"' : ''; ?>
              >
                <?php foreach ($row['items'] as $svc) : ?>
                  <a
                    href="<?php echo esc_url(home_url('/services/' . $svc['slug'] . '/')); ?>"
                    class="shrink-0 rounded-md border border-transparent bg-cream px-6 py-4 text-sm font-semibold text-ink whitespace-nowrap hover:bg-tan/10 hover:text-tan-2 transition-colors"
                  >
                    <?php echo wp_kses_post($svc['title']); ?>
                  </a>
                <?php endforeach; ?>
              </div>
            <?php endfor; ?>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </section>

  <!-- ===== CTA BAND (mismo patrón de video que el resto del sitio) ===== -->
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
  // Máscara del loop de la cinta CTA con video (ver .cmj-cta-video-mask en index.css) —
  // el archivo no cierra el loop de forma limpia, así que disimulamos el corte
  // con un breve "dip to black" antes/después del reinicio.
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

    if (t < lastTime - 0.5) {
      setTimeout(function () {
        mask.classList.remove('is-active');
      }, HOLD_AFTER);
    }

    lastTime = t;
  });
})();
</script>

<script>
(function () {
  // Scrollspy de la sección "Proceso" — reciclado tal cual de home-template.php
  // (ver .cmj-method en index.css): la fila activa es la ÚLTIMA cuyo top ya
  // cruzó el 50% del viewport. Sincroniza número + ícono (.is-active), el
  // spine/barra de progreso, el contador "0X / 0Y" y el crossfade de la foto
  // (.is-current).
  var section = document.querySelector('.cmj-method-section');
  if (!section) return;

  var rows = Array.prototype.slice.call(section.querySelectorAll('.cmj-method__row'));
  if (!rows.length) return;

  var spineFill = section.querySelector('.cmj-method__spine-fill');
  var progressBar = section.querySelector('.cmj-method__progress-bar');
  var counter = section.querySelector('.cmj-method__counter');
  var shots = Array.prototype.slice.call(section.querySelectorAll('.cmj-method__shot'));
  var total = rows.length;
  var current = -1;

  function setActive(index) {
    if (index === current) return;
    current = index;

    rows.forEach(function (row, i) {
      row.classList.toggle('is-active', i === index);
    });
    shots.forEach(function (shot, i) {
      shot.classList.toggle('is-current', i === index);
    });
    if (spineFill) spineFill.style.transform = 'scaleY(' + (index + 1) / total + ')';
    if (progressBar) progressBar.style.transform = 'scaleX(' + (index + 1) / total + ')';
    if (counter) counter.textContent = String(index + 1).padStart(2, '0');
  }

  function updateFromScroll() {
    var triggerY = window.innerHeight * 0.5;
    var activeIndex = 0;

    rows.forEach(function (row, i) {
      var rect = row.getBoundingClientRect();
      if (rect.top <= triggerY) {
        activeIndex = i;
      }
    });

    setActive(activeIndex);
  }

  setActive(0);
  updateFromScroll(); // por si la página carga ya scrolleada (reload a mitad de página, anchor link, etc.)

  var ticking = false;
  window.addEventListener(
    'scroll',
    function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        updateFromScroll();
        ticking = false;
      });
    },
    { passive: true }
  );
})();
</script>

<?php get_footer(); ?>
