import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Recipies from './pages/Recipies/Recipies';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  document.title ="The Healtyish "
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path='/login' component={Login}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/recipies' component={Recipies}/>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
