import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
import Header from './Header';
import Meta from './Meta';
import Footer from './Footer';
import Monolith from './Monolith';

config.autoAddCss = false;

const theme = {
  red: '#FF0000',
  primary: '#00A9A7',
  highlight: '#00e1df',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#909292',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  footerHeight: '200px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  simpleTransition: 'all 0.3s'
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
  min-height: calc(100vh - 200px);
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
 ${dom.css()}
@font-face {
    font-family: 'DINWeb' ;
    src: url('/DINWeb.woff') format("woff");
    font-weight: 100 300;
    font-style: normal;
}

@font-face {
    font-family: 'DINWeb' ;
    src: url('/DINWeb-Bold.woff') format("woff");
    font-weight: 900;
    font-style: bold;
}


    html {
        box-sizing: border-box;
        font-size: 10px;

    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'DINWeb' ;
    }

    a {
        text-decoration: none;
        color: ${theme.black};
    }

    #__next{
     
    }

`;

class Page extends Component {
  state = {
    transparentHeader: false
  };
  handleScroll = e => {
    let element = e.target;
    if (element.scrollingElement.scrollTop > 0) {
      this.setState({ transparentHeader: true });
    } else {
      this.setState({ transparentHeader: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledPage>
          <Meta />
          <Header isTransparent={this.state.transparentHeader} />
          <Container>
            <Monolith />
            <Inner onScroll={this.handleScroll}>{this.props.children}</Inner>
          </Container>
        </StyledPage>
        <Footer />
      </ThemeProvider>
    );
  }
}

export default Page;
