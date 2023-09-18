import { Route, Routes } from 'react-router-dom';
import Mainpage from './Pages/Mainpage';
function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={
          <Mainpage />
        } />
      </Routes>
    </>
  );
}

export default App;
