import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddQuiz from './addassignment';
import ViewQuiz from './ViewAssignment';
import DeleteQuiz from './viewSybmittedAssignment';
import { Home } from '@material-ui/icons';


function App() {
  

  return (
    <div >
     
      <Link to="/ViewAssignment">View Assignment</Link>
      <Link to="/viewSubmitedAssignment">View Submtted Assignment</Link>
      <Link to="/addassignment">Add Assignment</Link>
      

      <Switch>
          <Route exact="/">
            <Home/>
          </Route>
          <Route exact path="ViewAssignment">
            <ViewAssignment/>
          </Route>
          <Route path="/viewSubmitedAssignment">
          <viewSubmitedAssignment/>
          </Route>
          <Route path="/addassignment">
            <addassignment/>
          </Route>
        </Switch>

    </div>
  );

  function Home  ()  {
    return (
      <h1>Home</h1>
    )
  }

}

export default App;
