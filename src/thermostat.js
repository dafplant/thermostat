function Thermostat() {
    this.temperature = 20;
    this.powerSavingMode = true;
}
Thermostat.prototype.up = function(){
    if (this.powerSavingMode === true && this.temperature === 25) {
        return;
    } else if (this.powerSavingMode === false && this.temperature === 32) {
        return;
    } else {
    this.temperature += 1;
    }
}

Thermostat.prototype.down = function(){
    if (this.temperature <= 10) {
        return;
    } else {
    this.temperature -= 1;
    }
}

Thermostat.prototype.turnPSMOff = function(){
    this.powerSavingMode = false;
}

Thermostat.prototype.turnPSMOn = function(){
    if (this.powerSavingMode === false) {
        this.powerSavingMode = true;
    } else {
        return;
    }
}

Thermostat.prototype.reset = function(){
    this.temperature = 20;
}

Thermostat.prototype.usage = function(){
    if (this.temperature <= 18) {
        return "Low Usage";
    } else if (this.temperature > 18 && this.temperature < 25) {
        return "Medium Usage";
    } else if (this.temperature > 25) {
        return "High Usage";
    }
}