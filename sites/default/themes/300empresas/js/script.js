const hamburger = document.querySelector('#header .hamburger');
const menu = document.querySelector('#header .menu');
// const menuOption = document.querySelector('#header .menu li');
const menuOption = document.querySelectorAll('#header .menu li');


function hamburgerActive() {
  if (hamburger.classList.contains('is-active')) {
    hamburger.classList.remove('is-active')
    menu.classList.remove('active')
  } else {
    hamburger.classList.add('is-active')
    menu.classList.add('active')
  }
}

hamburger.addEventListener("click", hamburgerActive);

menuOption.forEach(function(el) {
  // console.log(el);
  // console.log(el.querySelector('a').href.split('#')[1]);
  const href = el.querySelector('a').href.split('#')[1];
  el.addEventListener("click", function () {
    if (hamburger.classList.contains('is-active')) {
      hamburger.classList.remove('is-active')
      menu.classList.remove('active')
    }
    $("html, body").animate(
      {
        scrollTop: $(`#${href}`).offset().top
      },
      2000
    );
  })
});


const path = window.location.origin;

/* Mailchimp Form */
const $form = document.getElementById('form_newsletter');
// console.info($form);

const syncMailchimp = function (event) {
  event.preventDefault();
  // console.log('hola mundo');
  const data = new FormData($form);
  const email = data.get('email');
  const fname = data.get('fname');
  const lname = data.get('lname');
  const phone = data.get('phone');
  const terminos = data.get('terminos');
  let url;

  if (path == 'http://docker.test'){
    url = 'http://docker.test/sites/default/themes/300empresas/mailchimpApi.php';
  } else {
    url = 'http://mejoresempresas.laopinion.com.co/sites/default/themes/300empresas/mailchimpApi.php';
  }

  console.log(url)

  $.post(url, { 
    email: email, 
    fname: fname, 
    lname: lname, 
    phone: phone, 
    terminos: terminos 
  }, function (data, status) {
    console.log(data);
    console.log(status);
    if (status == 'success') {
      // $('#message').show();
      if (data == 200) {
        $('#form_newsletter').hide();
        $('#newsletter').html('<h3>Gracias por participar pronto informaremos el ganador.</h3>');
      } else {
        $('#newsletter').html('<h3 class=message>Algo salio mal!</h3>');
      }
    } else {
      // $('#message').show();
      $('#newsletter').html('<h3 class=message>Algo salio mal!</h3>');
    }
  });
}

if ($form != null) {
  $form.addEventListener('submit', syncMailchimp);
} 


