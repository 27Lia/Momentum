

//sunny
function createSunny() {
  const sunnyEl = document.querySelector("#weatherimg"); // corrected: querySelectorId to querySelector
  const sunny = document.createElement("img");
  const sunny2 = document.createElement("img");
  sunny.classList.add("layer1");
  sunny2.classList.add("layer2");
  sunny.src = "/img/sunny.png"; // corrected: set the src attribute instead of background-image
  sunny2.src = "/img/sunny2.png"; // corrected: set the src attribute instead of background-image
  sunnyEl.appendChild(sunny);
  sunnyEl.appendChild(sunny2);
}


//rain

// 빗방울 생성 함수
function createRaindrop() {
  const rainEl = document.getElementById('weatherimg');
  const rain = document.createElement("img");
  const rain2 = document.createElement("img");
  rain.classList.add("layer3");
  rain2.classList.add("layer4");
  rain.src = "/img/rain.png";
  rain2.src = "/img/rains.png";
  rainEl.appendChild(rain);
  rainEl.appendChild(rain2);

    // 빗방울을 랜덤한 위치에 배치합니다.
    rain2.style.left = Math.random() * window.innerWidth + "px";
  
    // 빗방울에 애니메이션 효과를 추가합니다.
    rain2.style.animationDuration = Math.random() * 3 + 2 + "s";
}

//clouds
  function createClouds() {
    const CloudsEl = document.getElementById('weatherimg');
    CloudsEl.classList.add("cloudsbackground");
  }

//snow
  function createSnow() {
    const SnowEl = document.getElementById('weatherimg');
    SnowEl.classList.add("snowbackground");
    // 스탬프              
    // const snow_init = () => {
    //   document.addEventListener("click", (e) => {
    //       const div = document.createElement("div")
    //       div.innerText = "⛈";
    //       div.style.fontSize = `${Math.random() * 8 + 2}rem`
    //       div.style.top = `calc(${e.y}px - 0.5em)`
    //       div.style.left = `calc(${e.x}px - 0.5em)`
    //       document.querySelector(".snow").appendChild(div)          
    //       document.querySelector(".snow .footprints").appendChild(div)
    //   })
    // }
    
    snow_init();
  }


// 날씨 데이터를 처리하는 함수
function handleWeatherData(weather) {
    if ( weather === "Rain") {   //Rain 경우 
      for (let i = 0; i < 20; i++) {
        createRaindrop();
      }
    } 
        else if (weather === "Clouds") { //Clouds 경우
          createClouds()
          
      } 
        else if (weather === "Sunny") { //Sunny 경우
        // createSunny()
        // createRaindrop()
        // createClouds()
        createSnow()

      }
        else { // Snow경우
          // createSnow()
        //  createSunny()
        createRaindrop()
        // createClouds()

      }}


      export { handleWeatherData };




  // function createSunny() {
  //   const sunnyEl = document.getElementById('sunny');
  //   sunnyEl.classList.add("sunnybackground");
  // }