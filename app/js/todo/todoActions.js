var flux = require('../flux.js');
var _ = require('underscore');
var Promise = require('es6-promise').Promise;

var TodoConstants = require('./todoConstants.js');

var mockDeleteAJAX = function(id){
    return new Promise(function(resolve, rej){
        setTimeout(function(){
            resolve(id);
        }, 200);
    });
}

var TodoActions = flux.createActions({
    addTodo: function(text) {
        return {
            actionType: TodoConstants.TODO_CREATE,
            text: text
        }
    },
    removeTodo: function(id){
        return mockDeleteAJAX(id)
            .then(function(id){
                return {
                    actionType: TodoConstants.TODO_DESTROY,
                    id: id
                }
            });
    }
});

module.exports = TodoActions;