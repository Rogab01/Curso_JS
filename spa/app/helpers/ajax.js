export async function ajax(props) {
  let { url, cbSuccess } = props;

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = err.statusText || "Ocurrio un Error al acceder al API";

      document.getElementById("main").innerHTML = `
              <div class="error">
                <h2>${err.status}: ${message}</h2>
              </div>
            `;

      document.querySelector(".loader").style.display = "none";
      console.log(err);
    });
}
