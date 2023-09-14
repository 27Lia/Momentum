

//sunny
function createSunny() {
  const sunnyEl = document.querySelector("#weatherimg");
  const sunny = document.createElement("img");
  const sunny2 = document.createElement("img");
  sunny.classList.add("layer1");
  sunny2.classList.add("layer2");
  sunny.src = "/img/sunny.png";
  sunny2.src = "/img/sunny2.png";
  sunnyEl.appendChild(sunny);
  sunnyEl.appendChild(sunny2);
}


//rain
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

  // 빗방울을 랜덤한 위치에 배치 (랜덤높이,너비)
  rain2.style.top = `${Math.random() * window.innerWidth}px`;
  rain2.style.left = `${Math.random() * window.innerWidth}px`;

  // 빗방울에 애니메이션 효과 추가
  rain2.style.animationDuration = Math.random() * 3 + 2 + "s";
}

//clouds
function createClouds() {
  const CloudsEl = document.getElementById('weatherimg');
  const Clouds = document.createElement("img");
  const Clouds2 = document.createElement("img");
  Clouds.src = "/img/clouds.png";
  Clouds2.src = "/img/cloudss.png";
  Clouds.classList.add("cloudsbackground");
  Clouds2.classList.add("clouds");
  CloudsEl.appendChild(Clouds);
  CloudsEl.appendChild(Clouds2);

  // 구름을 랜덤한 위치에 배치 (랜덤높이,너비)
  Clouds2.style.top = `${Math.random() * window.innerHeight}px`;
  Clouds2.style.left = `${Math.random() * window.innerWidth}px`;
}

//snow
function createSnow() {
  const snowEl = document.getElementById('weatherimg');
  const snow = document.createElement("img");
  snow.src = "/img/snow.png";
  snow.classList.add("snowbackground");
  snowEl.appendChild(snow);

  //snow footprint 구현
  const snow_init = () => {
    document.addEventListener("click", (e) => {
      const img = document.createElement("img")
      img.src = "/img/snoww.png";
      img.style.fontSize = `${Math.random() * 8 + 2}rem`
      img.style.top = `calc(${e.y}px - 0.5em)`
      img.style.left = `calc(${e.x}px - 0.5em)`
      const footprints = document.querySelector('.footprints');
      footprints.appendChild(img);
    })
  }
  snow_init();
}

// 아무것도 아닌 날씨 
function etc() {
  const etcEl = document.querySelector('body');
  etcEl.style.backgroundColor = '#6886C5';
}

// 날씨 데이터를 처리하는 함수
function handleWeatherData(weather) {
  if (weather === "Rain") {   //Rain 경우 
    for (let i = 0; i < 20; i++) {
      createRaindrop();
    }
  }
  else if (weather === "Clouds") { //Clouds 경우
    for (let i = 0; i < 10; i++) {
      createClouds()
    }
  }
  else if (weather === "Sunny") { //Sunny 경우
    createSunny()

  }
  else if (weather === "Snow") { // Snow경우
    createSnow()
  }
  else {
    etc()
  }
}

export { handleWeatherData };
