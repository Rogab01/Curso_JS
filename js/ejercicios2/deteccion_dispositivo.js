const d  = document,
      n  = navigator,
      ua = n.userAgent


export default function userDeviceInfo(id){
    const $id = d.getElementById(id),
          isMobile = {
            android : ()=> ua.match(/android/i),
            ios     : ()=> ua.match(/iphone|ipad|ipod/i),
            windows : ()=> ua.match(/windows phone/i),
            any     : function (){
                            return this.android() || this.ios() || this.windows()
                       }
          },
          isDesktop ={
              linux  :()=> ua.match(/linux/i),
              mac    :()=> ua.match(/mac os/i),
              windows:()=> ua.match(/windows nt/i),
              any     : function (){
                            return this.linux() || this.mac() || this.windows()
                        }
          },
          isBrowse = {
            chrome   :()=> ua.match(/chrome/i),
            safari   :()=> ua.match(/safari/i),
            firefox  :()=> ua.match(/firefox/i),
            opera    :()=> ua.match(/opera/i),
            ie       :()=> ua.match(/ie/i),
            edge     :()=> ua.match(/edge/i),
            any      : function (){
                            return this.chrome() || this.safari() || this.firefox() || this.firefox() || this.opera() || this.ie() || this.edge()
                        }
          }

/* console.log(ua)
console.log(isMobile.android())
console.log(isMobile.ios())
console.log(isMobile.any())
console.log(isDesktop.any()) */


$id.innerHTML = `
<ul>
    <li>User Agent : <b>${ua}</b></li>
    <li>Plataforma : <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
    <li>Navegador  : <b>${isBrowse.any()}</b></li>
</ul>
`

/* texto esclusivo*/

if(isBrowse.chrome()){
    $id.innerHTML += `<p><mark>Este texto es esclusivo para CHROME</mark></p>`
}

if(isBrowse.firefox()){
    $id.innerHTML += `<p><mark>Este texto es esclusivo para FIREFOX</mark></p>`
}


if(isDesktop.linux()){
    $id.innerHTML += `<p><mark>Descarga Nuestro software para Linux</mark></p>`
}

if(isDesktop.mac()){
    $id.innerHTML += `<p><mark>Descarga Nuestro software para Mac OS</mark></p>`
}

if(isDesktop.windows()){
    $id.innerHTML += `<p><mark>Descarga Nuestro software para Windows</mark></p>`
}

/*Redirecciones */

if(isMobile.android()){
    window.location.href="https://delfos.co"
}
}