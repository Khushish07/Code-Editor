import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import EditorPage from './Components/EditorPage';
import RoomID from './Components/RoomID';

function App() {
  return (
    
      <BrowserRouter>

        <Routes>

            <Route path='/' element={<RoomID/>}></Route>
            <Route path='/editor/:roomId' element={<EditorPage/>}></Route>

        </Routes>

      </BrowserRouter>
    
  );
}

export default App;
