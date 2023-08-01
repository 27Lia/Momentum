
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
