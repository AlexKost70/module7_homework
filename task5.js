class Tech {
    cunstructor(isTurnedOn) {
        this.isTurnedOn = isTurnedOn;
    }

    turnOn() {
        this.isTurnedOn = true;
        console.log("Прибор включен в розетку");
    }

    turnOff() {
        this.isTurnedOn = false;
        console.log("Прибор выключен из розетки");
    }
}

class Lamp extends Tech {
    constructor(isTurnedOn, name) {
        super(isTurnedOn);
        this.name = name;
        this.powerConsumption = 5;
        this.color = "Белый";
        this.lightsNumber = 1;
        this.isEnabled = false;
    }

    enable () {
        this.isEnabled = true;
        console.log(`${this.name} включена`);
      };
    
      disable () {
        this.isEnabled = false;
        console.log(`${this.name} выключена`);
      };
    
      calcPowerConsumption() {
        if (this.turnOn && this.isEnabled) {
          console.log(
            `${this.name} потребляет ${this.powerConsumption} вольт электроэнергии`
          );
        } else {
          console.log(`${this.name} потребляет 0 вольт электроэнергии`);
        }
      };
}

class Laptop extends Tech {
    constructor (isTurnedOn, model, opSystem) {
        super(isTurnedOn);
        this.powerConsumption = 20;
        this.model = model;
        this.opSystem = opSystem;
        this.isEnabled = false;
    }

    enable () {
        this.isEnabled = true;
        console.log(`${this.model} включен`);
      };
    
      disable () {
        this.isEnabled = false;
        console.log(`${this.model} выключен`);
      };
    
      openApp (programName) {
        console.log(`Программа ${programName} запущена`);
      };
    
      calcPowerConsumption () {
        if (this.turnOn && this.isEnabled) {
          console.log(
            `${this.model} потребляет ${this.powerConsumption} вольт электроэнергии`
          );
        } else {
          console.log(`${this.model} потребляет 0 вольт электроэнергии`);
        }
      };
}

let xiaomiBook = new Laptop(false, "Xiaomi Book Pro 14'", "Windows 11");
xiaomiBook.turnOn();
xiaomiBook.enable();
xiaomiBook.openApp("Visual Studio Code");
xiaomiBook.disable();
xiaomiBook.turnOff();

let kitchenLamp = new Lamp(false, "Лампа на кухне");
kitchenLamp.powerConsumption = 6;
kitchenLamp.turnOn();
kitchenLamp.enable();

xiaomiBook.calcPowerConsumption();
kitchenLamp.calcPowerConsumption();