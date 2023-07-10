/* console.log(window);
        console.log(document);

        let texto="Hola, soy tu amigo y docente digital... jonathan mircha";
        const hablar=(texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

        hablar(texto); */

/* console.log("****************** Elementos del Documento *****************");
        console.log(document);
        console.log(document.head);
        console.log(document.body);
        console.log(document.documentElement);
        console.log(document.doctype);
        console.log(document.charset);
        console.log(document.title);
        console.log(document.links);
        console.log(document.images);
        console.log(document.forms);
        console.log(document.styleSheets);
        console.log(document.scripts);
        setTimeout(()=>{
          console.log(document.getSelection().toString());
        },3000);
        document.write("<h2>Hola mundo desde el DOM</h2>") */

/* console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el)=>console.log(el)) */

/* console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));
document.documentElement.lang="en";
console.log(document.documentElement.getAttribute("lang"));
document.documentElement.setAttribute("lang","es-ES");
console.log(document.documentElement.lang);
const $linkDOM =document.querySelector(".link-dom");
$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));


//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelos de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description="Suscribete a mi canal y comparte";
console.log($linkDOM.dataset.description); */

/* const $linkDOM =document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width="50%";
$linkDOM.style.textAlign="center";
$linkDOM.style.marginLeft="auto";
$linkDOM.style.marginRight="auto";
$linkDOM.style.padding="1rem";
$linkDOM.style.borderRadius=".5rem";


console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM)); */

//

/* const $html=document.documentElement,
      $body=document.body;

let varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor=getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor=varDarkColor;
$body.style.color=varYellowColor; 

$html.style.setProperty("--dark-color","#000");
varDarkColor= getCoompuptedStyle($html).getProperty.value("--dark-color");

~body.style.setProperty("background-color",varDarkColor)



*/

/* const $card= document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45","rotate-135");
$card.classList.add("opacity-80","sepia") */

/* const $whatIsDOM= document.getElementById("que-es");


let text=`
<p>
El modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es una API para documentos HTML y XML
</p>

<p>
Este provee una representación estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo js.
</p>

<p>
<mark>
el DOM no esp parte de las especificacion de javascriot, es una API para los navegadores
</mark>
</p>
`; */

/* $whatIsDOM.innerText=text; */
/* $whatIsDOM.textContent=text;
$whatIsDOM.innerHTML=text; */

/* const $cards=document.querySelector(".cards")
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); */

/* const $figure=document.createElement("figure"),
      $figure2=document.createElement("figure"),
      $img=document.createElement("img"),
      $figcaption=document.createElement("figcaption"),
      $figcaptionText=document.createTextNode("animals"),
      $cards=document.querySelector(".cards");

    $img.setAttribute("src","https://placeimg.com/300/300/animals");
    $img.setAttribute("alt","animals");
    $figure.classList.add("card")
    
    $figcaption.appendChild($figcaptionText);
    $figure.appendChild($img);
    $figure.appendChild($figcaption);
    $cards.appendChild($figure);

    $figure2.innerHTML=`
      <img src="https://placeimg.com/300/300/people" alt="People">
      <figcaption>People</figcaption>
    `;

    $figure2.classList.add("card");
    $cards.appendChild($figure2);

    const estaciones=["Primavera","Verano","Invierno","Otoño"],
          $ul=document.createElement("ul");
    
document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el=>{
  const $li=document.createElement("li");
  $li.textContent=el;
  $ul.appendChild($li)
}); */

/* const continentes=["Africa","America","Europa","Oceania","Asia"],
      $ul2=document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML="";

continentes.forEach((el)=>($ul2.innerHTML+=`<li>${el}</li>`))

const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
      $ul3=document.createElement("ul"),
      $frament=document.createDocumentFragment();

meses.forEach(el=>{
  const $li=document.createElement("li");
  $li.textContent=el;
  $frament.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($frament);
document.body.appendChild($ul3) */

/* const $cards =document.querySelector(".cards"),
      $template =document.getElementById("template-card").content,
      $frament = document.createDocumentFragment(),
      cardContent =[
        {
          title:"Tecnologia",
          img:"https://placeimg.com/300/300/tech"
        },
        {
          title:"Animales",
          img:"https://placeimg.com/300/300/animals"
        },
        {
          title:"Personas",
          img:"https://placeimg.com/300/300/people"
        },
        {
          title:"Arquitectura",
          img:"https://placeimg.com/300/300/arch"
        },
        {
          title:"Naturaleza",
          img:"https://placeimg.com/300/300/nature"
        }

      ]

      cardContent.forEach(el=>{
        $template.querySelector("img").setAttribute("src",el.img);
        $template.querySelector("img").setAttribute("alt",el.title);
        $template.querySelector("figcaption").textContent=el.title;

        let $clone =document.importNode($template,true);
        $frament.appendChild($clone);
      })

      $cards.appendChild($frament); */

