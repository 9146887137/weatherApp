let apikey="4b0000b6bd1ef042e804427451fa49e4";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?";
let city;
let usercity=document.getElementById("city-name");
let tempreture=document.getElementById("temp");
let ct=document.getElementById("city");
let humadity=document.getElementById("humadity-info");
let windInfo=document.getElementById("wind-info");
let weatherImage=document.getElementById("weatherimg");

async function getWeatherData() {
    if(usercity.value==""){
        alert("Please Enter city");
    }
    else{
        city=usercity.value;
    }
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
    let data=await response.json();
    ct.innerHTML=data.name;
    tempreture.innerHTML=Math.round(data.main.temp-273.15);
    humadity.innerHTML=data.main.humidity+"%";
    windInfo.innerHTML=data.wind.speed+"km/h";

    usercity.value=" ";
    console.log(data.coord.lat);

    if(data.weather[0].main=="Clear"){
        weatherImage.src="suny.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherImage.src="snow1.png";
    }
    else if(data.weather[0].main=="Cloud"){
        weatherImage.src="cloud.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherImage.src="suny.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherImage.src="mist2.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherImage.src="rain1.png";
    }
}