<section id="Home">
  <section id="slide_principal">
    <figure>
      <img class="slide" src="<?php print base_path(); ?>sites/default/themes/300empresas/images/slide1.png" alt="slide">
      <img class="slideMovil" src="<?php print base_path(); ?>sites/default/themes/300empresas/images/slideMovil.png" alt="slide">
    </figure>
    <div class="container slide_info">
      <hr>
      <div class="info">
        <div class="logo"></div>
        <p>En esta edición encontrará información sobre la industria de la moda, el calzado, emprendimientos y la economía regional</p>
      </div>
    </div>
  </section>

  <section id="posts">
    <div class="container posts">
      <?php $view = views_get_view('home'); print $view->preview('block_1'); ?>
    </div>
  </section>

  <section id="lista_empresas">
    <div class="container lista">
      <div class="info">
        <div class="logo"></div>
        <p>Aquí encontrará el listado de las empresas más productivas y destacadas de la región</p>
        <button><a href="">Vea la <strong>lista</strong></a></button>
      </div>
    </div>
    <div class="img">
      <img src="<?php print base_path(); ?>sites/default/themes/300empresas/images/img.jpg" alt="img-1">
    </div>
  </section>

  <section id="newsletter">
    <div class="container">
      <div class="header">
        <h3>!SUSCRÍBASE!</h3>
        <p>PARA RECIBIR TODA LA INFORMACIÓN AL DÍA</p>
      </div>
      <hr>
      <form id="form_newsletter">
        <input type="text" name="fname" placeholder="NOMBRE Y APELLIDO">
        <input type="email" name="email" placeholder="CORREO ELÉCTRONICO" required>
        <div id="terminos">
          <input type="checkbox" name="terminos" value="Acepta terminos y condiciones" required>
          <label for="terminos">Acepto los términos y condiciones y he leído la política de tratamiento de los datos personales</label>
        </div>
        <button class="btn_enviar">Enviar</button>
      </form>
    </div>
  </section>

  <section id="portadas">
    <h3 class="container">Las mejores empresas de norte de santander en su octava edición</h3>
    <a href="/ediciones-pdf">
      <img class="portada" src="<?php print base_path(); ?>sites/default/themes/300empresas/images/portadas.png" alt="portadas">
    </a>
    <img class="portadaMovil" src="<?php print base_path(); ?>sites/default/themes/300empresas/images/portadasMovil.png" alt="portadas">
    <h2 class="container">Obtenga las ediciones anteriores de su revista las mejores empresas en pdf</h2>
    <div class="container button">
      <button><a href="/ediciones-pdf">Clic Aquí</a></button>
    </div>
  </section>

</section>