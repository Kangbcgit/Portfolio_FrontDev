import React from 'react'
import { styled } from 'styled-components'
const VscodeFrame = styled.div`
  display: flex;
  flex-direction: column;

  background: var(--main-bg);

  overflow: hidden;
`;
const Toolbar = styled.div`

  width: 100%;
  height: 35px;

  background: var(--tool_bar-bg);
`;
const MiddleContents = styled.div`
  display: flex;
  height: 906px;
`;
const Sidebar = styled.div`
  width: 48px;
  height: 906px;

  background: var(--side_bar-bg);
`;
const OpenFileList = styled.div`
  width: 100%;
  height: 35px;
  background: #252526;
`;
const DirectoryView = styled.div`
  display: flex;
  flex-direction: column;

  width: 169px;
  height: 906px;
  background: #252526;
`;
const DirectoryMenuTitle = styled.div`

  width: 169px;
  height: 35px;
  background: #252526;
`;
const DirectoryContents = styled.div`

  height: 827px;
`;
const AccordionView = styled.div`
  background: inherit;
  border-top: 1px solid rgba(204, 204, 204, 0.2);
  height: 22px;
`;
const Outline = styled(AccordionView)`
`;
const Timeline = styled(AccordionView)`
`;
const MainVisual = styled.div`
  display: flex;
  flex-direction: column;

  width: 1702px;
  height: 906px;
`;
const Tabs = styled.div`
  height: 35px;
`;
const TabContent = styled.div`
  height: 871px;
`;
const Statusbar = styled.div`

  width: 100%;
  height: 22px;

  background: #007FD4;
`;
function Background_VS(props) {
  return (
    <VscodeFrame>
      <Toolbar></Toolbar>
      <MiddleContents>
        <Sidebar></Sidebar>
        <DirectoryView>
          <DirectoryMenuTitle></DirectoryMenuTitle>
          <DirectoryContents></DirectoryContents>
          <Outline></Outline>
          <Timeline></Timeline>
        </DirectoryView>
        <MainVisual>
          <Tabs></Tabs>
          <TabContent></TabContent>
        </MainVisual>
      </MiddleContents>
      <Statusbar></Statusbar>
    </VscodeFrame>
  )
}

export default Background_VS