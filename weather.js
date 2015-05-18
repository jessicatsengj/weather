var datesContainer = $('.date');
  $('#dateToday').css('font-weight', 'bolder').text('4 May 2015:: Mostly Cloudy');
  $('#date1').css('font-weight', 'bolder').text('date1');
  $('#date2').css('font-weight', 'bolder').text('date2');
  $('#date3').css('font-weight', 'bolder').text('date3');

var temperaturesContainer = $('temperatureOfDay');
  $('#tp1').text('temperature1');
  $('#tp2').text('temperature2');
  $('#tp3').text('temperature3');

var skycons = new Skycons();

  skycons.add("iconToday", Skycons.PARTLY_CLOUDY_DAY);
  skycons.add("icon1", Skycons.CLEAR_DAY);
  skycons.add("icon2", Skycons.CLOUDY);
  skycons.add("icon3", Skycons.RAIN);

  // start animation!
  skycons.play();
  
  // want to change the icon? no problem:
  skycons.set("iconToday", Skycons.PARTLY_CLOUDY_NIGHT);
  
/*
Get value from Bootstrap dropdown menu
*/
$('#cities').on('click', function(){
    alert($(this).text());
});





