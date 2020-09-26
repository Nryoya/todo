const div = document.querySelector(".form");
const input = document.querySelector(".toDoInput");
const btn = document.querySelector(".btn");

// ulの作成
const ul = document.createElement("ul");
div.appendChild(ul);

// 変数の初期化
const todos = [];

// listの作成
const list = (value) => {
  const li = document.createElement("li");
  const elementButton = document.createElement("button");
  li.textContent = value;
  ul.appendChild(li);
  elementButton.textContent = "消す";
  ul.appendChild(elementButton);
  todos.push(value);
  console.log(todos);
  input.value = "";
  input.focus();

  // 消去ボタンを押した時の関数
  elementButton.addEventListener("click",() => {
      todos.forEach((todo) => {
        if(todo === li.textContent){
          ul.removeChild(li);
          ul.removeChild(elementButton);
          let idx = todos.indexOf(todo);
          todos.splice(idx, 1);
          console.log(todos);
        }
      })
  });
}

// ボタンを押した時の関数
const submit = () => {
  list(input.value);
}

// イベント
btn.addEventListener("click", submit);
