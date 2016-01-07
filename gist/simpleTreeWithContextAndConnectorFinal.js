const appStart = ()=> {
  
  const {render} = ReactDOM;
  
   
   const LangProvider = React.createClass( {
    
    getChildContext() {
        return {lang: this.props.lang};
    },
    
    render() {
        return (
                <div>
                  <h1>{this.props.children}</h1>                   </div>
            );
    }
});

LangProvider.childContextTypes = {
  lang: React.PropTypes.string
}



const GrandChildToConnect = (props)=>{
return <div>Grand child to connect {props.lang}</div>
}

  
function connectLang(ComponentToConnect){
  const ConnectedComponent = React.createClass( {
    
    render() {
        return (
                <div>
                  <h1>ConnectedComponent</h1> 
                 <ComponentToConnect lang={this.context.lang}/>
                 </div>
            );
    }
 });
 ConnectedComponent.contextTypes = {
  lang: React.PropTypes.string
}
 return  ConnectedComponent;
}

const ConnectedGrandChildToConnect =  connectLang(GrandChildToConnect);
  
    function App(props){
    return (
      
      <div>
        <h1>Provider</h1>
        <LangProvider lang='fr'>
          Hello 
          <ConnectedGrandChildToConnect/>
        </LangProvider>
       </div>
    );
  }
  render(<App/>, document.querySelector("div#root"));
}

document.addEventListener('DOMContentLoaded', appStart, false);