var city = "New York"
$.getJSON("https://openweathermap.org/data/2.5/weather?q="+city+"&appid=4f15d36ca3825e612d82aa264ca86d9b", function(data){

  console.log(data);
  var icon= "https://openweathermap.org/img/w/"+data.weather[0].icon +".png";
  console.log(icon);
  var temp = data.weather.temp;
  var weather = data.weather[0].main;

  $('.icon').attr('src', icon);
  $('.temp').append(weather);
  $('.temp').append(temp);
}
);