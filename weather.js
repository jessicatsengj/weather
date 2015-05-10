var skycons = new Skycons();
  // on Android, a nasty hack is needed: {"resizeClear": true}

  // you can add a canvas by it's ID...
  skycons.add("today", Skycons.PARTLY_CLOUDY_DAY);
  skycons.add("day1", Skycons.CLEAR_DAY);
  skycons.add("day2", Skycons.CLOUDY);
  skycons.add("day3", Skycons.RAIN);

  // start animation!
  skycons.play();
  
  // want to change the icon? no problem:
  skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
  
/*
Get value from Bootstrap dropdown menu
*/
$('#dropdown li').on('click', function(){
    alert($(this).text());
});

var apiServer = 'https://query.yahooapis.com/v1/public/yql';
var cities = [ 
  '臺北市',
  '新北市',
  '台中市',
  '臺南市',
  '高雄市',
  '基隆市',
  '桃園市',
  '新竹市',
  '新竹縣',
  '苗栗縣',
  '彰化縣',
  '南投縣',
  '雲林縣',
  '嘉義市',
  '嘉義縣',
  '屏東縣',
  '宜蘭縣',
  '花蓮縣',
  '台東縣',
  '澎湖縣',
  '金門縣',
  '連江縣',
];

var citiesContainer = $('#cities');

// render 'select' tag
for (var i in cities) {
  var city = cities[i];
  citiesContainer.append('<option value="' + i + '">' + city + '</option>');
}

// setup onchange listener
citiesContainer.change(function(){
  var index = $(this).val();
  var cityName = cities[index];
  
  var queryString = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + cityName + '")';
  $.ajax({
    url: apiServer,
    data: {
      format: 'json',
      q: queryString,
    },
    success: function(data) {
      console.log(data.query.results);
    }
  });
});