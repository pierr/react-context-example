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

const GrandChild = (props, {lang})=>{
  return <div> GrandChild {lang}</div>;
}

GrandChild.contextTypes = {
  lang: React.PropTypes.string
};
  
    function App(props){
    return (
      
      <div>
        <h1>Provider</h1>
        <LangProvider lang='fr'>Hello <GrandChild /></LangProvider>
       </div>
    );
  }
  render(<App/>, document.querySelector("div#root"));
}

document.addEventListener('DOMContentLoaded', appStart, false);