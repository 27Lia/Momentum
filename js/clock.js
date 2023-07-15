const clock = document.querySelector("h2#clock");

 function getClock() {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        clock.innerText = `${hours}:${minutes}`;
      }

 getClock() // webpage가 로딩되자마자 바로 시간이 보여질수있게함.
 setInterval(getClock,1000);    

 // .padStart(몇자리로만들지, 어떤값을추가할지)메서드활용

fetch('')