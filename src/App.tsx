import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import AppStatePropsType from './redux/stateTypes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App: React.FC<AppStatePropsType> = (props) => {

  const profilePage = <Profile
    profilePage={props.state.profilePage}
    dispatch={props.dispatch}
  />;

  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route exact path='/'>
            {profilePage}
          </Route>
          <Route path='/profile'>
            {profilePage}
          </Route>
          <Route path='/messages'>
            <Dialogs
              dialogsPage={props.state.dialogsPage}
              dispatch={props.dispatch}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
