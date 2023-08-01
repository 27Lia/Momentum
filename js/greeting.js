const loginForm = document.querySelector("#login-form"); //loginForm으로부터 시작되는 새로고침되니까 login-form을 선택해줌
const loginInput = document.querySelector("#login-form input"); // loginForm 안에서 input 요소를 찾아 loginInput 변수에 할당
const link = document.querySelector("a"); // 첫 번째 a 태그를 선택하여 link 변수에 할당
const greeting = document.querySelector("#greeting");



// user가 submit할 때 실행되는 loginSubmit 함수
function loginSubmit(event){ // loginForm이 제출될 때 실행되는 함수 loginSubmit을 정의
    event.preventDefault(); // 이벤트 기본동작(새로고침)방지하기위해 호출
    loginForm.classList.add("hidden"); // 함수 실행 후 클래스가 추가됨.
    const username = loginInput.value;
    localStorage.setItem("username", username); // (저장될 아이템 이름,변수)(key,value)
    paintGreetings(username);
    
}

// username을 매개변수로 받아 greeting 요소의 텍스트를 수정하고, "hidden" 클래스를 제거하는 함수 결국, h1요소가 보여지게하는 함수!
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
}

// localStorage에서 "username" key의 value를 가져옴(사용자가 입력한 이름이 값이됨)
const savedUsername = localStorage.getItem("username");  

// local storage에 있는 유저정보 유무 확인하는 조건문
if (savedUsername === null) {
  loginForm.classList.remove("hidden") // 처음 화면에서 login-form,greeting 모두 hidden상태였기 때문에 유저값이 null인경우 login-form을 보이게함
  loginForm.addEventListener('submit', loginSubmit) // loginForm에 submit 이벤트 리스너를 추가, 폼이 제출될 때 loginSubmit 함수가 실행
}
else { 
    paintGreetings(savedUsername); 
}

