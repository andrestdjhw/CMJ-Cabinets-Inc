<?php
/**
 * Template Name: Terms & Conditions Template
 * Asignar a la página /terms-and-conditions/ (Page Attributes → Template).
 * El slug debe calzar con cmj_config()['termsUrl'] (link del Footer).
 *
 * Términos de uso del SITIO WEB, no del servicio: cada proyecto se rige por
 * su propio contrato escrito (sección 4). Mismo layout que
 * privacy-policy-template.php.
 * Pendiente: revisión del cliente / su abogado antes de publicar.
 */

$cfg = cmj_config();
$updated = 'October 1, 2026';

get_header(); ?>

<main>

  <!-- ===== HERO (sobrio, sin video — página de texto) ===== -->
  <section class="bg-linear-to-b from-ink to-ebano">
    <div class="max-w-3xl mx-auto px-4 py-16 sm:py-20 text-center">
      <h1 class="text-4xl sm:text-5xl font-normal tracking-wide text-paper">Terms &amp; Conditions</h1>
      <p class="mt-4 text-cream/70 text-sm uppercase tracking-[0.18em]">Last updated: <?php echo esc_html($updated); ?></p>
    </div>
  </section>

  <!-- ===== CONTENIDO ===== -->
  <section class="bg-paper cmj-pattern-bg">
    <div class="max-w-3xl mx-auto px-4 py-14 sm:py-20">
      <article class="prose max-w-none prose-headings:font-normal prose-headings:tracking-wide prose-headings:text-ink prose-h2:text-2xl prose-h2:mt-12 prose-p:text-ink/80 prose-li:text-ink/80 prose-strong:text-ink prose-a:text-tan-2 prose-a:font-semibold hover:prose-a:text-tan">

        <p>
          Welcome to the website of CMJ Cabinets, Inc. ("CMJ Cabinets," "we," "us," or "our"). These Terms &amp; Conditions govern your use of this website. By accessing or using the website, you agree to these terms. If you do not agree, please do not use the website.
        </p>

        <h2>1. About Us</h2>
        <p>CMJ Cabinets, Inc. is a family-owned custom cabinetry company based in Los Angeles, California, licensed by the California Contractors State License Board (CSLB License <?php echo esc_html($cfg['cslb']); ?>). We design, build, and install custom cabinetry for residential clients in Southern California.</p>

        <h2>2. Use of the Website</h2>
        <p>You may use this website for lawful, personal, and non-commercial purposes, such as learning about our services and contacting us. You agree not to:</p>
        <ul>
          <li>Use the website in any way that violates applicable laws or regulations</li>
          <li>Submit false, misleading, or fraudulent information through our forms</li>
          <li>Send spam, malware, or any content intended to harm the website or other users</li>
          <li>Attempt to gain unauthorized access to the website, its servers, or related systems</li>
          <li>Copy, scrape, or reproduce website content for commercial purposes without our written permission</li>
        </ul>

        <h2>3. Website Content</h2>
        <p>The content on this website, including text, project descriptions, and photos, is provided for general informational purposes only. Project photos show examples of our past work; materials, finishes, colors, and dimensions vary by project, and on-screen colors may differ from actual materials. Nothing on this website constitutes a binding offer, quote, or guarantee of price, availability, or timeline.</p>

        <h2>4. Estimates, Quotes, and Contracts</h2>
        <p>Submitting a form, calling, or emailing us does not create a contract or obligate either party. Free estimates are provided at no cost and with no obligation, and any timelines mentioned on this website (such as typical project durations) are general estimates only.</p>
        <p>Every project is governed by a separate written agreement between you and CMJ Cabinets, which sets out the scope of work, price, payment schedule, timeline, and warranty. If anything in that written agreement conflicts with this website, the written agreement controls.</p>

        <h2>5. Intellectual Property</h2>
        <p>All content on this website, including the CMJ Cabinets name, logo, and monogram, text, photos, graphics, and design, is owned by or licensed to CMJ Cabinets, Inc. and is protected by copyright, trademark, and other intellectual property laws. You may not use, copy, modify, or distribute any of it without our prior written permission.</p>

        <h2>6. Reviews and Third-Party Links</h2>
        <p>Our website displays customer reviews from third-party platforms such as Google, and links to third-party websites including our social media profiles. Reviews reflect the opinions of the individuals who wrote them. We are not responsible for the content, accuracy, or privacy practices of third-party websites, and visiting them is at your own risk.</p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>This website is provided "as is" and "as available." To the fullest extent permitted by law, we make no warranties of any kind, express or implied, about the website, including that it will be accurate, complete, uninterrupted, or error-free. This disclaimer applies only to the website itself; warranties for our cabinetry and installation work are provided in your project's written agreement.</p>

        <h2>8. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, CMJ Cabinets, Inc. and its owners, employees, and partners will not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this website or its content.</p>

        <h2>9. Indemnification</h2>
        <p>You agree to indemnify and hold harmless CMJ Cabinets, Inc. from any claims, damages, or expenses (including reasonable attorneys' fees) arising from your misuse of the website or your violation of these Terms &amp; Conditions.</p>

        <h2>10. Privacy</h2>
        <p>Your use of this website is also governed by our <a href="<?php echo esc_url($cfg['privacyUrl']); ?>">Privacy Policy</a>, which explains how we collect and use your information.</p>

        <h2>11. Governing Law</h2>
        <p>These Terms &amp; Conditions are governed by the laws of the State of California, without regard to its conflict-of-law rules. Any dispute related to this website will be resolved in the state or federal courts located in Los Angeles County, California.</p>

        <h2>12. Changes to These Terms</h2>
        <p>We may update these Terms &amp; Conditions from time to time. When we do, we will change the "Last updated" date at the top of this page. Your continued use of the website after changes are posted means you accept the updated terms.</p>

        <h2>13. Contact Us</h2>
        <p>If you have questions about these Terms &amp; Conditions, contact us:</p>
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
