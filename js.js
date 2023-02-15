async function WeatherData(){
    let search = input.value
    if (search) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`)
        response.json().then((data)=>{
        console.log(data);
        DisplayData(data)
    })
    }
    else{
        alert('Enter a City to Search')
    }  
}

function DisplayData(city) {
    htmlData = ``

    htmlData = `
    
    <div class="py-5 me-5">
        <div id="boxxxx" class=" rounded-5" style="background-color: rgba(255, 255, 255, 0.600); box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);">
            <div class="card-body p-4" >
  
              <h4 class="mb-1 sfw-normal">${city.name}  ,${city.sys['country']}</h4>
              <p class="mb-2"><strong>${city.weather[0].main}</strong></p>
              <p class="mb-2">Current temperature: <strong>${Math.floor(city.main['temp'] - 273.15)}°C</strong></p>
              <p>Feels like: ${Math.floor(city.main['feels_like']- 273.15)}<strong>°C</strong></p>
              <p>Max: <strong>${Math.floor(city.main['temp_max']- 273.15)}°C</strong>, Min: <strong>${Math.floor(city.main['temp_min']- 273.15)}°C</strong></p>
  
              <div class="d-flex flex-row align-items-center">
                <p class="mb-0 me-4">${city.weather[0].description}</p>
                <i class="fas fa-cloud fa-3x" style="color: #eee;"></i>
              </div>
  
            </div>
        </div>
    </div >
</div>
    `
    coltwo.innerHTML = htmlData
}