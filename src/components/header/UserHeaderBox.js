import React, { Component } from 'react';
import styled from 'styled-components';

const LinkUserBox = styled.a`
  text-decoration: none;
`;

const UserName = styled.span`
  font-family: 'adelle-sans-regular';
  display: none;
  color: ${props => props.theme.blackgr};
  @media ${props => props.theme.min_sm}{
	display: inline;
  }
`;

const UserIcon = styled.p`
  &::before {
    content: '\\${props => props.theme.iconusericon}';     
    color: ${props => props.theme.greenbg};
    @media ${props => props.theme.min_sm}{
		margin-right: 10px;
	}
  }
`;


class UserHeaderBox extends Component {
  render() {
    return (
      <div>
      	<LinkUserBox href="/">
        	<UserIcon className="icon-user-icon">
        		<UserName>Jane Smith</UserName>
        	</UserIcon>
        </LinkUserBox>
     </div>
    );
  }
}

export default UserHeaderBox;