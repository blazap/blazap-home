import React from 'react'
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home'
import Downloads from './components/Downloads'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='downloads' element={< Downloads />}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;