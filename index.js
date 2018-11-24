var element = React.createElement('h1', {  }, 'Hello, world!');
const root = React.createElement(
    "div", {}, element);
 ReactDOM.render(root, document.getElementById("root"));
//ReactDOM.render(element, document.getElementById('root'));