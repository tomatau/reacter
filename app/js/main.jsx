var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
// var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;

var Dashboard = require("./dashboard/dash.view.jsx");

var App = React.createClass({
    render() {
        console.log('render app')
        return (
            <div className="container">
                <header>
                    <ul>
                        <li><Link to="app">Dashboard</Link></li>
                    </ul>
                </header>
                <this.props.activeRouteHandler/>
            </div>
        );
    }
});

React.render(
    <Routes location="history">
        <Route name="app" path="/" handler={App}>
            <DefaultRoute handler={Dashboard}/>
        </Route>
    </Routes>,
    document.body
);

module.exports = {'thing': "Main"};