$(document).ready(function() {
  $(".submit").click(function() {
    nombres = $("#nombres").val();
    apellidos = $("#apellidos").val();
    $("#payerFullName").val(nombres + " " + apellidos);
  });

  $("#Ediciones #edicion_1").click(function() {
    // console.log("okk");
    $("#formulario").slideDown();

    $("html, body").animate(
      {
        scrollTop: $("#formulario").offset().top
      },
      2000
    );

    cleanOptions();

    $("#formulario #package_option option[value='1']").attr(
      "selected",
      true
    );
    $("#amount").val("12000");
    $("#description").val("2012");
    signature("12000");
  });

  $("#Ediciones #edicion_2").click(function() {
    $("#formulario").slideDown();

    $("html, body").animate(
      {
        scrollTop: $("#formulario").offset().top
      },
      2000
    );

    cleanOptions();
    // console.log("dos");
    $("#formulario #package_option option[value='2']").attr(
      "selected",
      true
    );
    $("#amount").val("18000");
    $("#description").val("2013");
    signature("18000");
  });

  $("#Ediciones #edicion_3").click(function() {
    $("#formulario").slideDown();

    $("html, body").animate(
      {
        scrollTop: $("#formulario").offset().top
      },
      2000
    );

    cleanOptions();

    $("#formulario #package_option option[value='3']").attr(
      "selected",
      true
    );
    $("#amount").val("41000");
    $("#description").val("2014");
    signature("41000");
  });

  $("#Ediciones #edicion_4").click(function() {
    $("#formulario").slideDown();

    $("html, body").animate(
      {
        scrollTop: $("#formulario").offset().top
      },
      2000
    );

    cleanOptions();

    $("#formulario #package_option option[value='4']").attr(
      "selected",
      true
    );
    $("#amount").val("65000");
    $("#description").val("2015");
    signature("65000");
  });

  $("#Ediciones #edicion_5").click(function() {
    $("#formulario").slideDown();

    $("html, body").animate(
      {
        scrollTop: $("#formulario").offset().top
      },
      2000
    );

    cleanOptions();

    $("#formulario #package_option option[value='5']").attr(
      "selected",
      true
    );
    $("#amount").val("22000");
    $("#description").val("2016");
    signature("22000");
  });

  $("#Ediciones #edicion_6").click(function() {
    // console.log("okk");
    $("#formulario").slideDown();

    $("html, body").animate(
      {
        scrollTop: $("#formulario").offset().top
      },
      2000
    );

    cleanOptions();

    $("#formulario #package_option option[value='6']").attr(
      "selected",
      true
    );
    $("#amount").val("24000");
    $("#description").val("2017");
    signature("24000");
  });

  $("#Ediciones #edicion_7").click(function() {
    $("#formulario").slideDown();

    $("html, body").animate(
      {
        scrollTop: $("#formulario").offset().top
      },
      2000
    );

    cleanOptions();
    // console.log("dos");
    $("#formulario #package_option option[value='7']").attr(
      "selected",
      true
    );
    $("#amount").val("36000");
    $("#description").val("2018");
    signature("36000");
  });

  $("#Ediciones #edicion_8").click(function() {
    $("#formulario").slideDown();

    $("html, body").animate(
      {
        scrollTop: $("#formulario").offset().top
      },
      2000
    );

    cleanOptions();

    $("#formulario #package_option option[value='8']").attr(
      "selected",
      true
    );
    $("#amount").val("48000");
    $("#description").val("2019");
    signature("48000");
  });


  function signature(amount) {
    let nuevoAmount = amount;
    const domain = window.location.origin

    $.ajax({
      type: "POST",
      url: `${domain}/sites/default/themes/300empresas/signature.php`,
      data: { amount: nuevoAmount },
      success: function(data) {
        const separador = " "; // un espacio en blanco
        const limite = 2;
        const arreglo = data.split(separador, limite);

        $("#signature").val(arreglo[0]);
        $("#referenceCode").val(arreglo[1]);
      },
      error: function() {
        console.log("Error en crear la signature...");
      }
    });
  }

  function changePackage() {
    const option = this.value;
    // console.log(option)
    if (option == 1) {
      $("#amount").val("12000");
      $("#description").val("2012");
      signature("12000");
    } else if (option == 2) {
      $("#amount").val("18000");
      $("#description").val("2013");
      signature("18000");
    } else if (option == 3) {
      $("#amount").val("41000");
      $("#description").val("2014");
      signature("41000");
    } else if (option == 4) {
      $("#amount").val("65000");
      $("#description").val("2015");
      signature("65000");
    } else if (option == 5) {
      $("#amount").val("22000");
      $("#description").val(
        "2016"
      );
      signature("22000");
    } else if (option == 6) {
      $("#amount").val("24000");
      $("#description").val("2017");
      signature("24000");
    } else if (option == 7) {
      $("#amount").val("36000");
      $("#description").val("2018");
      signature("36000");
    } else if (option == 8) {
      $("#amount").val("48000");
      $("#description").val("2019");
      signature("48000");
    } 
  }

  const package_option = document.getElementById("package_option");
  if (package_option) {
    package_option.addEventListener("change", changePackage.bind(package_option))
  }

  function  cleanOptions() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8]
    // const length_Ediciones = document.getElementById('package_option').length

    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/from
    // const data = Array.from({length: length_Ediciones}, (v, i) =>  i  = i + 1);
    // console.log(data)
    data.map(function (value) {
      // console.log(value)
      $(`#formulario #package_option option[value='${value}']`).attr(
        "selected",
        false
      );
    })
  }

  const $waves = document.getElementById("btn__submit");
  // console.log($waves);
  // const $wavesRipple = document.querySelector('#btn .waves-ripple')

  function wavesRipple(e) {
    // e.preventDefault();
    let _this = this;

    let $child = document.querySelector(".waves-ripple");
    if ($child != null) {
      // console.log($child)
      _this.removeChild($child);
    }

    let posX = _this.offsetLeft,
      posY = _this.offsetTop,
      buttonWidth = _this.offsetWidth,
      buttonHeight = _this.offsetHeight;

    const el = document.createElement("span");
    el.setAttribute("class", "waves-ripple");
    _this.appendChild(el);

    if (buttonWidth >= buttonHeight) {
      buttonHeight = buttonWidth;
    } else {
      buttonWidth = buttonHeight;
    }

    let x = e.pageX - posX - buttonWidth / 2;
    let y = e.pageY - posY - buttonHeight / 2;

    const $ripple = document.querySelector(".waves-ripple");

    // $ripple.setAttribute('style', `width: ${buttonWidth}px; height: ${buttonHeight}px; top: ${y}px; left: ${x}px; `);
    $ripple.style.width = buttonWidth + "px";
    $ripple.style.height = buttonHeight + "px";
    $ripple.style.top = y + "px";
    $ripple.style.left = x + "px";
    $ripple.classList.add("waves-animate");
    // console.log($ripple);
  }

  if ($waves) {
    $waves.addEventListener("click", wavesRipple);
  }

});
