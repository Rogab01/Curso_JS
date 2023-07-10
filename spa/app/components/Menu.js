export function Menu() {
  const $menu = document.createElement("nav");

  $menu.classList.add("menu");
  $menu.innerHTML = `
   <a href ="#/">Inicio</a> 
   <span>-</span>
   <a href ="#/search">Busqueda</a>
   <span>-</span>
   <a href ="#/contacto">Contacto</a>
   <span>-</span>
   <a href ="https://delfos.co" target="_blank" rel="noopener" >delfos</a>
  `;

  return $menu;
}
