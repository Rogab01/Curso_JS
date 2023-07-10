document.addEventListener("DOMContentLoaded", (e) => {
  const includeHTML = (el, url) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
        el.outerHTML = xhr.responseText;
      } else {
        let message =
          xhr.statusText ||
          "Ocurrio un Error al cargar el archivo, verifica que estes haciendo la peticion por http o https";
        el.outerHTML = `<div><h3>Error ${xhr.status}: ${message}</h3></div>`;
      }
    });

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-Type", "text/html; charset=utf-8");
    xhr.send();
  };

  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
});
