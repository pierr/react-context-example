const appStart = ()=> {
  
  const {render} = ReactDOM;
  
  
 const Parent = React.createClass( {
    
    getChildContext() {
        return {lang: this.props.lang};
    },
    
    render() {
        return (
                <div><h1><Child /></h1></div>
            );
    }
});

Parent.childContextTypes = {
  lang: React.PropTypes.string
}

const Child = ()=>{
  return <div>Child <GrandChild /></div>
}

const GrandChild = (props, {lang})=>{
  return <div> GrandChild {lang}</div>;
}

GrandChild.contextTypes = {
  lang: React.PropTypes.string
};

  
  function App({lang}){
    return (
      <div>
         <h1>Simple tree with context</h1>
        <Parent lang={lang}/>
      </div>
    );
  }
  render(<App lang='fr'/>, 
  
  document.querySelector("div#root"));

}

document.addEventListener('DOMContentLoaded', appStart, false);