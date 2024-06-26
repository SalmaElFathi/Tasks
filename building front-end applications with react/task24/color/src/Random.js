import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
class Random extends React.Component {
  constructor(props){
    super(props);
    this.state={ color: [1, 6, 9] };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.applyColor();
  }
  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }
  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }
  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }
  handleClick(){
    const color= this.chooseColor();
    this.setState({color:color});  
  }
  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
        {this.formatColor(this.state.color)}
        </h1>
        <Button light={this.isLight()} onClick={this.handleClick} />
      </div>
    );
  }
}
ReactDOM.render(
  <Random />, 
  document.getElementById('app')
);
export default Random ;