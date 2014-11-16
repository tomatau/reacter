var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
// var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;

var Dashboard   = require("./dashboard/dash.view.jsx"),
    TodoApp     = require("./todo/todoApp.view.jsx");

var Modal = require('react-modal');
var appElem = document.body;
Modal.setAppElement(appElem);
Modal.injectCSS(appElem);

require('./main.less');
require('./main2.less');

var App = React.createClass({
    render() {
        return (
            <div className="container">
                <header className="masthead">
                    <ul>
                        <li><Link to="app">Dashboard</Link></li>
                        <li><Link to="todos">TodoApp</Link></li>
                    </ul>
                </header>
                <this.props.activeRouteHandler/>
            </div>
        );
    }
});

React.render(
    <Routes location="hash">
        <Route name="app" path="/" handler={App}>
            <Route name="todos" handler={TodoApp}/>
            <DefaultRoute handler={Dashboard}/>
        </Route>
    </Routes>,
    document.body
);

module.exports = {'thing': "Main"};