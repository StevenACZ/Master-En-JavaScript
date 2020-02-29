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
console.log(auto.quienEsElDuenio());*/

/*
function makeSizer(size) {
  return function() {
    this.style.fontSize = `${size}px`;
  }
}

let size12 = makeSizer(12);
let size14 = makeSizer(14);
let size15 = makeSizer(15);
let size16 = makeSizer(16);

document.querySelector('.js1').onclick = size12;
document.querySelector('.js2').onclick = size14;
document.querySelector('.js3').onclick = size15;
document.querySelector('.js4').onclick = size16;*/

"use strict";
function foo() {
  let name = 'sebastian';
  let lastName = 'yabiku';

  function getName() {
    return name + ' ' + lastName
  }

  function getLastName() {
    return lastName
  }

  return {
    getName,
    lastName
  }
}

let foo1 = foo();

console.log(foo1.getName());