<?php
/**
 * Template Name: Home Template
 * Brief: Parte 4.1 (Home). Asignar a la página de inicio en
 * Ajustes → Lectura, o vía Page Attributes → Template en el editor.
 *
 * SEO Title: Custom Cabinets Los Angeles | Kitchen Cabinets & Closets | CMJ Cabinets
 * Meta description: Family-owned custom cabinet makers in Los Angeles since 2007.
 * Custom kitchens, closets, vanities & more. CSLB licensed. Free estimates: (323) 971-1543.
 * TODO: conectar SEO Title / meta description a un plugin SEO (Yoast/RankMath) cuando se instale.
 */

$cfg = cmj_config();
$service_images = cmj_service_images();
$service_details = cmj_service_details();

get_header(); ?>

<main>

  <!-- ===== S1 — HERO, con S2 (trust bar/marquee) anclado hasta abajo del viewport =====
       flex-col + min-h-[calc(100vh-120px)]: 120px = alto del header (topbar h-11 +
       barra principal h-[76px], ver Navbar.js) — así el marquee queda pegado al
       borde inferior de la pantalla en la primera vista, sin scroll. El contenido
       del hero se centra en el espacio disponible arriba del marquee.
       Fondo: slideshow de fotos de proyectos con efecto Ken Burns (ver .cmj-hero-slide
       en index.css y el <script> al final del archivo) + overlay oscuro para que el
       texto claro quede legible encima de cualquier foto. -->
  <section class="relative overflow-hidden flex flex-col min-h-[calc(100vh-120px)]">
    <?php
    $hero_slides = array(
      content_url('/uploads/2026/09/CMJHero1-scaled.webp'),
      content_url('/uploads/2026/09/CMJHero2-scaled.webp'),
      content_url('/uploads/2026/09/CMJHero3-scaled.webp'),
      content_url('/uploads/2026/09/CMJHero4.webp'),
      content_url('/uploads/2026/09/CMJHero5-scaled.webp'),
    );
    ?>
    <div class="absolute inset-0 -z-20" aria-hidden="true">
      <?php foreach ($hero_slides as $i => $src) : ?>
        <img
          src="<?php echo esc_url($src); ?>"
          alt=""
          class="cmj-hero-slide<?php echo $i === 0 ? ' is-active' : ''; ?>"
          <?php echo $i === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'; ?>
        />
      <?php endforeach; ?>
    </div>
    <!-- Overlay oscuro uniforme para TODA la sección (vuelve a ser uno solo,
         como al principio) — ya no necesita partirse en blanco/oscuro por
         mitades porque el texto ahora vive en su propia "card" clara (ver
         más abajo), no directamente sobre el overlay. Esa card es opaca, así
         que no le importa qué haya debajo; el resto del hero (foto + Contact
         Form "glass" con texto claro) vuelve a apoyarse en este oscuro, igual
         que las demás cintas con foto/video del sitio. -->
    <div class="absolute inset-0 -z-10 bg-linear-to-b from-ebano/75 via-ebano/65 to-ebano/80"></div>

    <div class="max-w-7xl mx-auto px-4 py-20 sm:py-24 flex-1 flex flex-col justify-center w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Columna izquierda: headline dentro de su propia card clara (en vez
             de un overlay blanco de sección completa) — mismo criterio que la
             card del Contact Form de al lado: cada una flota sobre la foto de
             forma independiente, con su propio fondo — pero se volvió al
             criterio original: texto claro directamente sobre la foto (con el
             overlay oscuro de toda la sección), sin card ni overlay blanco
             aparte. .cmj-hero-text-shadow vuelve porque el texto está otra vez
             directo sobre la foto (esa sombra ayuda a que se siga leyendo bien
             en las zonas más claras de cada foto del slideshow). -->
        <div class="cmj-hero-text-shadow text-center lg:text-left">
          <p class="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-cream bg-ink/70 px-4 py-1.5 rounded-full">Family Owned &amp; Operated Since 2007</p>
          <h1 class="mt-4 text-4xl sm:text-6xl font-normal tracking-wide text-paper max-w-xl mx-auto lg:mx-0">
            Custom Cabinets <span class="text-tan">Built for the Way</span> You Live
          </h1>
          <p class="mt-5 text-lg text-cream/85 max-w-xl mx-auto lg:mx-0">
            We design, build, and install custom kitchens, closets, and cabinetry for every room of your home, crafted in our own Los Angeles workshop.
          </p>
          <div class="mt-9 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <a
              href="<?php echo esc_url($cfg['ctaUrl']); ?>"
              class="cmj-cta flex items-center justify-center relative overflow-hidden w-[220px] h-[52px] bg-linear-to-b from-tan to-tan-2 text-paper text-[13px] font-semibold uppercase"
            >
              <span class="cmj-cta__frame" aria-hidden="true"></span>
              <p class="cmj-cta__label" data-title="Get a Free Estimate" data-text="Let's Talk"></p>
            </a>
            <a href="<?php echo esc_url(home_url('/gallery/')); ?>" class="text-cream font-medium text-sm border-b border-cream/40 hover:border-tan hover:text-tan transition-colors">
              View Our Work
            </a>
          </div>

        </div>

        <!-- Columna derecha: Contact Form (React), variante traslúcida sobre el slideshow,
             con el mismo efecto de levitación que el form de /contact-us/ (ver .cmj-form-levitate
             / .cmj-form-shadow en index.css). -->
        <div class="relative cmj-form-levitate">
          <div id="cmj-contact-form-hero">
            <!-- Fallback estático hasta que el componente React monte -->
            <div class="rounded-lg bg-paper/10 backdrop-blur-md border border-paper/20 shadow-2xl p-8">
              <h2 class="text-xl font-semibold text-paper mb-2">Request Your Free Estimate</h2>
              <p class="text-cream/80 text-sm mb-6">Loading the form… if it doesn't appear, reach us directly.</p>
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
    </div>

    <!-- ===== S2 — TRUST BAR (bloque 3.1 del brief), marquee continuo =====
         Fondo oscuro pegado directo al hero (sin borde) para que se sienta una sola
         pieza, y mt-auto para quedar anclado al fondo del viewport. El listado va
         duplicado (2 grupos idénticos); el segundo con aria-hidden porque es
         puramente visual — el loop recorre -50% del track, que es el ancho exacto
         de un grupo. Cada mitad repite la lista varias veces (son solo 4 items
         cortos — con una sola vuelta, una mitad medía ~830px, menos que
         cualquier pantalla ancha, y se alcanzaba a ver el hueco vacío antes de
         que la otra mitad entrara; mismo bug ya resuelto en el marquee de
         condados de la sección de Área de Servicio, ver home-template.php). -->
    <?php
    $trust_items = array(
      '19+ Years in Business',
      'CSLB Licensed ' . $cfg['cslb'],
      'BBB Accredited',
      'Family Owned & Operated',
    );
    $trust_items_group = array_merge($trust_items, $trust_items, $trust_items, $trust_items);
    ?>
    <div class="mt-auto bg-linear-to-b from-ink to-ebano overflow-hidden">
      <div class="cmj-marquee-track flex w-max py-5">
        <?php for ($i = 0; $i < 2; $i++) : ?>
          <div
            class="flex items-center flex-nowrap gap-x-10 pr-10 shrink-0"
            <?php echo $i === 1 ? 'aria-hidden="true"' : ''; ?>
          >
            <?php foreach ($trust_items_group as $item) : ?>
              <div class="flex items-center gap-2 text-sm font-medium text-cream/90 whitespace-nowrap">
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
  </section>

  <!-- ===== S3 — SERVICIOS DESTACADOS (jerarquía por ingreso) =====
       Sin estampado acá (pedido explícito) — fondo blanco con un degradado a
       gris bien sutil en vez de .cmj-pattern-bg. -->
  <section class="bg-linear-to-b from-paper to-silver/10">
    <div class="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <div class="max-w-2xl mb-10">
        <h2 class="text-3xl sm:text-4xl font-normal tracking-wide text-ink">From Kitchen to Garage: We Build It All</h2>
        <p class="mt-3 text-ink/70">Every project starts with your space, your style, and your budget. Explore what our craftsmen can build for you.</p>
      </div>

      <?php
      // Orden de ingresos (mismo orden que menú/footer/navigation.js — ver
      // [[cmj-cabinets-project]]): Kitchen rota en la card grande junto con
      // el resto, los siguientes 4 van en la columna derecha, y los últimos
      // 3 + Additional Services van en el marquee de abajo. Title/tagline
      // salen de cmj_service_details() (no se repite el copy a mano en un
      // cuarto lugar — mismo criterio que ya usa service-template.php).
      $services_order = array('kitchen', 'closet', 'bar-cabinets', 'bathroom-vanity', 'garages', 'murphy-beds', 'laundry-room', 'entertainment-centers');
      $mid_slugs = array_slice($services_order, 1, 4);
      $marquee_slugs = array_slice($services_order, 5);
      ?>

      <!-- Grid: card grande (ahora un rotador que va mostrando los 8
           servicios, no solo Kitchen — pedido explícito del cliente para
           que no quede "tan simple y estático") + columna derecha de 4
           cards en una sola columna. La columna derecha ya no tiene su
           propio alto — se estira por el stretch por defecto del grid
           hasta igualar la altura del rotador (min-h explícito), así
           quedan alineadas simétrica y verticalmente con la card grande
           sin necesidad de repetir un alto a mano en dos lugares (mismo
           cuidado con el stretch de grid que en [[theme-architecture]] /
           about-template.php S4: acá no hay imagen con aspect-ratio propio
           adentro peleando por el alto, así que el stretch por defecto sí
           alcanza). perspective-[1400px] va en el rotador y en la columna
           derecha por separado (no en este grid exterior), para que cada
           uno comparta su propio punto de fuga — ver .cmj-mega-card en
           index.css. -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <!-- Rotador: mismo patrón de crossfade que el slideshow del hero
             (.cmj-hero-slide + JS al final del archivo) pero apilando <a>
             completos, no solo fotos — cada slide es un servicio distinto
             con su propio link, así que is-active también controla
             pointer-events (ver .cmj-service-rotator__slide en index.css)
             para que el slide oculto no intercepte clicks ni el hover del
             que está encima. Sin el Ken Burns del hero acá, para no sumar
             dos animaciones de zoom a la vez con el scale al hover de
             .cmj-mega-card__img. -->
        <div class="relative overflow-hidden rounded-md min-h-95 lg:min-h-160 perspective-[1400px]">
          <?php foreach ($services_order as $i => $slug) :
            $svc = $service_details[$slug];
          ?>
            <a
              href="<?php echo esc_url(home_url('/services/' . $slug . '/')); ?>"
              class="cmj-service-rotator__slide cmj-mega-card group absolute inset-0 block overflow-hidden rounded-md border border-transparent<?php echo $i === 0 ? ' is-active' : ''; ?>"
              <?php echo $i !== 0 ? 'tabindex="-1" aria-hidden="true"' : ''; ?>
            >
              <img
                src="<?php echo esc_url($service_images[$slug]); ?>"
                alt="<?php echo esc_attr(wp_strip_all_tags($svc['title'])); ?>"
                <?php echo $i === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'; ?>
                class="cmj-mega-card__img absolute inset-0 w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"></div>
              <div class="relative h-full flex flex-col justify-end p-7">
                <h3 class="text-2xl font-bold text-paper"><?php echo wp_kses_post($svc['title']); ?></h3>
                <span class="mt-4 inline-flex items-center gap-1.5 text-tan font-semibold text-sm">
                  Explore <?php echo wp_kses_post($svc['title']); ?>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>
                </span>
              </div>
            </a>
          <?php endforeach; ?>
        </div>

        <div class="grid grid-cols-1 grid-rows-4 gap-5 perspective-[1400px]">
          <?php foreach ($mid_slugs as $slug) :
            $svc = $service_details[$slug];
          ?>
            <a href="<?php echo esc_url(home_url('/services/' . $slug . '/')); ?>" class="cmj-mega-card group relative overflow-hidden rounded-md border border-transparent">
              <img
                src="<?php echo esc_url($service_images[$slug]); ?>"
                alt="<?php echo esc_attr(wp_strip_all_tags($svc['title'])); ?>"
                loading="lazy"
                class="cmj-mega-card__img absolute inset-0 w-full h-full object-cover"
              />
              <!-- A diferencia del rotador grande (una sola foto grande, con
                   espacio de sobra arriba), estas 4 son angostas y el
                   gradiente original (transparent arriba) dejaba la mitad
                   de cada foto sin oscurecer — pedido explícito del
                   cliente: "aplicarle el filtro en todo" porque se volvía
                   poco legible. El degradado se mantiene (más oscuro abajo,
                   donde está el texto) pero ya no llega a 0 arriba. -->
              <div class="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/35"></div>
              <div class="relative h-full flex flex-col justify-end p-5">
                <h3 class="text-lg font-bold text-paper"><?php echo wp_kses_post($svc['title']); ?></h3>
                <span class="mt-2 text-tan font-semibold text-xs">Explore <?php echo wp_kses_post($svc['title']); ?> →</span>
              </div>
            </a>
          <?php endforeach; ?>
        </div>
      </div>

      <!-- Fila final: antes era una grid estática de 4 cards + "And More";
           ahora el mismo marquee continuo y pausable que "Explore Other
           Services" en service-template.php (.cmj-marquee-track, ver
           index.css) — pedido explícito del cliente ("el mismo efecto de
           desplazamiento continuo que tenemos globalmente"), en vez de
           quedar como una grid estática más en la página. Pocos items (4),
           así que se repiten varias veces dentro de cada mitad del track
           (mismo motivo que en service-template.php: sin repetir, la mitad
           del track mide menos que una pantalla ancha y se nota el hueco
           al reiniciar el loop).
           "And More" quedó afuera del track (pedido explícito): es un CTA,
           no un item más de la lista que tenga sentido ver pasar y repetirse
           en loop, así que va fijo al final de la fila, con el mismo
           degradado del trust bar de S2 (bg-linear-to-b from-ink to-ebano)
           en vez del bg-ink plano que tenía antes. -->
      <?php
      $marquee_cards = array();
      foreach ($marquee_slugs as $slug) {
        $marquee_cards[] = array('title' => $service_details[$slug]['title'], 'url' => '/services/' . $slug . '/');
      }
      $marquee_cards_group = array_merge($marquee_cards, $marquee_cards, $marquee_cards, $marquee_cards);
      ?>
      <div class="mt-5 flex items-stretch gap-5">
        <div class="flex-1 min-w-0 overflow-hidden">
          <div class="cmj-marquee-track cmj-marquee-track--pausable flex w-max h-full">
            <?php for ($i = 0; $i < 2; $i++) : ?>
              <div class="flex items-center flex-nowrap gap-5 pr-5 shrink-0" <?php echo $i === 1 ? 'aria-hidden="true"' : ''; ?>>
                <?php foreach ($marquee_cards_group as $card) : ?>
                  <a
                    href="<?php echo esc_url(home_url($card['url'])); ?>"
                    class="shrink-0 flex items-center rounded-md border border-transparent bg-cream px-6 py-5 text-sm font-semibold text-ink whitespace-nowrap hover:bg-tan/10 hover:text-tan-2 transition-colors"
                  >
                    <?php echo wp_kses_post($card['title']); ?>
                  </a>
                <?php endforeach; ?>
              </div>
            <?php endfor; ?>
          </div>
        </div>
        <a
          href="<?php echo esc_url(home_url('/services/additional-services/')); ?>"
          class="shrink-0 flex items-center rounded-md border border-transparent bg-linear-to-b from-ink to-ebano px-6 py-5 text-sm font-semibold text-paper whitespace-nowrap hover:from-tan-2 hover:to-tan-2 transition-colors"
        >
          And More →
        </a>
      </div>
    </div>
  </section>

  <!-- ===== S3B — STATS BAND =====
       Gradiente ink → ebano (dos tonos oscuros de la paleta de materiales del
       cliente) — ambos lo bastante oscuros para no romper el contraste del
       texto tan/cream (probado: tan/ink ~3:1, tan/ebano ~5.4:1, cream/ambos
       arriba de 8:1). Los números cuentan de 0 al valor final cuando la sección
       entra en viewport (ver .cmj-stat-number + <script> al final del archivo). -->
  <section class="bg-linear-to-b from-ink to-ebano">
    <div class="max-w-7xl mx-auto px-4 py-14 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
      <?php
      // Nota dev: "+1K Projects" y "13 Craftsmen" son estimaciones — validar con el cliente (Pendiente #8).
      // Pedido explícito del cliente: el "+" va ANTES del número en "+19" y
      // "+1K" (antes "19+" / "1000s"). El contador animado solo soportaba un
      // sufijo (después del número) — se le sumó soporte de prefijo para
      // poder animar ambos sin tocar la "★" de "5★", que sí sigue de sufijo.
      $stats = array(
        array('n' => '+19', 'label' => 'Years in Business'),
        array('n' => '5★', 'label' => 'Rating on Google & Yelp'),
        array('n' => '13', 'label' => 'Craftsmen & Installers'),
        array('n' => '+1K', 'label' => 'Projects Installed'),
      );
      foreach ($stats as $stat) :
        // Separa el número (para animar) de lo que no es número: prefijo
        // antes ("+") y sufijo después ("+", "★", "K"...).
        preg_match('/^(\D*)([\d,]+)(.*)$/u', $stat['n'], $m);
        $prefix = isset($m[1]) ? $m[1] : '';
        $target = isset($m[2]) ? str_replace(',', '', $m[2]) : '0';
        $suffix = isset($m[3]) ? $m[3] : '';
      ?>
        <div>
          <div
            class="cmj-stat-number text-3xl sm:text-4xl font-bold text-tan"
            data-target="<?php echo esc_attr($target); ?>"
            data-prefix="<?php echo esc_attr($prefix); ?>"
            data-suffix="<?php echo esc_attr($suffix); ?>"
          ><?php echo esc_html($stat['n']); ?></div>
          <div class="mt-1 text-cream/70 text-xs sm:text-sm uppercase tracking-wide"><?php echo esc_html($stat['label']); ?></div>
        </div>
      <?php endforeach; ?>
    </div>
  </section>

  <!-- ===== S3C — RESEÑAS (bloque 3.3 del brief) =====
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

  <!-- ===== S4 — PROCESO (bloque 3.2 del brief: Design → Build → Install) =====
       Layout inspirado en la sección "How We Work" de eclandscapingutah.com —
       revisé su HTML/CSS compilado directo: dos columnas (intro + foto que
       hace crossfade, sticky en desktop, a la izquierda; lista numerada con
       "spine" vertical a la derecha). Mapeado a nuestros tokens (su ember →
       nuestro tan) y a nuestro contenido (3 pasos con fotos reales, no 5) en
       vez de copiar su color/copy. El estado "activo" lo calcula el <script>
       al final del archivo con un scrollspy simple — ver .cmj-method__* en
       index.css para el CSS de los estados is-active / is-current. -->
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
    <!-- Fondo horneado a UNA sola imagen estática (degradado Roble Ahumado →
         Fresno + estampado + el scrim oscuro que necesita el texto claro para
         contrastar, los tres ya "aplanados" en un PNG — ver assets/process-bg.png)
         en vez de componerlos en vivo con CSS (gradiente + capa de patrón con
         opacity + scrim). Probé la versión en vivo primero y se veía bien...
         hasta que el widget de reseñas de Trustindex (justo arriba, carga su
         CSS/fuentes de forma asíncrona, ~1-2s después del load) terminaba de
         cargar: en ese momento el fondo se oscurecía y el estampado
         desaparecía, comprobado con diffs de píxeles (bloqueando la petición a
         trustindex-google-widget.css el problema desaparecía por completo).
         Ni will-change, ni translateZ(0), ni isolation, ni forzar un repaint
         lo arreglaban — algo en cómo Trustindex fuerza un recálculo global de
         layout/compositing rompía el pintado de esta combinación puntual
         (gradiente + opacity + z-index negativo + overflow:hidden). Mismo
         criterio que ya usamos una vez en este sitio: el patrón "liquid" del
         footer (un filtro SVG en vivo) causaba jank real y se horneó a PNG
         (ver el historial de .cmj-footer-pattern) — acá el problema es
         distinto (una interferencia externa, no rendimiento) pero la solución
         es la misma: nada en vivo que un tercero pueda romper. -->
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

      <!-- Columna derecha: lista numerada con spine vertical.
           lg:self-center: la celda del grid se estira a la altura de la foto
           (columna izquierda, más alta), pero la lista de 3 pasos es más corta
           que eso — sin esto quedaba pegada arriba con un hueco vacío abajo.
           Centrada, reparte ese espacio sobrante arriba/abajo por igual.
           lg:pl-6 adicional (se suma al pl-6 de cada fila) para que no quede
           pegada al spine — más "aire" a la derecha del divisor. -->
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

  <!-- ===== S5 — POR QUÉ CMJ =====
       Pedido explícito del cliente: agrupar estos 4 items en cards
       translúcidas con el mismo efecto 3D + sombreado al hover que ya usan
       las cards de servicio (.cmj-mega-card, ver index.css) — reutilizado
       tal cual, no un efecto nuevo. bg-paper/70 + backdrop-blur-sm en vez
       del glass más transparente del hero (bg-paper/10): esa variante es
       para flotar sobre una foto oscura, acá la card va sobre
       .cmj-pattern-bg claro y necesita quedar bien legible, dejando
       apenas asomar la textura de fondo. perspective-[1400px] en el grid
       (no en cada card) para que las 4 compartan un mismo punto de fuga. -->
  <section class="bg-cream cmj-pattern-bg">
    <div class="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <h2 class="text-3xl sm:text-4xl font-normal tracking-wide text-ink text-center mb-12">Why Homeowners Choose CMJ</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 perspective-[1400px]">
        <?php
        $why = array(
          array(
            'title' => 'True Custom Work',
            'copy' => 'Every cabinet is designed and built for your exact space. No stock sizes, no warehouse shelves.',
          ),
          array(
            'title' => 'Our Own Workshop',
            'copy' => 'Designed, fabricated, and installed by one in-house team, start to finish.',
          ),
          array(
            'title' => 'A Family You Can Call',
            'copy' => "You'll deal directly with the family that owns the shop, and we answer.",
          ),
          array(
            'title' => 'Licensed &amp; Insured',
            'copy' => 'CSLB ' . $cfg['cslb'] . ', bonded and insured. BBB accredited, top-rated on Google and Yelp.',
          ),
        );
        foreach ($why as $item) : ?>
          <div class="cmj-mega-card rounded-md border border-transparent bg-paper/70 backdrop-blur-sm p-6">
            <div class="w-10 h-10 flex items-center justify-center rounded-md bg-tan/15 text-tan-2 mb-4">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <h3 class="text-base font-semibold text-ink mb-1.5"><?php echo wp_kses_post($item['title']); ?></h3>
            <p class="text-ink/70 text-sm leading-relaxed"><?php echo wp_kses_post($item['copy']); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ===== S8 — GALERÍA TEASER =====
       Fotos reales (antes placeholders cmj-wood-bg) — elegidas para no repetir
       las que ya se ven arriba en "From Kitchen to Garage" (Kitchen/Closets/Bar/
       Vanities): 3 de las fotos del slideshow del hero (closet, oficina/built-in,
       nicho de escritorio) + Garage/Murphy Beds/Entertainment, que hoy solo
       aparecen como texto sin foto en esta página. Overlay + texto quedan
       siempre visibles ahora (pedido explícito) — antes solo aparecían al
       hover, igual que el resto de la página; el único efecto al hacer hover
       es el 3D + sombreado de .cmj-mega-card (ver index.css), sin toggle de
       opacity/translate aparte. Sin estampado acá (pedido explícito) —
       fondo blanco con un degradado a gris bien sutil en vez de
       .cmj-pattern-bg. -->
  <section class="bg-linear-to-b from-paper to-silver/10">
    <div class="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <div class="flex items-end justify-between flex-wrap gap-4 mb-8">
        <h2 class="text-3xl sm:text-4xl font-normal tracking-wide text-ink">Our Work Speaks for Itself</h2>
        <a href="<?php echo esc_url(home_url('/gallery/')); ?>" class="text-tan-2 font-semibold text-sm hover:text-tan transition-colors">View Full Gallery →</a>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 perspective-[1400px]">
        <?php
        $gallery_teaser = array(
          array('img' => content_url('/uploads/2026/09/CMJHero1-1152x1536.webp'), 'title' => 'Walk-In Closet System'),
          array('img' => content_url('/uploads/2026/09/CMJHero2-1152x1536.webp'), 'title' => 'Home Office Built-Ins'),
          array('img' => $service_images['garages'], 'title' => 'Garage Storage Wall'),
          array('img' => content_url('/uploads/2026/09/CMJHero3-743x1024.webp'), 'title' => 'Built-In Desk &amp; Lit Shelving'),
          array('img' => $service_images['murphy-beds'], 'title' => 'Murphy Bed &amp; Desk Combo'),
          array('img' => $service_images['entertainment-centers'], 'title' => 'Entertainment Center'),
        );
        foreach ($gallery_teaser as $item) : ?>
          <a
            href="<?php echo esc_url(home_url('/gallery/')); ?>"
            class="cmj-mega-card group relative block rounded-md overflow-hidden border border-transparent aspect-square"
          >
            <img
              src="<?php echo esc_url($item['img']); ?>"
              alt="<?php echo esc_attr(wp_strip_all_tags($item['title'])); ?>"
              loading="lazy"
              class="cmj-mega-card__img absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/20 to-transparent"></div>
            <div class="absolute inset-x-0 bottom-0 p-4">
              <p class="text-paper font-semibold text-sm leading-snug"><?php echo wp_kses_post($item['title']); ?></p>
            </div>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ===== S9 — ÁREA DE SERVICIO (video de fondo LosAngeles.mp4, igual que el
       hero de Contact — ver contact-template.php) =====
       El video de skyline queda como fondo de sección; encima, el mapa real de
       Google (embebido, centrado y más grande que antes) para que sí sea
       funcional, y debajo un marquee de cards translúcidas con los condados que
       mencionamos arriba — mismo patrón de scroll continuo que el trust bar de
       S2 (.cmj-marquee-track, ver index.css), reutilizado tal cual (es una
       animación CSS pura, corre independiente en cada instancia de la página).
       El marquee va FUERA del <div> centrado con max-w-3xl para poder ser
       full-bleed (edge-to-edge), igual que el trust bar. bg-ink de respaldo para
       cuando el video se oculta por prefers-reduced-motion (ver .cmj-cta-video
       en index.css). -->
  <section class="relative overflow-hidden bg-ink">
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

    <div class="relative max-w-3xl mx-auto px-4 pt-20 sm:pt-28 text-center">
      <h2 class="text-3xl sm:text-4xl font-normal tracking-wide text-paper">Proudly Serving Greater Los Angeles</h2>
      <p class="mt-4 text-cream/80 leading-relaxed">
        Based in Los Angeles, we serve homeowners within a 40–60 mile radius: Los Angeles, Orange, San Bernardino, and Ventura counties.
        <!-- Nota dev: lista de condados sujeta a confirmación (Pendiente #9 del brief). -->
      </p>
      <a href="<?php echo esc_url($cfg['mapsUrl']); ?>" target="_blank" rel="noopener noreferrer" class="mt-5 inline-flex items-center gap-1.5 text-tan font-semibold text-sm hover:text-paper transition-colors">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Open in Google Maps
      </a>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 mt-10">
      <div class="h-80 sm:h-112 overflow-hidden rounded-md border border-paper/15 shadow-2xl">
        <iframe
          src="<?php echo esc_url($cfg['mapsEmbedUrl']); ?>"
          class="w-full h-full border-0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="CMJ Cabinets service area map"
        ></iframe>
      </div>
    </div>

    <?php
    $service_counties = array('Los Angeles County', 'Orange County', 'San Bernardino County', 'Ventura County');
    // Repetimos la lista varias veces DENTRO de cada mitad del track: son solo 4
    // condados, muy angostos — si cada mitad del marquee mide menos que el ancho
    // del viewport, se alcanza a ver el "final" de las cards antes de que la
    // otra mitad entre, y el movimiento infinito se rompe (hueco visible a la
    // derecha). Repitiendo la lista, cada mitad queda más ancha que cualquier
    // pantalla razonable y el loop de -50% siempre tiene cards visibles.
    $service_counties_group = array_merge($service_counties, $service_counties, $service_counties, $service_counties, $service_counties, $service_counties);
    ?>
    <div class="relative mt-10 sm:mt-12 pb-20 sm:pb-28 overflow-hidden">
      <div class="cmj-marquee-track cmj-marquee-track--slow flex w-max">
        <?php for ($i = 0; $i < 2; $i++) : ?>
          <div
            class="flex items-center flex-nowrap gap-4 pr-4 shrink-0"
            <?php echo $i === 1 ? 'aria-hidden="true"' : ''; ?>
          >
            <?php foreach ($service_counties_group as $county) : ?>
              <div class="flex items-center gap-2 px-5 py-3 rounded-md border border-paper/20 bg-paper/10 backdrop-blur-md text-paper text-sm font-medium whitespace-nowrap">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="text-tan shrink-0"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span><?php echo esc_html($county); ?></span>
              </div>
            <?php endforeach; ?>
          </div>
        <?php endfor; ?>
      </div>
    </div>
  </section>

  <!-- ===== S10 — FAQ =====
       Acordeón con <details>/<summary> nativo: cero JS, accesible por teclado
       de fábrica (Enter/Space abren/cierran, foco visible), y no depende del
       bundle de React ni de un <script> propio — mismo criterio de "usar la
       plataforma" que el resto de interacciones simples del sitio (menos código
       que mantener). El ícono +/× es el mismo <svg> rotado 45° al abrir
       (group-open:rotate-45), sin JS. Preguntas centralizadas en cmj_faqs()
       (functions.php) — about-template.php usa las mismas. -->
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

  <!-- ===== S11 — CTA BAND (bloque 3.4 del brief) — última sección de la home ===== -->
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
  var slides = document.querySelectorAll('.cmj-hero-slide');
  if (slides.length < 2) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var current = 0;
  var intervalMs = 7000; // debe coincidir con la duración del zoom (.cmj-hero-slide.is-active en index.css)

  setInterval(function () {
    var prev = slides[current];
    current = (current + 1) % slides.length;
    var next = slides[current];

    prev.classList.remove('is-active');

    // Reflow forzado: si no, el navegador no reinicia @keyframes al re-agregar
    // la misma clase (la animación seguiría "corrida" desde donde iba).
    void next.offsetWidth;
    next.classList.add('is-active');
  }, intervalMs);
})();
</script>

