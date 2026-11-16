/* Menú lateral retráctil.
   Se crea desde JavaScript para no tocar el código HTML de los ejemplos del anexo.
   Las rutas se calculan a partir de la ubicación de este archivo (js/menu.js),
   así los enlaces funcionan igual desde la raíz y desde la carpeta ejemplos/. */
(function () {
  var script = document.currentScript;
  var base = new URL('../', script.src).href;

  var ejemplos = [
    ['01-formulario-completo', 'Formulario completo'],
    ['02-required', 'Campo obligatorio'],
    ['03-placeholder', 'Texto de ayuda'],
    ['04-size', 'Ancho del campo'],
    ['05-maxlength-minlength', 'Longitud del texto'],
    ['06-submit', 'Botón de envío'],
    ['07-button-img', 'Botón con imagen'],
    ['08-password', 'Contraseña'],
    ['09-number', 'Número'],
    ['10-date', 'Fecha'],
    ['11-textarea', 'Área de texto'],
    ['12-select', 'Lista desplegable']
  ];

  function el(tag, clase, texto) {
    var e = document.createElement(tag);
    if (clase) e.className = clase;
    if (texto) e.textContent = texto;
    return e;
  }
  function enlace(href, etiqueta, num) {
    var a = el('a');
    a.href = base + href;
    if (num) a.appendChild(el('span', 'n', num));
    a.appendChild(document.createTextNode(etiqueta));
    var actual = location.pathname.split('/').slice(-2).join('/');
    var destino = (base + href).split('/').slice(-2).join('/');
    if (actual === destino) a.setAttribute('aria-current', 'page');
    return a;
  }

  /* Botón de abrir y cerrar */
  var boton = el('button', 'menu-toggle');
  boton.type = 'button';
  boton.setAttribute('aria-controls', 'menu-lateral');
  boton.appendChild(el('span', 'barras'));

  /* Panel lateral */
  var menu = el('nav', 'menu-lateral');
  menu.id = 'menu-lateral';
  menu.setAttribute('aria-label', 'Menú principal');
  var marca = el('div', 'marca');
  marca.appendChild(el('strong', '', 'Taller HTML'));
  marca.appendChild(el('span', '', 'NRC-816 · Semana 4'));
  menu.appendChild(marca);

  menu.appendChild(el('h2', '', 'Navegación'));
  menu.appendChild(enlace('index.html', 'Inicio', '⌂'));
  menu.appendChild(enlace('registro.html', 'Registro de estudiantes', '★'));

  menu.appendChild(el('h2', '', 'Ejemplos del anexo'));
  ejemplos.forEach(function (par, i) {
    menu.appendChild(enlace('ejemplos/' + par[0] + '.html', par[1], String(i + 1)));
  });

  var fondo = el('div', 'menu-fondo');

  function abierto() { return document.body.classList.contains('menu-abierto'); }
  function esEscritorio() { return window.matchMedia('(min-width: 900px)').matches; }
  function guardar(v) { try { localStorage.setItem('menuAbierto', v ? '1' : '0'); } catch (e) {} }
  function leer() { try { return localStorage.getItem('menuAbierto'); } catch (e) { return null; } }

  function poner(v, recordar) {
    document.body.classList.toggle('menu-abierto', v);
    boton.setAttribute('aria-expanded', v ? 'true' : 'false');
    boton.setAttribute('aria-label', v ? 'Cerrar menú' : 'Abrir menú');
    if (recordar && esEscritorio()) guardar(v);
  }

  boton.addEventListener('click', function () { poner(!abierto(), true); });
  fondo.addEventListener('click', function () { poner(false, false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && abierto()) { poner(false, true); boton.focus(); }
  });
  /* En pantallas pequeñas, al elegir una página el menú se cierra */
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a') && !esEscritorio()) poner(false, false);
  });

  document.body.appendChild(boton);
  document.body.appendChild(menu);
  document.body.appendChild(fondo);

  /* Escritorio: abierto por defecto (o como lo dejó la persona). Celular: cerrado. */
  poner(esEscritorio() ? leer() !== '0' : false, false);
})();
