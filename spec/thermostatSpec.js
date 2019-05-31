'use strict;'

describe ("Thermostat", function() {
	var thermostat;

	beforeEach (function(){
		thermostat = new Thermostat();
	});

	it('defaults with 20 degrees', function() {
		expect(thermostat.temperature).toEqual(20);
    });
    it('increases temperature by 1 degree', function(){
        thermostat.up()
        expect(thermostat.temperature).toEqual(21);
    });
    it('decreases temperature by 1 degree', function(){
        thermostat.down()
        expect(thermostat.temperature).toEqual(19);
    });
    it('has a minimum temperture of 10 degrees', function(){
        for (var i = 20; i > 9; i--) {
        thermostat.down()
        }
        expect(thermostat.temperature).toEqual(10);
    });
    it('has power saving mode on by default', function(){
        expect(thermostat.powerSavingMode).toEqual(true);
    });
    it('sets max temp at 25 degree if power saving mode is on', function(){
        for (var i = 20; i < 26; i++) {
        thermostat.up()
        }
        expect(thermostat.temperature).toEqual(25);
    });
    it('sets max temp at 32 degrees if power saving mode is off', function(){
        thermostat.turnPSMOff()
        for (var i = 20; i < 33; i++) {
            thermostat.up()
        }
        expect(thermostat.temperature).toEqual(32);
    });
    it('resets the temperature to 20 degrees', function(){
        thermostat.reset()
        expect(thermostat.temperature).toEqual(20);
    });
    it('can tell us low usage', function(){
        for (var i = 20; i >= 18; i--) {
            thermostat.down()
        }
        expect(thermostat.usage()).toEqual("Low Usage");
    });
    it('can tell us medium usage', function(){
        expect(thermostat.usage()).toEqual("Medium Usage");
    });
    it('can tell us high usage', function(){
        thermostat.turnPSMOff();
        for (var i = 20; i < 27; i++) {
            thermostat.up()
        }
        expect(thermostat.usage()).toEqual("High Usage");
    });
});