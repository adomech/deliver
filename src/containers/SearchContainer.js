import React, { Component } from 'react';
import Results from '../components/results/Results';
import LocationBar from '../components/locationBar/LocationBar';
import Header from '../components/header/Header';
import data from '../assets/data/restaurants';

class SearchContainer extends Component {

 constructor(props) {
  super(props);
  this.state = {
          data: data,
          restaurants: data.restaurants
    };
  }

  handleClick = () => {
     const shuffled = this.state.restaurants.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
     this.setState({
       restaurants: shuffled
    });
  }

  render() {
   
    return (
      <div className="SearchPage">
        <Header />
        <LocationBar randomize={this.handleClick} name={data.neighborhood} />
        <Results restaurants={this.state.restaurants} />
    
      </div>
    );
  }
}

export default SearchContainer;