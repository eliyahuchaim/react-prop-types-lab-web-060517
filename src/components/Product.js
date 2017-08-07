// Code Product Component Here

import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li>{this.props.name} </li>
          <li>{this.props.producer} </li>
          <li>{this.props.hasWatermark} </li>
          <li>{this.props.color} </li>
          <li>{this.props.weight} </li>
        </ul>
      </div>
    )
  }
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, weight, Product){
    debugger
    if (!props.weight){
      return new Error ("Must put in weight")}
      if (typeof(props.weight) !== "number") {
        return new Error ("Must be a number")}
      if ((props.weight < 80) || (props.weight > 300)) {
        return new Error ("Weight must be between 80 and 300 pounds")}
  }
};

Product.defaultProps = {
  hasWatermark: false
};



export default Product
