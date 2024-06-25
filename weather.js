// this is for the forcasting of weather.

// all this to get acces of all id for change
const locate = document.querySelector("#location");
const box1=document.querySelector(".box1")
const temperature = document.querySelector("#temperature");
const dateandtime = document.querySelector("#dateandtime");
const sunset = document.querySelector("#sunset");
const tempbox=document.querySelector(".itd");
const sunrs=document.querySelector(".ssr");
const sunsrise = document.querySelector("#sunrise");
const mintemp=document.querySelector("#mintem");
const maxtemp=document.querySelector("#maxtem");
const error=document.querySelector(".error")

const givenloc = document.querySelector("#searchbox")

// this is for the search box
const search = document.querySelector(".inputb");

// api 
const api = "1a4eb2076d93ba38a2ab5d582901bebc";

// Now the code when we click on the submit button 

search.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = givenloc.value;
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`;
    fetch(url)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((json) => {
            const image = document.querySelector("#image");
            // here we are getting description of the weather whether snoww ranin etc.
            

            // if input is wrong or status code=404
            if (json.cod==404){
                // if this then we have to remove all the images and the data present on the box and also to add a file which will show the error.
                box1.style.height=`400px`;
                error.classList.add("live");
                image.classList.remove("live");
                tempbox.classList.remove("live");
                sunrs.classList.remove("live");
                return;

          
               };

               // now if there is no errror then how things will change 
               box1.style.height=`95%`;
               error.classList.remove("live");
               image.classList.add("live");
               tempbox.classList.add("live");
               sunrs.classList.add("live");
            // now to change the image according to the description
            const cond=json.weather[0].description;
            const maine=json.weather[0].main;
            console.log(maine);
            console.log(cond);



            if(cond==="clear sky"){
                 image.src="landscape-150382_1920.png" ;

            }else if(cond==="few clouds"){
                 image.src="clouds-1117583.jpg" ;

            }else if(cond==="scattered clouds"){
                 image.src="clouds-1117583.jpg" ;

            }else if(cond==="broken clouds" || cond=="overcast clouds"){
                 image.src="cloud-160249_1920.png" ;

            }else if(cond==="shower rain" || cond=="moderate rain" || cond=="drizzle" || maine==="Rain"){
                 image.src="cloud-37011_1280.png" ;

            }else if(cond==="rain"){
                 image.src="rain-1265201_1920.png" ;

            }else if(cond==="thunderstorm"){
                 image.src="thunderstorm-1265161_1920.png" ;

            }else if(cond==="snow"){
                 image.src="trees-1861704_1920.jpg" 

            }else if(cond==="mist"){
                 image.src="vineyard-6885444_1280.jpg" 
""
            }else if(cond==="haze"){
                 image.src="haze.png" ;

            }else{
               image.src="anchor.png"
            }

            console.log(json);
            const tempe = json.main.temp;
            console.log(tempe);
            temperature.innerHTML=`${tempe}<span> °C<span>`;
            locate.textContent=json.weather[0].main;
            const sus=json.sys.sunset;
            console.log(sus);
            sunset.textContent=sus;
            const sur=json.sys.sunrise;
            sunrise.textContent=sur;
            console.log(json.weather[0].main);
            mintemp.innerHTML=`${json.main.temp_min}<span>°C<span>`;
            maxtemp.innerHTML=`${json.main.temp_max}<span>°C<span>`;




        })

});