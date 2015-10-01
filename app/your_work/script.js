var myApp = angular.module('todoList', []);

myApp.controller('todoListController', todoControllerFunction);

function todoControllerFunction() {
	var todoCtrl = this;
  todoCtrl.todoList = [];
  // todoCtrl.letters = ['A','B','C','D'];

  todoCtrl.message = "Thanks for coming out!";
  todoCtrl.todoItem = "Todo List!!!!!!";

  // todoCtrl.count = 1;

  todoCtrl.addTodo = function() {
    //using an object to push into array
    var todoObject = {
      text: todoCtrl.todoItem,
      checked: false
    };

    todoCtrl.todoList.push(todoObject);
    todoCtrl.todoItem = ""; //housekeeping

    // todoCtrl.todoList.push(todoCtrl.todoItem);

    // angular.forEach(todoCtrl.todoList, function(value, key) {
    //   this.push(key + ': ' + value);
    // }, log);
  };

  todoCtrl.todoDone = function(todoIndex) {
    todoCtrl.todoList.splice(todoIndex, 1); //splice removes the one item
  };

}
