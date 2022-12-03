function Tech() {
    this.turnOn = function () {
      console.log("Прибор включен в розетку");
    };
    this.turnOff = function () {
      console.log("Прибор выключен из розетки");
    };
  }
  
  function Lamp(name) {
    this.name = name;
    this.powerConsumption = 5;
    this.color = "Белый";
    this.lightsNumber = 1;
    this.isEnabled = false;
  
    this.enable = function () {
      this.isEnabled = true;
      console.log(`${this.name} включена`);
    };
  
    this.disable = function () {
      this.isEnabled = false;
      console.log(`${this.name} выключена`);
    };
  
    this.calcPowerConsumption = function () {
      if (this.turnOn && this.isEnabled) {
        console.log(
          `${this.name} потребляет ${this.powerConsumption} вольт электроэнергии`
        );
      } else {
        console.log(`${this.name} потребляет 0 вольт электроэнергии`);
      }
    };
  }
  
  Lamp.prototype = new Tech();
  
  function Laptop(model, opSystem) {
    this.powerConsumption = 20;
    this.model = model;
    this.opSystem = opSystem;
    this.isEnabled = false;
  
    this.enable = function () {
      this.isEnabled = true;
      console.log(`${this.model} включен`);
    };
  
    this.disable = function () {
      this.isEnabled = false;
      console.log(`${this.model} выключен`);
    };
  
    this.openApp = function (programName) {
      console.log(`Программа ${programName} запущена`);
    };
  
    this.calcPowerConsumption = function () {
      if (this.turnOn && this.isEnabled) {
        console.log(
          `${this.model} потребляет ${this.powerConsumption} вольт электроэнергии`
        );
      } else {
        console.log(`${this.model} потребляет 0 вольт электроэнергии`);
      }
    };
  }
  
  Laptop.prototype = new Tech();
  
  let xiaomiBook = new Laptop("Xiaomi Book Pro 14'", "Windows 11");
  xiaomiBook.turnOn();
  xiaomiBook.enable();
  xiaomiBook.openApp("Visual Studio Code");
  xiaomiBook.disable();
  xiaomiBook.turnOff();
  
  let kitchenLamp = new Lamp("Лампа на кухне");
  kitchenLamp.powerConsumption = 6;
  kitchenLamp.turnOn();
  kitchenLamp.enable();
  
  xiaomiBook.calcPowerConsumption();
  kitchenLamp.calcPowerConsumption();
  
