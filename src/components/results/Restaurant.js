import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyImage from 'react-lazy-progressive-image';
import styled from 'styled-components';
import placeholderImage from '../../assets/svgs/placeholder.svg';

const Image = styled.img`
  transition: all 0.2s ease;
`;

class Restaurant extends Component {
  
  render() {
    const restaurant = this.props.data;
    let price = '';
    
    for (let i = 0; i < restaurant.price; i++) {
       price += '£';
    }
   
    return (
      <div className="restaurantCard">
        <a href={ restaurant.url } >
          <LazyImage
            src={restaurant.image}
            placeholder={placeholderImage}
          >
            {(src) => <Image alt={ restaurant.name } src={src} />}
          </LazyImage>
          <h2 className="title">{ restaurant.name }</h2> 
          <ol className="tags">
            {restaurant.tags.map((tag,i) => 
              <li key={i} >
                <span>{tag}</span> 
              </li>
            )}
            <li>
              <span>{price}</span>
            </li>
          </ol>
        </a>
    </div>
    );
  }
}

Restaurant.propTypes = {
  data: PropTypes.object
};

export default Restaurant;