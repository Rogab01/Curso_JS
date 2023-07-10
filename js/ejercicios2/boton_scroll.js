const d = document,
      w =  window
export default function scrollTopBottom(btn){
    const $scrollBtn = d.querySelector(btn)

    w.addEventListener("scroll",(e)=>{
        let scrollTop = w.pageYOffset || d.documentElement.scrollTo

        if(scrollTop>700){
            $scrollBtn.classList.remove("hidden")
        }else{
            $scrollBtn.classList.add("hidden")
        }

       // console.log(w.pageYOffset, d.documentElement.scrollTop);
    })

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior:"smooth",
                top:0,
            })
        }
    })
}