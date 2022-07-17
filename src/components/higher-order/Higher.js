import React, { Component } from 'react';
import HoverCounter from './HoverCounter';
import ClickCounter from './ClickCounter';
// import Counter from './Counter';
import styled from 'styled-components';

const DIV = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export class Higher extends Component {
  render() {
    return (
      <DIV>
          <ClickCounter />
          <HoverCounter />
      </DIV>
    )
  }
}

export default Higher