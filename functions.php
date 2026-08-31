<?php

function cmj_load_assets() {
  // Versionado dinámico con filemtime para evitar caché de assets
  $js_path  = get_theme_file_path('/build/index.js');
  $css_path = get_theme_file_path('/build/index.css');

  wp_enqueue_script(
    'cmjmainjs',
    get_theme_file_uri('/build/index.js'),
    array('wp-element', 'react-jsx-runtime'),
    file_exists($js_path) ? filemtime($js_path) : null,
    true
  );

  wp_enqueue_style(
    'cmjmaincss',
    get_theme_file_uri('/build/index.css'),
    array(),
    file_exists($css_path) ? filemtime($css_path) : null
  );

  // Config global para los componentes React
  wp_localize_script('cmjmainjs', 'cmjConfig', array(
    'homeUrl'  => home_url('/'),
    'logoUrl'  => '', // TODO: subir logo a la biblioteca de medios y poner la URL aquí
    'phone'    => '(323) 971-1543',
    'phoneRaw' => '+13239711543',
    'email'    => 'info@cmjcabinets.com', // TODO: confirmar email real del cliente (Pendiente #3 del brief)
    'address'  => 'Los Angeles, CA',
    'mapsUrl'  => 'https://maps.app.goo.gl/mpWzfYDrpMPRXsSj9', // GBP de CMJ (del sitio actual)
    'ctaUrl'   => home_url('/contact-us/'),
    'ctaLabel' => 'Free Estimate',
    'ctaHover' => "Let's Talk",
    'socials'  => array(
      'facebook'  => 'https://www.facebook.com/CMJCabinetsInc',
      'instagram' => 'https://www.instagram.com/cmjcabinetsinc/',
      'tiktok'    => 'https://www.tiktok.com/@cmjcabinetsinc',
      'youtube'   => 'https://youtube.com/@cmjcabinetsinc',
      'yelp'      => 'https://www.yelp.com/biz/cmj-designs-los-angeles',
    ),
  ));
}

add_action('wp_enqueue_scripts', 'cmj_load_assets');

function cmj_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'cmj_add_support');