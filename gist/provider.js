
class Provider extends React.Component {
  getChildContext(){
    return this.props.store;
  }
  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
};