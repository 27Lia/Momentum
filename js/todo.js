//todo.js
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input"); // loginForm 안에서 input 요소를 찾아 loginInput 변수에 할당
const modalLink = document.getElementById('modal-link');
const closeButton = document.getElementById('close-button');
const modalcontainer = document.getElementById("modal-container")



// 모달 표시
modalLink.addEventListener('click', function(event) {
    event.preventDefault();    
    modalcontainer.classList.add('modal-background');
    modal.classList.remove('hidden'); // 모달 표시
    modalcontainer.classList.remove('hidden'); 
});

// 모달 닫는 함수
function closeModal() {
  modal.classList.add('hidden');
  modalcontainer.classList.add('hidden');
}
//close버튼 클릭시 모달 닫는 이벤트
closeButton.addEventListener('click',closeModal);

// 모달 밖의 영역을 클릭하면 모달 닫는 이벤트
window.addEventListener('click', function (event) {
  if (event.target === modalcontainer) {
    closeModal();
  }
});

//newtodo가 입력된 후 그 이후 값도 업데이트가 가능하도록 let사용
let toDos = []; 
// toDos array를 localStorage에 넣는것임. 
function saveTodos() {
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement; // 이벤트가 발생한 요소(button을 가리킴)의 부모 요소인 <li> 요소를 선택하는 코드 (즉 button의 부모인 li를 선택!) 
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //toDo는 parsedToDos 배열의 각각의 item들 즉, toDo.id는 각 아이템들의 id 
    saveTodos(); // 업데이트 된 toDos 배열을 로컬 스토리지에 저장
}

function handleToDoCheck(event) {
    const checkbox = event.target;
    const li = checkbox.parentElement;
  
    if (checkbox.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }

  }

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id; 

    const checkbox = document.createElement("input");
    checkbox.classList.add("todo-checkbox")
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", handleToDoCheck);
    li.appendChild(checkbox);

    const span = document.createElement("span");
    span.innerText = newToDo.text; 
    li.appendChild(span); // li자식으로 span을 넣어줌

    const trashButton = document.createElement("button");
    trashButton.innerText = "X";
    trashButton.classList.add("trash")
    trashButton.addEventListener("click", deleteToDo);
    li.appendChild(trashButton);

    toDoList.appendChild(li);
}

// ToDoSubmit 할 때 실행되는 함수, 
function handleToDoSubmit(event){ 
    event.preventDefault(); // 이벤트 기본동작(새로고침)방지하기위해 호출 
    const newToDo = toDoInput.value; // input값을 newTodo변수에 할당 2️⃣ 사용자가 입력한 값을 newToDo에 할당하고
    toDoInput.value = ""; // enter했을 때 input칸이 비워지게함. // 3️⃣ input을 비우고
    const newToDoObj = { // 새로운 객체 
        text: newToDo,
        id: Date.now() //현재 시간의 타임스탬프 값
      };
    toDos.push(newToDoObj); // 4️⃣ toDos array에 newToDoObj(사용자가 입력한 값과 고유id가 있는객체)가 push됨
    paintToDo(newToDoObj); // user 할 일 저장해놓은 값 paintToDo함수로 전달 5️⃣ 화면에 사용자가 입력한 값이 보여지게끔 paintToDo함수에 사용자가 입력한 값을 전달
    saveTodos(); // 6️⃣ 사용자가 입력한 값을 저장
}

 toDoForm.addEventListener('submit', handleToDoSubmit); // 1️⃣ 사용자가 form을 submit하면 

 const savedTodos = localStorage.getItem("todos")

 if(savedTodos !== null){
    const parsedToDos = JSON.parse(savedTodos); // localStorage에 있는 string을 obj 또는 array로 변환 여기서는 array
    toDos = parsedToDos; // toDos는 parsedToDos 배열과 동일한 배열을 참조함. 즉, toDos 배열에 새로운 요소를 추가하거나 삭제하면 parsedToDos 배열에도 동일한 변경사항이 반영됨
    parsedToDos.forEach(paintToDo); // parsedToDos 배열의 각 item에 대해 paintToDo 함수를 실행 paintToDo가 콜백 함수가 됨
;
 }


