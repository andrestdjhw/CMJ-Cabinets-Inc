<?php
/**
 * Template Name: Privacy Policy Template
 * Asignar a la página /privacy-policy/ (Page Attributes → Template). WordPress
 * suele crear un borrador "Privacy Policy" con ese slug — se puede reusar.
 * El slug debe calzar con cmj_config()['privacyUrl'] (link del Footer).
 *
 * Borrador redactado a partir de lo que el sitio hace hoy (Contact Form vía
 * EmailJS, mapas de Google, widget de reseñas de Trustindex, Google Fonts,
 * sin analytics ni píxeles). Si se agrega un servicio que recolecte datos
 * (Google Analytics, Meta Pixel, chatbot...), actualizar la sección 4.
 * Pendiente: revisión del cliente / su abogado antes de publicar.
 */

$cfg = cmj_config();
$updated = 'October 1, 2026';

get_header(); ?>

<main>

  <!-- ===== HERO (sobrio, sin video — página de texto) ===== -->
  <section class="bg-linear-to-b from-ink to-ebano">
    <div class="max-w-3xl mx-auto px-4 py-16 sm:py-20 text-center">
      <h1 class="text-4xl sm:text-5xl font-normal tracking-wide text-paper">Privacy Policy</h1>
      <p class="mt-4 text-cream/70 text-sm uppercase tracking-[0.18em]">Last updated: <?php echo esc_html($updated); ?></p>
    </div>
  </section>

  <!-- ===== CONTENIDO ===== -->
  <section class="bg-paper cmj-pattern-bg">
    <div class="max-w-3xl mx-auto px-4 py-14 sm:py-20">
      <article class="prose max-w-none prose-headings:font-normal prose-headings:tracking-wide prose-headings:text-ink prose-h2:text-2xl prose-h2:mt-12 prose-p:text-ink/80 prose-li:text-ink/80 prose-strong:text-ink prose-a:text-tan-2 prose-a:font-semibold hover:prose-a:text-tan">

        <p>
          CMJ Cabinets, Inc. ("CMJ Cabinets," "we," "us," or "our") respects your privacy. This Privacy Policy explains what information we collect when you visit our website or contact us, how we use it, and the choices you have. By using this website, you agree to the practices described below.
        </p>

        <h2>1. Information We Collect</h2>
        <p><strong>Information you give us.</strong> When you fill out our contact or estimate request form, call us, or email us, we may collect:</p>
        <ul>
          <li>Your name</li>
          <li>Phone number and email address</li>
          <li>The type of project you're interested in</li>
          <li>Any details you include in your message (for example, your address or photos of your space)</li>
        </ul>
        <p><strong>Information collected automatically.</strong> Like most websites, our hosting provider automatically records basic technical information when you visit, such as your IP address, browser type, device type, pages visited, and the date and time of your visit. This information is used to keep the website secure and working properly.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your questions and estimate requests</li>
          <li>Schedule consultations, site visits, and installations</li>
          <li>Prepare designs, quotes, and contracts for your project</li>
          <li>Provide customer service and follow up on completed projects</li>
          <li>Maintain the security and performance of our website</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>We do not send marketing emails or text messages unless you ask us to.</p>

        <h2>3. How We Share Your Information</h2>
        <p><strong>We do not sell your personal information, and we do not share it for targeted advertising.</strong> We only share information:</p>
        <ul>
          <li>With service providers that help us run our business and website (for example, our website host and the service that delivers contact form messages to our inbox), who may only use it to provide those services to us</li>
          <li>With trusted partners directly involved in your project (for example, a countertop fabricator), only when needed and with your knowledge</li>
          <li>When required by law, or to protect our rights, property, or safety, or that of others</li>
        </ul>

        <h2>4. Third-Party Services</h2>
        <p>Our website uses the following third-party services, which may collect information according to their own privacy policies:</p>
        <ul>
          <li><strong>EmailJS</strong> delivers the messages you send through our contact form. <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">EmailJS Privacy Policy</a></li>
          <li><strong>Google Maps</strong> displays the embedded maps of our location and service area. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
          <li><strong>Trustindex</strong> displays our Google reviews on the website. <a href="https://www.trustindex.io/privacy-policy/" target="_blank" rel="noopener noreferrer">Trustindex Privacy Policy</a></li>
          <li><strong>Google Fonts</strong> loads the typefaces used on this website. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
        </ul>
        <p>Our website also links to our profiles on Facebook, Instagram, TikTok, Google, and the Better Business Bureau. When you visit those sites, their own privacy policies apply.</p>

        <h2>5. Cookies</h2>
        <p>Our website does not use advertising or tracking cookies of its own. Some of the third-party services listed above (such as embedded Google Maps) may set their own cookies when their content loads. You can block or delete cookies through your browser settings; the website will continue to work, although some embedded content may not display.</p>

        <h2>6. Data Retention</h2>
        <p>We keep the information you send us for as long as needed to respond to you, complete your project, provide after-sale service, and meet our legal, tax, and licensing record-keeping obligations. After that, we delete it or keep it in a form that no longer identifies you.</p>

        <h2>7. Data Security</h2>
        <p>We use reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

        <h2>8. Your California Privacy Rights</h2>
        <p>If you are a California resident, and to the extent the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), applies to us, you have the right to:</p>
        <ul>
          <li><strong>Know</strong> what personal information we have collected about you and how we use and share it</li>
          <li><strong>Delete</strong> the personal information we have collected from you, subject to certain exceptions</li>
          <li><strong>Correct</strong> inaccurate personal information</li>
          <li><strong>Opt out</strong> of the sale or sharing of your personal information (as noted above, we do not sell or share it)</li>
          <li><strong>Not be discriminated against</strong> for exercising any of these rights</li>
        </ul>
        <p>Under California's "Shine the Light" law (Civil Code § 1798.83), you may also ask whether we have shared your personal information with third parties for their direct marketing purposes. We do not.</p>
        <p>To make a request, contact us using the information below. We may need to verify your identity before responding.</p>

        <h2>9. Children's Privacy</h2>
        <p>Our website and services are intended for adults. We do not knowingly collect personal information from children under 13. If you believe a child has sent us personal information, please contact us and we will delete it.</p>

        <h2>10. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. When we do, we will change the "Last updated" date at the top of this page. We encourage you to review it periodically.</p>

        <h2>11. Contact Us</h2>
        <p>If you have questions about this Privacy Policy or want to exercise your privacy rights, contact us:</p>
        <p>
          <strong>CMJ Cabinets, Inc.</strong><br />
          <?php echo esc_html($cfg['address']); ?><br />
          Phone: <a href="tel:<?php echo esc_attr($cfg['phoneRaw']); ?>"><?php echo esc_html($cfg['phone']); ?></a><br />
          Email: <a href="mailto:<?php echo esc_attr($cfg['email']); ?>"><?php echo esc_html($cfg['email']); ?></a>
        </p>

      </article>
    </div>
  </section>

</main>

<?php get_footer(); ?>
