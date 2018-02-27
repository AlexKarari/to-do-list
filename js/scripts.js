
(function (){
  var input = document.getElementById("input");
  var btn = document.getElementById("btn");
  var lists = {
    todo:document.getElementById("todo"),
    done:document.getElementById("done")
  };
  var makeTask = function(str, onCheck){
    var el = document.createElement('li');
    var checkbox = document.createElement('input');
    var label = document.createElement('span');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', onCheck);
    label.textContent = str;

    el.appendChild(checkbox);
    el.appendChild(label);

    return el;
  };
  var addTask = function(task){
    lists.todo.appendChild(task);
  };
  var onCheck = function(event){
    var task = event.target.parentElement;
    var list = task.parentElement.id;

    lists[list === 'done' ? 'todo' : 'done'].appendChild(task);
    this.checked = false;
  };
  var onInput = function(){
    var str = document.querySelector("#value").value.trim();
    if (str.length>0){
      addTask(makeTask(str, onCheck));
    }


  };
  btn.addEventListener('click', onInput);

}());
