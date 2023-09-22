import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import '@vscode/codicons/dist/codicon.css';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Main></Main>} />
      </Routes>
    </>
  );
}

export default App;
