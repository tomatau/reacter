var flux = require('../flux.js');
var _ = require('underscore');

var TodoConstants = require('./todoConstants.js');

var TodoActions = flux.createActions({
    addTodo: function(text) {
        return {
            actionType: TodoConstants.TODO_CREATE,
            text: text
        }
    },
    removeTodo: function(id){
        return {
            actionType: TodoConstants.TODO_DESTROY,
            id: id
        }
    }
});

module.exports = TodoActions;