/* const $cards = document.querySelector(".cards"),
      $newCards =document.createElement("figure"),
      $cloneCards =$cards.cloneNode(true);

$newCards.innerHTML=`
    <img src="https://placeimg.com/300/300/any" alt="Any">
    <figcaption>Any</figcaption>
`;

$newCards.classList.add("card"); */

//$cards.replaceChild($newCards,$cards.children[2]);
//$cards.removeChild($cards.lastElementChild)
//$cards.insertBefore($newCards,$cards.firstElementChild);

/* document.body.appendChild($cloneCards) */

/* function holaMundo(){
  alert("Hola mundo 2")
  console.log(event);
}

function saludar(nombre="desconocido"){
  alert(`Hola ${nombre}`)
}

const $eventosemantico= document.getElementById("evento-semantico"),
      $eventoMultiple=document.getElementById("evento-multiple"),
      $eventoremover=document.getElementById("evento-remover");

$eventosemantico.onclick= holaMundo;
$eventosemantico.onclick = function(e){
  alert("hola mundo manejador de eventos semanticos");
  console.log(e);
  console.log(event);
}

$eventoMultiple.addEventListener("click",holaMundo)
$eventoMultiple.addEventListener("click",(e)=>{
  alert("hola mundo manejador de eventos Multiple")
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

$eventoMultiple.addEventListener("click",()=>{
saludar();
saludar("jon");
});

const removerdobleClick= (e)=>{
  alert(`removiendo evento de tipo ${e.type}`);
  console.log(e);
  $eventoremover.removeEventListener("dblclick",removerdobleClick);
  $eventoremover.disabled=true;
}

$eventoremover.addEventListener("dblclick",removerdobleClick) */

/* const $divsEventos=document.querySelectorAll(".eventos-flujo div"),
      $linkEventos=document.querySelector(".eventos-flujo a"); */

/* function flujoEventos(e){
  console.log(`Hola te saluda ${this.className} el click lo origino ${e.target.className}`);
  e.stopPropagation();
}

document.addEventListener("click",(e)=>{
  console.log("click en ", e.target);

  if(e.target.matches(".eventos-flujo div")){
    flujoEventos(e)
  }

  if(e.target.matches(".eventos-flujo a")){
    alert("hola, soy Rodrigo estudaindo JS");
    e.preventDefault();
  }


}) */

/* console.log($divsEventos); */

/* $divsEventos.forEach(div =>{
  div.addEventListener("click",flujoEventos);
  div.addEventListener("click",flujoEventos,false);
  div.addEventListener("click",flujoEventos,true);
  div.addEventListener("click",flujoEventos,{
    capture:false,
    once:true
  });
}); */

/* $linkEventos.addEventListener("click",(e)=>{
  alert("hola, soy Rodrigo estudaindo JS");
  e.preventDefault();
  e.stopPropagation();
}) */

/* window.addEventListener("resize",(e)=>{
  console.clear();
  console.log("*********** Evento Resize");
  console.log(window.innerWidth);
  console.log(window.innerWidth);
  console.log(window.outerWidth);
  console.log(window.outerHeight);  
  console.log(e);
})

window.addEventListener("scroll",(e)=>{
  console.clear();
  console.log("*********** Evento scroll");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
})

window.addEventListener("load",(e)=>{
  //console.clear();
  console.log("*********** Evento Load");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
})

window.addEventListener("DOMContentLoaded",(e)=>{
  //console.clear();
  console.log("*********** Evento DOMContentLoaded");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
})
 */

/* const $btnAbrir =document.getElementById("abrir-ventana"),
      $btnCerrar =document.getElementById("cerrar-ventana"),
      $btnImprimir =document.getElementById("imprimir-ventana");


let ventana;

$btnAbrir.addEventListener("click",e=>{
  ventana= open("https://delfos.co")
});

$btnCerrar.addEventListener("click",e=>{
  ventana.close();
  
});

$btnImprimir.addEventListener("click",e=>{
  Window.print();
}) */

/* console.log("******************* Object URL (location) *******************"); */

/* console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.pathname); */
//location.reload();

/* console.log("******************* Object HISTORIAL (history) *******************");

console.log("******************* Object NAEGADOR (navigator) *******************"); */
