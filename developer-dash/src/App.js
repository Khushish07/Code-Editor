import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import EditorPage from './Components/EditorPage';
import { Toaster } from 'react-hot-toast';
import RoomID from './Components/RoomID';

function App() {
  return (
      <>
        <div>
          <Toaster
              position="top-right"
              toastOptions={{
                  success: {
                      theme: {
                          primary: '#4aed88',
                      },
                  },
              }}
            ></Toaster>
        </div>
        
          <BrowserRouter>

            <Routes>

                <Route path='/' element={<RoomID/>}></Route>
                <Route path='/editor/:roomId' element={<EditorPage/>}></Route>

            </Routes>

          </BrowserRouter>
      </>
    
  );
}

export default App;
