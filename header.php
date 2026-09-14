<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>

    <!-- Navbar (React). El sticky va en ESTE div, no en el <header> que monta React adentro:
         el div es hijo directo de <body> (alto = toda la página), así que el sticky tiene
         recorrido real. Si el sticky fuera del <header>, su contenedor (este mismo div, vacío
         en el HTML estático) mediría lo mismo que el header — cero margen para "pegarse". -->
    <div id="cmj-navbar" class="sticky top-0 z-50"></div>