import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      spotted: false, 
      litterBool: false,
      point: props.point}
  }


  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemClicked = () => {

    // set spotted to true and litterBool to true or false
    if (this.props.type === "litter"){
      this.props.updatePoints()
      this.setState({spotted: true, litterBool: true})
    }else{
      this.setState({spotted: true, litterBool: false})
    }
    
  }
    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    // css - x's and check's
    let theClassName
    if (this.state.litterBool){
      theClassName = "spotted-litter"
    }else{
      theClassName = "spotted-nature"
    }

    return (
      <div className="game-item" style={itemStyle}>
        {this.state.spotted ? <span className={theClassName}></span> : <span></span>}
        <img src={icon} alt="Item" className="icon-item" onClick={this.onItemClicked}></img>
      </div>
    );
  }
}

export default GameItem;
