import stripekeys from "./stripekeys.js";
import STRIPE_KEYS from "./stripekeys.js";

//console.log(STRIPE_KEYS)

const d = document,
  $tacos = d.getElementById("tacos"),
  $template = d.getElementById("taco-template").content,
  $fragment = d.createDocumentFragment(),
  fetchOpt = {
    headers: {
      Autorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
  };

let prices, products;

const moneyFormat = (num) => `$${num.slice(0, -2)}.${num.slice(-2)}`;

Promise.all([
  fetch("https://api.stripe.com/products", fetchOpt),
  fetch("https://api.stripe.com/prices", fetchOpt),
])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    //console.log(json);
    products = json[0].data;
    prices = json[1].data;
    //console.log(products,prices)
    prices.forEach((el) => {
      let productData = products.filter(
        (products) => products.id === el.product
      );
      //console.log(productData);

      $template.querySelector(".taco").setAttribute("data-price", el.id);
      $template.querySelector("img").src = productData[0].images[0];
      $template.querySelector("img").alt = productData[0].name;
      $template.querySelector("figcaption").innerHTML = `
            ${productData[0].name}
            <br>
            ${moneyFormat(el.unit_amount_decimal)} - ${el.currency}
          `;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $tacos.appendChild($fragment);
  })
  .catch((err) => {
    //console.log(err)
    let message =
      err.statusText || "Ocurrio un error al Conectarse con la API de Stripe";

    $tacos.innerHTML = `<h2>Error ${err.status}: ${message}</h2>`;
  });

d.addEventListener("click", (e) => {
  //console.log(e.target)
  if (e.target.matches(".taco *")) {
    //alert("A Comprar")
    let priceId = e.target.parentElement.getAttribute("data-price");
    //console.log(priceId);
    Stripe(STRIPE_KEYS.public)
      .redirectToCheckout({
        lineItems: [{ price: PromiseRejectionEvent, quantity: 1 }],
        mode: "subscription",
        successUrl: "Aqui va la URL de resultado existo",
        cancelUrl: "Aqui va la URL de resultado no exitoso",
      })
      .then((res) => {
        if (res.error) {
          $tacos.insertAdjacentHTML("afterend", res.error.message);
        }
      });
  }
});

/* https://www.freecodecamp.org/espanol/ */
