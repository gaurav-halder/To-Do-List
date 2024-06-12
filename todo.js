
let todoList = [
  {
    item: 'Sample Task', 
    dueDate: '2024-06-12'
  },
  // {
  //   item: '', 
  //   dueDate: ''
  // },
];

displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  // console.log(todoItem);
  todoList.push({item: todoItem, dueDate: todoDate});

  inputElement.value = '';
  dateElement.value = '';

  displayItems();
}

function displayItems(){
  let conatinerElement = document.querySelector('.todo-conatiner');

  let newHtml = '';

  conatinerElement.innerText = '';
  for(let i=0; i<todoList.length; i++){
    // let todoItem = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    let {item, dueDate} = todoList[i];
    newHtml = newHtml + `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button id="button-todo-delete" onclick="todoList.splice(${i},1); displayItems();">Delete</button>
    `;
  }
  conatinerElement.innerHTML = newHtml;
}