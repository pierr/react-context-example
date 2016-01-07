const appStart = ()=> {
  
  const {render} = ReactDOM;
  
  
  const Parent = React.createClass( {
    render(){
        const {lang} = this.props;
        return (
                <div>Parent <Child lang={lang}/></div>
       );
    }
  });


  function Child({lang}){
    return (<div>Child <GrandChild lang={lang}/></div>);
  }
  
   
  function GrandChild({lang}){
    return (<div>Grandchild {lang}</div>);
  }

  

  
  function App({lang}){
    return (
      <div>
         <h1>Simple tree</h1>
        <Parent lang={lang}/>
      </div>
    );
  }
  render(<App lang='fr'/>, document.querySelector("div#root"));
}

document.addEventListener('DOMContentLoaded', appStart, false);