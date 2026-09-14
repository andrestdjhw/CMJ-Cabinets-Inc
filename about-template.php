<?php
/**
 * Template Name: About Template
 * Brief: Parte 4.2 (About Us). Asignar a la página /about vía
 * Page Attributes → Template en el editor.
 *
 * SEO Title: About CMJ Cabinets | Family-Owned Cabinet Makers in Los Angeles
 * Meta description: Meet the family behind CMJ Cabinets. Since 2007, our Los Angeles
 * workshop has built custom cabinetry with honest service and old-school craftsmanship.
 * TODO: conectar SEO Title / meta description a un plugin SEO (Yoast/RankMath) cuando se instale.
 */

$cfg = cmj_config();

get_header(); ?>

<main>

  <!-- ===== S1 — HERO CORTO (video de fondo, mismo criterio que el hero de
       Contact y la sección de Área de Servicio de Home) =====
       Mismo archivo de textura de madera que ya usamos en el footer y en la
       sección de Proceso (cfg['footerVideoUrl']), acá a pantalla completa
       como fondo del hero en vez de "estampado" de baja opacidad — por eso
       usa las clases .cmj-cta-video / .cmj-cta-video-mask (loop disimulado +
       fallback bg-ink bajo prefers-reduced-motion), no .cmj-bg-video. -->
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
      <p class="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-tan">About CMJ Cabinets</p>
      <h1 class="mt-4 text-4xl sm:text-5xl font-normal tracking-wide text-paper">
        Three Partners. One Standard: Built Right.
      </h1>
    </div>
  </section>

  <!-- ===== S2 — HISTORIA ===== -->
  <section class="bg-paper cmj-pattern-bg">
    <div class="max-w-3xl mx-auto px-4 py-16 sm:py-20 text-center">
      <p class="text-lg text-ink/75 leading-relaxed">
        CMJ Cabinets began in 2007 with a simple idea: Los Angeles families deserve cabinetry made by real craftsmen, not mass-produced boxes.
        What started as a small family shop is today a team of 13 designers, builders, and installers serving homeowners across Southern California.
        But some things haven't changed: we still measure every space ourselves, build every cabinet in our own workshop, and stand behind every install with our name.
      </p>
      <!-- Nota dev: año de fundación (2007 vs 2008 en sitio actual) por confirmar — Pendiente #1 del brief. -->
    </div>
  </section>

  <!-- ===== S3 — EL EQUIPO / LOS SOCIOS ===== -->
  <section class="bg-cream cmj-pattern-bg">
    <div class="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-3xl sm:text-4xl font-normal tracking-wide text-ink">Meet the Family Behind CMJ</h2>
        <p class="mt-3 text-ink/70">You'll deal directly with the family that owns the shop, and we answer.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <?php
        // TODO: reemplazar placeholders por fotos reales de los socios (Pendiente #5 del brief).
        $partners = array(
          array('name' => 'Sr. Jesús', 'role' => 'Owner &amp; Founder'),
          array('name' => 'Sr. Miguel', 'role' => 'Partner'),
          array('name' => 'Jesús Jr.', 'role' => 'Partner'),
        );
        foreach ($partners as $partner) : ?>
          <div class="text-center">
            <div class="cmj-avatar-placeholder w-32 h-32 mx-auto rounded-full mb-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="text-paper/90" aria-hidden="true">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-ink"><?php echo esc_html($partner['name']); ?></h3>
            <p class="text-sm text-tan-2 font-medium"><?php echo wp_kses_post($partner['role']); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ===== S4 — EL TALLER =====
       Pedido explícito del cliente: la foto ocupa toda la columna izquierda
       (no un recorte 4:3 más chico que la fila) y el texto de la derecha
       queda centrado verticalmente, con la fuente un poco más grande. Se
       quitó aspect-[4/3] e items-center del grid. Ojo: NO alcanza con
       lg:h-auto + stretch del grid — cuando el contenedor de la foto mide
       "auto", su alto se resuelve por el propio aspect-ratio de la imagen
       (h-full sobre un padre sin alto definido cae a eso), así que la fila
       del grid termina midiendo exactamente eso y el stretch no tiene
       espacio extra que repartir. Por eso la columna de la foto usa un alto
       fijo en lg (mismo valor que el min-h de la fila) — así object-cover
       sí recorta la imagen para llenar ese alto en vez de mostrarla a su
       tamaño natural. El texto se sigue centrando con flex dentro de su
       propia columna. En mobile (una sola columna) la foto usa su propio
       alto fijo más chico, porque ahí no comparte fila con nada. -->
  <section class="bg-paper cmj-pattern-bg">
    <div class="max-w-7xl mx-auto px-4 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:min-h-130">
      <div class="rounded-md overflow-hidden order-2 lg:order-1 h-72 sm:h-96 lg:h-130">
        <img
          src="<?php echo esc_url(content_url('/uploads/2026/09/CMJ_Office.png')); ?>"
          alt="CMJ Cabinets workshop"
          loading="lazy"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="order-1 lg:order-2 flex flex-col justify-center">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide text-ink">Visit Our Workshop</h2>
        <p class="mt-5 text-lg text-ink/70 leading-relaxed">
          Our cabinets aren't ordered from a catalog. They're built in our own workshop, where you can see materials, finishes, and real examples of our craftsmanship, and sit down with us to plan your project in person.
        </p>
        <!-- Nota dev: dirección del taller confirmada (Pendiente #2 del brief resuelto) — ver cfg['address'] en functions.php. -->
      </div>
    </div>
  </section>

  <!-- ===== S5 — MISIÓN / VISIÓN / VALORES ===== -->
  <!-- Nota dev: borradores pendientes de aprobación del cliente — Pendiente #7 del brief.
       Mismas cards translúcidas + 3D/sombreado al hover que "Why Homeowners
       Choose CMJ" en home-template.php (.cmj-mega-card + bg-paper/70
       backdrop-blur-sm, ver la nota larga ahí) — pedido explícito del
       cliente de aplicar el efecto globalmente donde el patrón se repita
       (acá es el mismo: ícono + título + párrafo, pocos items). -->
  <section class="bg-cream cmj-pattern-bg">
    <div class="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 perspective-[1400px]">
        <?php
        $pillars = array(
          array(
            'title' => 'Our Mission',
            'copy' => "To build custom cabinetry that fits our clients' homes and lives perfectly, with honest pricing, real craftsmanship, and a team that always picks up the phone.",
          ),
          array(
            'title' => 'Our Vision',
            'copy' => 'To be the cabinet maker every Los Angeles family trusts by name, known for work that lasts and service that feels personal.',
          ),
          array(
            'title' => 'Our Values',
            'copy' => 'Craftsmanship, honesty, and family: the same standard for every project, from a single vanity to a full kitchen.',
          ),
        );
        foreach ($pillars as $pillar) : ?>
          <div class="cmj-mega-card rounded-md border border-transparent bg-paper/70 backdrop-blur-sm p-6 text-center sm:text-left">
            <div class="w-10 h-10 flex items-center justify-center rounded-md bg-tan/15 text-tan-2 mb-4 mx-auto sm:mx-0">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <h3 class="text-lg font-semibold text-ink mb-2"><?php echo esc_html($pillar['title']); ?></h3>
            <p class="text-ink/70 text-sm leading-relaxed"><?php echo esc_html($pillar['copy']); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ===== S6 — BADGES + RESEÑAS + CTA BAND =====
       Pedido explícito del cliente: mismo degradado y marquee continuo que
       el trust bar de home (.cmj-marquee-track + bg-linear-to-b from-ink
       to-ebano, ver S2 en home-template.php) en vez de una fila estática.
       Se mantiene el estilo "pill" con borde de los badges (a diferencia
       del trust bar, que es solo texto) pero recoloreado para el fondo
       oscuro. Solo 4 items — mismo motivo que el trust bar para repetir la
       lista varias veces dentro de cada mitad del track (si no, una mitad
       mide menos que cualquier pantalla ancha y se nota el hueco del loop). -->
  <?php
  $badges = array('BBB Accredited', 'Google Top Rated', '5★ Rated on Yelp', 'CSLB Licensed ' . $cfg['cslb']);
  $badges_group = array_merge($badges, $badges, $badges, $badges);
  ?>
  <section class="bg-linear-to-b from-ink to-ebano overflow-hidden">
    <div class="cmj-marquee-track flex w-max py-14">
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

  <!-- ===== S7 — RESEÑAS =====
       Widget real de Trustindex (plugin "wp-reviews-plugin-for-google", ya activo)
       en vez de las tarjetas hardcodeadas que teníamos antes — se actualiza solo
       con las reseñas reales de Google. -->
  <section class="bg-cream cmj-pattern-bg">
    <div class="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <h2 class="text-3xl sm:text-4xl font-normal tracking-wide text-ink">What Our Clients Say</h2>
        <p class="mt-3 text-ink/70">5-star rated on Google &amp; Yelp. Real reviews from real Los Angeles homeowners.</p>
      </div>
      <?php echo do_shortcode('[trustindex no-registration=google]'); ?>
      <div class="mt-8 text-center">
        <a
          href="<?php echo esc_url($cfg['socials']['gmb']); ?>"
          target="_blank"
          rel="noopener noreferrer"
          class="cmj-cta inline-flex items-center justify-center relative overflow-hidden w-[220px] h-[52px] bg-linear-to-b from-tan to-tan-2 text-paper text-[13px] font-semibold uppercase"
        >
          <span class="cmj-cta__frame" aria-hidden="true"></span>
          <p class="cmj-cta__label" data-title="Leave a Review" data-text="Thank You!"></p>
        </a>
      </div>
    </div>
  </section>

  <!-- ===== S7B — FAQ =====
       Pedido explícito del cliente: una sección de FAQs entre Reseñas y el
       CTA final. Mismo acordeón <details>/<summary> y mismas 6 preguntas
       genéricas de la empresa que en la home (cmj_faqs(), ver functions.php)
       — no service-template.php's FAQs (esas son específicas de cada
       servicio, no tienen sentido acá). -->
  <?php $faqs = cmj_faqs(); ?>
  <section class="bg-paper cmj-pattern-bg">
    <div class="max-w-3xl mx-auto px-4 py-16 sm:py-20">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-3xl sm:text-4xl font-normal tracking-wide text-ink">Frequently Asked Questions</h2>
        <p class="mt-3 text-ink/70">Everything you need to know before starting your project.</p>
      </div>
      <div class="space-y-3">
        <?php foreach ($faqs as $faq) : ?>
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
  // index.css) — los archivos no cierran el loop de forma limpia, así que
  // disimulamos el corte con un breve "dip to black" antes/después del
  // reinicio. Esta página ahora tiene DOS videos (hero + cinta CTA final),
  // así que iteramos sobre todos los .cmj-cta-video en vez de tomar solo el
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
