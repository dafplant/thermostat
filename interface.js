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

      $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
        $('#current-temperature').text(data.main.temp);
      })

      $('#current-city').change(function() {
        var city = $('#current-city').val();
        $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
          $('#current-temperature').text(data.main.temp)
        })
      })
  });
