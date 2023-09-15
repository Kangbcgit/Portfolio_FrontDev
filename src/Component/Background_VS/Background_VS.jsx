import React from 'react'
import { styled } from 'styled-components'
const VscodeFrame = styled.div`
  position: relative;
  height: 100vh;
  max-height: 1080px;

  background: var(--main-bg);

  overflow: hidden;
`;
const Toolbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 35px;

  background: var(--tool_bar-bg);
`;
const Sidebar = styled.div`
  position: absolute;
  top: 35px;
  left: 0;

  width: 48px;
  height: calc(100% - 35px - 22px);

  background: var(--side_bar-bg);
`;
const OpenFileList = styled.div`
  position: absolute;
  left: 217px;
  top: 35px;
  width: 100%;
  height: 35px;
  background: #252526;
`;
const DirectoryView = styled.div`
  position: absolute;
  top: 35px;
  left: 48px;

  width: 169px;
  height: 862px;
  background: #252526;
`;
const DirectoryMenuTitle = styled.div`
  position: absolute;
  /* left: 48px; */
  top: 35px;

  width: 169px;
  height: 35px;
  background: #252526;
`;
const AccordionView = styled.div`
  position: absolute;
  width: 169px;
  height: 22px;
  background: inherit;
  border-top: 1px solid rgba(204, 204, 204, 0.2);
`;
const Outline = styled(AccordionView)`
  /* left: 48px; */
  top: 862px;
`;
const Timeline = styled(AccordionView)`
  /* left: 48px; */
  top: 884px;
`;
const Statusbar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 22px;

  background: #007FD4;
`;
function Background_VS() {
  return (
    <VscodeFrame>
      <Toolbar></Toolbar>
      <OpenFileList></OpenFileList>
      <Sidebar></Sidebar>
      <DirectoryView>
        <DirectoryMenuTitle></DirectoryMenuTitle>
        <Outline></Outline>
        <Timeline></Timeline>
      </DirectoryView>
      <Statusbar></Statusbar>
    </VscodeFrame>
  )
}

export default Background_VS