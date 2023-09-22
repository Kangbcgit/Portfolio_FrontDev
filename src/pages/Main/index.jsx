import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components'
const VscodeFrame = styled.div`
  display: flex;
  flex-direction: column;

  background: var(--main-bg);

  overflow: hidden;
`;
const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 35px;

  font-size: 13px;
  font-weight: normal;

  background: var(--tool_bar-bg);
  color: var(--base_color);
  &>.left {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    font-weight: 500;
    &>img {
      width: 17px;
      height: 17px;
      object-fit: cover;
      margin-left: 8px;
      filter: brightness(1.05)
    }
  }
  &>.center {
    height: 22px;
    &>h1 {
      font-size: 13.6px;
      font-weight: normal;
    }
  }
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
function Main(props) {
  return (
    <VscodeFrame>
      <Toolbar>
        <div className="left">
          <img src={`${process.env.PUBLIC_URL}/images/logo_top.png`} alt="" />
          <Link to='#none'>파일(F)</Link>
          <Link to='#none'>편집(E)</Link>
          <Link to='#none'>선택 영역(S)</Link>
          <Link to='#none'>보기(V)</Link>
          <Link to='#none'>이동(G)</Link>
          <Link to='#none'>실행(R)</Link>
          <Link to='#none'>터미널(T)</Link>
          <Link to='#none'>도움말(H)</Link>
        </div>
        <div className="center">
          <h1>Kang ByungChan - Visual Studio Code</h1>
        </div>
        <div className="right"></div>
      </Toolbar>
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

export default Main