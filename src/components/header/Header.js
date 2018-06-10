import React, { Component } from 'react';
import UserHeaderBox from './UserHeaderBox';

class Header extends Component {
  render() {
    return (
      <header className="header">
      	 <div className="container">
      	 	<div className="header-top">
		        <a className="icon-logo-company-header" href="/"><span>Deliveroo</span></a>
		        <UserHeaderBox />
	        </div>
        </div> 
	 </header>
    );
  }
}

export default Header;