<script>
(function () {
  // Rotador de servicios de "From Kitchen to Garage" (.cmj-service-rotator__slide
  // en index.css) — mismo patrón que el slideshow del hero arriba, pero
  // además de is-active alternamos tabindex/aria-hidden en cada <a>: el
  // slide oculto no debe quedar en el orden de tab ni anunciarse a lectores
  // de pantalla mientras no es el que se ve.
  var slides = document.querySelectorAll('.cmj-service-rotator__slide');
  if (slides.length < 2) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var current = 0;
  var intervalMs = 5000;

  setInterval(function () {
    var prev = slides[current];
    current = (current + 1) % slides.length;
    var next = slides[current];

    prev.classList.remove('is-active');
    prev.setAttribute('tabindex', '-1');
    prev.setAttribute('aria-hidden', 'true');

    next.classList.add('is-active');
    next.removeAttribute('tabindex');
    next.removeAttribute('aria-hidden');
  }, intervalMs);
})();
</script>

<script>
(function () {
  // Máscara del loop de las cintas con video de fondo (ver .cmj-cta-video-mask en
  // index.css) — los archivos no cierran el loop de forma limpia, así que
  // disimulamos el corte con un breve "dip to black" antes/después del reinicio.
  // Home ahora tiene DOS videos de fondo (S9 Área de Servicio + S10 cinta CTA
  // final), así que iteramos sobre todos los .cmj-cta-video en vez de tomar solo
  // el primero con querySelector — cada video busca su propia .cmj-cta-video-mask
  // vecina dentro de la misma <section>, para que ambos queden enmascarados.
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

<script>
(function () {
  // Contador animado de la Stats Band (19+, 5★, 13, +1K): cuenta de 0 al valor
  // real CADA VEZ que la sección entra en viewport (no solo la primera vez) —
  // si el usuario sube y vuelve a bajar hasta ahí, se reinicia y cuenta de nuevo.
  // Progressive enhancement: si JS no corre, el número real ya está en el HTML
  // (server-rendered), no se pierde nada.
  var nums = document.querySelectorAll('.cmj-stat-number');
  if (!nums.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var DURATION = 1500;
  var rafIds = new Map(); // el → id de requestAnimationFrame, para cancelar si se re-dispara a mitad de camino

  function animate(el) {
    var target = parseInt(el.getAttribute('data-target'), 10) || 0;
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';

    // Si ya venía animando (p. ej. el usuario scrolleó rápido, salió y volvió a entrar),
    // cancelar el frame pendiente antes de reiniciar desde 0.
    if (rafIds.has(el)) {
      window.cancelAnimationFrame(rafIds.get(el));
    }

    el.textContent = prefix + '0' + suffix;
    var start = null;

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / DURATION, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out cúbico
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (progress < 1) {
        rafIds.set(el, window.requestAnimationFrame(step));
      } else {
        el.textContent = prefix + target + suffix; // valor exacto al terminar, sin errores de redondeo
        rafIds.delete(el);
      }
    }
    rafIds.set(el, window.requestAnimationFrame(step));
  }

  // Arrancar en 0 recién ahora que sabemos que JS corrió — así un usuario sin JS
  // ve directo el número real que ya vino del servidor.
  nums.forEach(function (el) {
    el.textContent = (el.getAttribute('data-prefix') || '') + '0' + (el.getAttribute('data-suffix') || '');
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animate(entry.target);
      }
    });
  }, { threshold: 0.4 });

  nums.forEach(function (el) {
    observer.observe(el);
  });
})();
</script>

