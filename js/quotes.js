
fetch('https://api.qwer.pw/request/helpful_text?apikey=guest')
  .then(response => response.json())
  .then(data => {
    const respondObj = data[1];
    if (respondObj && respondObj.respond) {
      const respond = respondObj.respond;
      if (respond.length <=100) {
        const quotes = document.getElementById('quotes');
        quotes.textContent = respond;
      }
      else if (respond.length >= 101){
        const quoteserror = document.getElementById('quotes');
        quoteserror.textContent = "한 번 실패와 영원한 실패를 혼동하지 마라. - F.스콧 핏제랄드"
      }
    } else {
      console.error('명언 데이터를 가져오는 데 실패했습니다.');
    }
  })
  .catch(error => {
    console.error('API 요청 실패:', error);
  });
// fetch('https://api.qwer.pw/request/helpful_text?apikey=guest') // API에 GET 요청을 보냄
//   .then(response => response.json()) // 응답 데이터를 JSON으로 파싱
//   .then(data => {
//     const respondObj = data[1]; // 응답 데이터에서 index 1의 객체를 가져옴
//     if (respondObj && respondObj.respond) { // 가져온 객체와 해당 객체의 respond 속성이 존재하는지 확인
//       const respond = respondObj.respond; // respond 속성 값을 가져옴
//       const quotes = document.getElementById('quotes');
//       quotes.textContent = respond; // HTML 요소의 텍스트 내용을 가져온 respond 값으로 설정
//     } else {
//       console.error('명언 데이터를 가져오는 데 실패했습니다.'); // 데이터가 없거나 형식이 올바르지 않을 때 에러 메시지를 출력
//     }
//   })
//   .catch(error => {
//     console.error('API 요청 실패:', error); // API 요청이 실패했을 때 에러 메시지를 출력
//   });