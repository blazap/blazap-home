import React from 'react'
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;