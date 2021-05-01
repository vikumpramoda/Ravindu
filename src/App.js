import {BrowserRouter as Router,Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './components/navbar.components';
import "bootstrap/dist/css/bootstrap.min.css"
import ExercisesList from './components/exercise-list.components';
import EditExercises from './components/edit-exercises.components';
import CreateExercises from './components/create-exercises.components';
import CreateUsers from './components/create-user.components';
function App() {
  return (
    <Router>
      <div className="container">
    <Navbar/>
    <br/>
    <Route path="/" exact component={ExercisesList}/>
    <Route path="/edit/:id" component={EditExercises}/>
    <Route path="/create" component={CreateExercises}/>
    <Route path="/user" component={CreateUsers}/>
    </div>
    </Router>
    
  );
}

export default App;
