import React, { Children } from 'react'
import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  background: var(--main-bg);

  overflow: hidden;
`;

function VscodeFrame(props) {
  return (
    <Wrapper>
    </Wrapper>
  )
}

export default VscodeFrame