<script>
(function () {
  // Scrollspy de la sección "Proceso" (S4, ver .cmj-method en index.css):
  // la fila "activa" es la que está más cerca del centro del viewport — un
  // scrollspy clásico de timeline, no un simple entra/sale como el resto de
  // reveals del sitio. Sincroniza en cada paso: número + ícono que se llenan
  // de tan (.is-active), el spine vertical y la barra de progreso (scaleY /
  // scaleX), el contador "0X / 0Y" y el crossfade de la foto de la izquierda
  // (.is-current). No se desactiva bajo prefers-reduced-motion: los ESTADOS
  // siguen siendo correctos (foto/número/spine correctos para el scroll
  // actual), solo las TRANSICIONES quedan instantáneas (ver el media query en
  // .cmj-method__* de index.css).
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

  // Scrollspy clásico: la fila activa es la ÚLTIMA cuyo top ya cruzó la línea
  // de referencia (50% del viewport), no "la más cercana al centro" — con una
  // lista corta de solo 3 filas (a diferencia de las 5, más altas, del sitio
  // de referencia), "más cercana al centro" hacía que la última fila quedara
  // activa apenas la sección entraba en pantalla, sin transición real entre
  // pasos. Este otro criterio avanza 0→1→2 a medida que cada fila realmente
  // pasa por la línea, sin importar qué tan alta sea la sección completa.
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
