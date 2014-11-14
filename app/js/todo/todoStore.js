var flux = require('../flux.js');
var _ = require('underscore');
var uuid = require('simple-uuid');

var TodoConstants = require('./todoConstants.js');

var _todos = [];

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