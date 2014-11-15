var flux = require('../flux.js');
var _ = require('underscore');
var uuid = require('simple-uuid');

var TodoConstants = require('./todoConstants.js');

var _getMockTodos = function(){
    return [
{ text: "Some text", complete: false, id: 0 },
{ text: "Another todo", complete: false, id: 1 },
{ text: "Blah blah blah blah", complete: false, id: 2 },
{ text: "Checkedy check yo What 'suppp", complete: false, id: 3 },
{ text: "Blub blug blud bbbluuudb blub", complete: false, id: 4 }
    ];
}

var _todos = _getMockTodos();

function addTodo(text){
    _todos.push({
        id: uuid(),
        complete: false,
        text: text
    });
}

function removeTodo(id){
    _todos = _.reject(_todos, function(t){
        return (t.id === id);
    });
}

var TodoStore = flux.createStore(
{
    getAll: function(){
       return _todos;
    }
},
function(payload){
    switch(payload.actionType){
    case TodoConstants.ADD_TODO:
        addTodo(payload.text);
    break;
    default:
        return true;
    }
    TodoStore.emitChange();
    return true;
});

module.exports = TodoStore;