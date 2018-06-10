import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant';
import { Row, Col } from 'react-simple-flex-grid';
import styled from 'styled-components';

const ResultsDiv = styled.div`
  padding-top: 25px;
  @media ${props => props.theme.min_sm}{
 	padding-top: 45px;
  }  
`;

const Quantity = styled.h2`
  font-family:'adelle-sans-regular';
  color: ${props => props.theme.grey};  
`;

const ResultsContainer = styled.div`
  padding-top: 25px;
  @media ${props => props.theme.min_sm}{
 	padding-top: 45px;
  } 
  .item-restaurant{
  	margin-bottom: 27px;
	  @media ${props => props.theme.min_sm}{
	 	margin-bottom: 32px;
	  } 
  } 
`;


class Results extends Component {

  render() {
  	const restaurants = this.props.restaurants;

    return (
      <ResultsDiv>
      	 <div className="container">
	        <Quantity><span>{restaurants.length}</span> restaurants</Quantity>
	        <ResultsContainer>
		        <Row gutter={32}>
					{restaurants.slice(0, 9).map(restaurant => 
			           <Col className="item-restaurant" key={restaurant.id} xs={12} sm={4} md={4} lg={4} xl={3}>
			            	<Restaurant data={restaurant} />
			           </Col>
			        )}
		        </Row>
	        </ResultsContainer>
      	</div> 
      </ResultsDiv>
    );
  }
}

Results.propTypes = {
  restaurants: PropTypes.array
};

export default Results;