import React from 'react'
import { styled } from 'styled-components';

const ToolbarFrame = styled.div`

  width: 100%;
  height: 35px;

  background: var(--tool_bar-bg);
`;

function Toolbar() {
  return (
    <ToolbarFrame></ToolbarFrame>
  )
}

export default Toolbar