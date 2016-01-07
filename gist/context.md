## Context

A component can be written in sevral way:

- ES5 way

```jsx
const MyOldWayComponent = React.createClass({
  displayName: 'MyOldWayComponent',
  render(){
    return <div>MyOldWayComponent</div>
  }
});
```

- ES2015 - class way
```jsx
class MyClassComponent extends React.Component {
  render(){
    return <div>My ClassComponent</div>
  }
}
```


- Function way
```jsx
function MyFunctionComponent(props) {
    return <div>MyFunctionCOmponent</div>
}
```

## The context

- In a componeny you can set `props`, `state` and also `context`
- The main goal of the context is to pass information to a React sub tree

Context

- Feature in React since almost a year now
- Documented since september
```jsx
class Parent extends React.Component {

    render(){
        const {lang} = this.props;
        return (
                <div><Child lang={lang}></div>
            );
    }
}

function Child({lang}){
    return (<div><GrandChild lang={lang}/></div>);
}

function GrandChild({lang}){
    return (<div>{lang}</div>);
}


ReactDOM.render(<Parent lang='fr'/>, document.querySelector('div#app'))
```

Problem: pass `props` through a React Component tree is sometimes a pain and inBetween components needs to transfer props without needing them.
=> Explicit is readable and understandable
=> Verbeux and creates coupling


This problem is even more a pain when you need to abstract things in your components.
- You need reusable components
- You need behaviours
- When a props is added you explicitly need to transfer it => Hard to maintain, it creates coupling


Example:
- Language
- Theme
- Master data such as city, countries, ... When you need to automate things it's often a result of props going through the app
- Static metadata which are global to the app

```jsx
class Parent extends React.Component {
    getChildContext(){
        return {this.props.lang};
    }
    render(){
        return (
                <div><h1>Parent</h1><Child /></div>
            );
    }
}
Parent.childContextTypes = {
    lang: React.PropTypes.string
};


function Child({lang}){
    return (<div><h2>Child</h2><GrandChild /></div>);
}

function GrandChild(props, {lang}){
    return (<div><h3>Child</h3>{lang}</div>);
}
GrandChild.contextType = {
    lang: PropTypes.string
}
ReactDOM.render(<Parent lang='fr'/>, document.querySelector('div#app'))
```

- The parent does not have to pass direct props to the child
- The context is protected with  `childContextTypes` and `contextType`
- code is quite clear
- There is a not so explicit coupling between
- The childContextTypes is a pain to write on each time
- It is not readable

Can we find a better way to use the context ?
Can we be inspired  by something great?


React redux
- State is process with redux using `reducer`
- The binding between react and redux are done using context
- In `react-redux` there is a simple pattern which is `Connect` and `Provider` object

In the provider object you pass the object you want to add in the context in redux example it is the `state`
In our example it will be the lang

```jsx
class Parent extends React.Component {
    render(){
        return (
                <div><h1>Parent</h1><Child /></div>
            );
    }
}

function Child({lang}){
    return (<div><h2>Child</h2><GrandChild /></div>);
}

function GrandChild({lang}){
    return (<div><h3>Child</h3>{lang}</div>);
}
connectLang(GrandChild);

ReactDOM.render(<LangProvider lang='fr'><Parent/></LangProvider>, document.querySelector('div#app'))
```

- Our components are now pure and us
