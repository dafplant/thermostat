$(document).ready(function() {
    var thermostat = new Thermostat();
    $('#temperature').text(thermostat.temperature);

    $('#temperature-up').click(function(){
        thermostat.up();
        updateTemperature();
    });

    $('#temperature-down').click(function(){
        thermostat.down();
        updateTemperature();
    });

    $('#reset').click(function(){
        thermostat.reset();
        updateTemperature();
    });

    $('#psm-off').click(function(){
        thermostat.turnPSMOff();
        updateTemperature();
    });

    $('#psm-on').click(function(){
        thermostat.turnPSMOn();
        updateTemperature();
    });

    // function updateTemperature() {
    //     $('#temperature').text(thermostat.temperature);
    //     $('#temperature').attr('class', thermostat.usage());
    // }

    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
        if(thermostat.usage() === 'Low Usage') {
          $('#temperature').css('color', 'green')
        } else if(thermostat.usage() === 'Medium Usage') {
          $('#temperature').css('color', 'black')
        } else {
          $('#temperature').css('color', 'red')
        }
      }
  });
