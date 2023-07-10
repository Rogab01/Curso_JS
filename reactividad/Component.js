const Component = (function () {
  // creamos el constructor
  const Constructor = function (obj) {
    this.el = obj.el;
    this.data = obj.data;
    this.template = obj.template;
  };

  // Agregamo los metodos al prototipo del contructor del compoente

  //RENDER UI
  Constructor.prototype.render = function () {
    const $el = d.querySelector(this.el);
    if (!$el) return;

    $el.innerHTML = this.template(this.data);
    console.log(this.getState.data);
  };

  //ACTUALIZAR ESTADO DE FORMA REACTIVA
  Constructor.prototype.setState = function (obj) {
    for (let key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }
    this.render();
  };

  //OBTENER ESTADO DE FORMA INMUTABLE
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();
