const API_KEY="b26df4deb710f3883cd6f59ffc7a79e3"

function onGeoOk(position){
    const lat=position.coords.latitude
    const lng=position.coords.longitude
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    console.log(url)
    fetch(url)
        .then(Response => Response.json())
        .then(data=>{
            const weathercon=document.querySelector("#weather span:first-child")
            const city=document.querySelector("#weather span:last-child")
            city.innerText = data.name
            weathercon.innerText=`${data.weather[0].main} / ${data.main.temp}`
    })
}
function onGeoErr(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr)