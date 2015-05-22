
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
// $('#cities').on('click', function(){
//     alert($(this).text());
// });





