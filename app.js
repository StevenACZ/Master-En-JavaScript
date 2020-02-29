/*class Vehiculo {
  #duenio;
  constructor(numPlaca, color, marca, velocidad, duenio) {
    console.log(numPlaca, color, marca, velocidad, duenio);
    this.numPlaca = numPlaca;
    this.color = color;
    this.marca = marca;
    this.velocidad = velocidad;
    this.#duenio = duenio;
  }

  acelera() {
    return `El vehiculo ${this.marca} acelera a ${this.velocidad}`;
  }

  frenar() {
    return `El vehiculo ${this.marca} freno!!`;
  }

  quienEsElDuenio() {
    return `El dueño es ${this.#duenio}`;
  }

  setValueDuenio(duenio) {
    this.#duenio = duenio;
  }
}

class Auto extends Vehiculo {
  constructor(numPlaca, color, marca, velocidad, duenio){
    super(numPlaca, color, marca, velocidad, duenio);
    this.AireAcondicionado = false;
  }

  encenderAireAcondicionado(value) {
    this.AireAcondicionado = value;
  }
}

class Moto extends Vehiculo {
  constructor(numPlaca, color, marca, velocidad, duenio){
    super(numPlaca, color, marca, velocidad, duenio);
    this.enUnaSolaRueda = false;
  }

  correrEnUnaSolaRueda(value) {
    this.enUnaSolaRueda = true;
  }
}

let auto = new Auto('123ACV', 'Rojo', 'Ford', '320km/h' ,'Steven');
let moto = new Moto('123ACV', 'Negro', 'Ford', '320km/h',  'Luis');

console.log(auto.quienEsElDuenio());
auto.setValueDuenio('pepe');
console.log(auto.quienEsElDuenio());
*/

class Vehiculo {
  constructor(color, marca, placa, velocidad) {
    this.color = color;
    this.marca = marca;
    this.placa = placa;
    this.velocidad = velocidad;
  }

  getVelocidad() {
    return `El vehiculo ${this.marca} va a ${this.velocidad}`;
  }
}

class Moto extends Vehiculo {
  constructor(color, marca, placa, velocidad) {
    super(color, marca, placa, velocidad);
  }
}

class Auto extends Vehiculo {
  constructor(color, marca, placa, velocidad) {
    super(color, marca, placa, velocidad);
  }
}

let torito = new Moto('rojo', 'torito', '2323sd', '140km/h');
let torito1 = new Moto('rojo', 'torito', '2323sd', '14km/h');
let torito2 = new Moto('rojo', 'torito', '2323sd', '10km/h');
console.log(torito.getVelocidad());
torito.velocidad = 'hola :|';
console.log(torito.getVelocidad());