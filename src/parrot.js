class Parrot {
    constructor() {
    
    }

    getSpeed() {
        console.log("Should be unreachable");
    }

    getLoadFactor(){
        return 9;
    }

    getBaseSpeed(){
        return 12;
    }

}

class African extends Parrot{
    constructor(numberOfCoconuts) {
        super();
        this.numberOfCoconuts = numberOfCoconuts;
    }
    getSpeed() {
        return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
    }

}

class Norwegian_Blue extends Parrot{
    constructor(voltage, isNailed) {
        super();
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed() {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }
    getBaseSpeedWithVoltage(voltage) {
        return Math.min(24, voltage * this.getBaseSpeed());
    }
}

class European extends Parrot{
    constructor() {
        super();
    }

    getSpeed() {
        return this.getBaseSpeed();
    }
}

module.exports={Parrot, African, Norwegian_Blue, European}