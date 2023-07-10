import hambugerMenu from "./ejercicios2/menu_hamburgueza.js";
import { digitalClock, alarm } from "./ejercicios2/reloj.js";
import { moveBall, shortcuts } from "./ejercicios2/teclado.js";
import countdown from "./ejercicios2/cuenta_regresiva.js";
import scrollTopBottom from "./ejercicios2/boton_scroll.js";
import darkTheme from "./ejercicios2/tema_oscuro.js";
import responsiveMedia from "./ejercicios2/objeto_responsive.js";
import responsiveTester from "./ejercicios2/prueba_responsive.js";
import userDeviceInfo from "./ejercicios2/deteccion_dispositivo.js";
import netWorkStatus from "./ejercicios2/deteccion_red.js";
import webCam from "./ejercicios2/deteccion_webcam.js";
import getGeolaction from "./ejercicios2/gelocalizacion.js";
import searchFilters from "./ejercicios2/filtro_busqueda.js";
import draw from "./ejercicios2/sorteo.js";
import slider from "./ejercicios2/carrusel.js";
import scrollSpy from "./ejercicios2/scroll_espia.js";
import smartVideo from "./ejercicios2/video_inteligente.js";
import contactFormVaidations from "./ejercicios2/validaciones_formulario.js";
import speechNarrador from "./ejercicios2/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hambugerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm(
    "./assets/Carlos Vives - Mañana.mp3",
    "#activar-alarma",
    "#desactivar-alarma"
  );
  countdown(
    "countdown",
    "Jul 28,2021 10:00:00",
    "Feliz Cumpleaños Viejo Rodri"
  );
  scrollTopBottom(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91&ab_channel=jonmircha" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="600" height="450" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/iAMYtML7sJF1nLR9A" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.348375518137!2d-75.89188218527235!3d8.753254895656966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5a2ffb20023659%3A0x6704364566c4a465!2sDelfos%20Monter%C3%ADa!5e0!3m2!1ses!2sco!4v1620681056072!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolaction("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormVaidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");

netWorkStatus();

speechNarrador();
