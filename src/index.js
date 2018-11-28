import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//First Method
var helloWorld = React.createElement("h1", {className: "redText"}, 'Hello World!');

//Second Method
class HelloWorld extends React.Component {
    render () {
        return (
                <h1 className="greenText">Hello World!</h1>
            )
    }
}

//Third Method (Pure Component)
class HelloWorldPure extends React.PureComponent {  
    render() {
        return <h1 className="redText">Hello World!</h1>
    }
}

//Fourth Method (Functional Component)
const HelloWorldFunctional = () => <h1 className="greenText">Hello World!</h1>;

const container = React.createElement("div", {}, helloWorld, <HelloWorld />, <HelloWorldPure />, <HelloWorldFunctional /> );  

ReactDOM.render(container, document.getElementById('root'))