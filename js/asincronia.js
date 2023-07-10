/* setTimeout(()=>{
    console.log("Inicio");
    console.log("esto se ejecuta una sola vez")
},3000);

setInterval(() => {
    console.log("Se esta ejecutando un setInterval, esto se ejecuta cada cierto intervalo de tiempo")
    
}, 1000); */
/* let temporizador =setTimeout(() => {
    console.log(new Date().toLocaleTimeString());
},1000);

clearTimeout(temporizador)
console.log("despues del clear"); */

/* let temporizador =setInterval(() => {
    console.log(new Date().toLocaleTimeString());
},1000);

clearInterval(temporizador);
console.log("despues del claer"); */

/*Codigo sincrono bloqueante */
/* (()=>{
    console.log("Codigo Sincrono");
    console.log("Inicio");
    function dos(){
        console.log("Dos");
    }

    function uno(){
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
}) */

/*Codigo Asincrono NO bloqueante */
/* (()=>{
    console.log("Codigo Asincrono");
    console.log("Inicio");
    
    function dos(){
        setTimeout(function() {
            console.log("Dos");
        }, 1000);
    }

    function uno(){
        setTimeout(function() {
            console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
}); */

/* function cuadradoCallback(value,callback){
    setTimeout(() => {
        callback(value,value*value);
    }, 0 | Math.random()*1000);
}

cuadradoCallback(0,(value,result)=>{
    console.log("inicia callback");
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(1,(value,result)=>{
        console.log(`Callback: ${value}, ${result}`); 
        cuadradoCallback(2,(value,result)=>{
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(3,(value,result)=>{
                console.log(`Callback: ${value}, ${result}`); 
                cuadradoCallback(4,(value,result)=>{
                    console.log(`Callback: ${value}, ${result}`); 
                    cuadradoCallback(5,(value,result)=>{
                        console.log(`Callback: ${value}, ${result}`); 
                    });
                });
            }); 
        });
    });
}); */

function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `Error, el valor "${value}" ingresado no es un numero.`
    );
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

/* cuadradoPromise(0)
    .then((obj)=>{
       // console.log(obj);
       console.log("Inicio Promise");
       console.log(`Promise ${obj.value}, ${obj.result}`);
       return cuadradoPromise(1);
    })
    .then((obj)=>{
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
     })
     .then((obj)=>{
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(3);
     })
     .then((obj)=>{
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(4);
     })
     .then((obj)=>{
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
     })
     .then((obj)=>{
        console.log(`Promise ${obj.value}, ${obj.result}`);
        console.log("fin promise")
     })
    .catch(err=>console.error(err)); */

async function funccionAsincronaDeclarada() {
  try {
    console.log("inicio Async function");

    let obj = await cuadradoPromise(0);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise("3");
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    console.log(`FIN Async function`);
  } catch (err) {
    console.error(err);
  }
}

funccionAsincronaDeclarada();

const funccionAsincronaExpresada = async () => {
  try {
    console.log("inicio Async function");

    let obj = await cuadradoPromise(6);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(7);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(8);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise("9");
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(10);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    console.log(`FIN Async function`);
  } catch (err) {
    console.error(err);
  }
};

funccionAsincronaExpresada();
