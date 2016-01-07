
function appStart(){
  
  const {render} = ReactDOM;

  class MyAwesomeRootComponent extends React.Component {
  render(){
    return <div><span>Component Awesome</span>
    <Child1/>
    {this.props.children}</div>
  }
  
  
  getChildContext(){
    return {color: "purple"};
  };
  }
MyAwesomeRootComponent.childContextTypes = {
    color: React.PropTypes.string
  }
  function Child1(props, context){
    const {color} = context;
    return <div>{ `${color}`} </div>;
  };
  
  
  Child1.contextTypes = {
   color: React.PropTypes.string
  };

  function Child2(props, ctxt){
    return <div>Child2</div>;
  
  }
  
  function Child3(props, ctxt){
    return <div>Child3</div>;
  }


  function App(props){
    return (
    <MyAwesomeRootComponent>
      <span>App</span>
      <Child1 />
      <Child2 />
      <Child3 />
     </MyAwesomeRootComponent>);
  }

  render(<App/>, document.querySelector("div#root"));
}

document.addEventListener('DOMContentLoaded', appStart, false);