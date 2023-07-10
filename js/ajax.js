//Objeto XMLHttpRequest
(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();
  //console.log(xhr)
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      //console.log("Exito")
      //console.log(xhr.responseText)
      //$xhr.innerHTML = xhr.responseText
      let json = JSON.parse(xhr.responseText);
      //console.log(json)
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      //console.log("Error")
      let message = xhr.statusText || "Ocurrio un Error";
      $xhr.innerHTML = `Error ${xhr.status}:  ${message}`;
    }
    //console.log("Este mensaje se carga de cualquier forma")
  });
  /*uso api externa */
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  /*uso local*/
  //xhr.open("GET","assets/users.json")
  xhr.send();
})();

/*API Fetch*/
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();
  fetch("https://jsonplaceholder.typicode.com/users")
    /*.then((res)=>{
            console.log(res)
            return res.ok ? res.json() : Promise.reject(res)
        })*/
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      //console.log(json)
      //$fetch.innerHTML=json
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      //console.log(err)
      let message = err.statusText || "Ocurrio un errorrrr";
      $fetch.innerHTML = `Error ${err.status} : ${message}`;
    })
    .finally(() => {
      //console.log("Este mensaje se ejecuta no importa el resultado de la Fetch")
    });
})();

/*API Fetch + Async-Await */
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();
  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();
      //console.log(res, json)
      //if(!res.ok) throw new Error("Ocurrio un Error al solicitar los datos")
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      //console.log(err)
      let message = err.statusText || "Ocurrio un error";
      $fetchAsync.innerHTML = `Error ${err.status} : ${message}`;
    } finally {
      () => {
        //console.log("Este mensaje se ejecuta independiente del try catch")
      };
    }
  }
  getData();
})();

/*API AXIOS */
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    //.get("https://jsonplaceholder.typicode.com/users")
    .get("assets/users.json")
    .then((res) => {
      let json = res.data;
      //console.log(res)
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => {
      //console.log(err.response)
      let message = err.response.statusText || "Ocurrio un error";
      $axios.innerHTML = `Error ${err.response.status} : ${message}`;
    })
    .finally(() => {
      //console.log("Este mensaje se ejecuta independiente del resultado de AXIOS")
    });
})();

/*API AXIOS-ASYNC */
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();
  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;
      //console.log(res, json)
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);
    } catch (err) {
      //console.log(err.response)
      let message = err.response.statusText || "Ocurrio un error";
      $axiosAsync.innerHTML = `Error ${err.response.status} : ${message}`;
    } finally {
      //console.log("Este mensaje se ejecuta independiente del resultado de AXIOS-ASYNC")
    }
  }
  getData();
})();
