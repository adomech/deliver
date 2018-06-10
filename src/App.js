import React, { Component } from 'react';
import SearchContainer from './containers/SearchContainer';
import { ThemeProvider } from 'styled-components';
import { deliveroo } from './theme/GlobalStyle';

class App extends Component {

  render() {
   
    return (
      <ThemeProvider theme={deliveroo}>
        <div className="App">
          <SearchContainer />
        </div>
       </ThemeProvider>   
    );
  }
}

export default App;
