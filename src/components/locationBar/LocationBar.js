import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  font-family: 'adelle-sans-regular';
  background: ${props => props.theme.white};
  border-radius: 5px;
  padding: 14px 20px;
  color: ${props => props.theme.textbutton};
  font-size: 1.0rem;
  margin-top: 25px;
  border: none;
  cursor:pointer;
  
  @media ${props => props.theme.min_sm}{
    margin-top: 0px;
  }  
 
  &:focus {
    outline: none;
  }
`;

const NeighborhoodTitle = styled.h1`
  font-family: 'stratos-semibold';
  font-size: 2.0rem;
  color: ${props => props.theme.white};
`;


const LocationText = styled.span`
  font-family: 'adelle-sans-bold';
  color: ${props => props.theme.blackless};
  font-size: 1.1rem;
  margin-bottom: 15px;
  display: block;
`;

class LocationBar extends Component {
  render() {
    const { name , randomize } = this.props;
    return (
      <div className="location-bar">
        <div className="container">
           <div className="elements">
            <div>
              <LocationText>Location</LocationText>
              <NeighborhoodTitle>{name}</NeighborhoodTitle>
            </div>
            <div>
              <Button onClick={randomize}>Change location</Button>
            </div>
          </div>  
        </div>      
      </div>
    );
  }
}

LocationBar.propTypes = {
  name: PropTypes.string,
  randomize: PropTypes.func,
};

export default LocationBar;