import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import HeaderContainer from './Components/Header/HeaderContainer';
import Nav from './Components/Nav/Nav';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import Profile from './Components/Profile/ProfilePageContainer';
import Login from './Components/Login/Login';

const App: React.FC = (props) => {

  return (
    <Router>
      <div className="App">
        <HeaderContainer />
        <Nav />
        <Switch>

          <Route exact path='/'>
            <Redirect to='/profile/me' />
          </Route>

          <Route path='/profile/:profileId'>
            <Profile />
          </Route>

          <Route path='/messages'>
            <DialogsContainer />
          </Route>

          <Route path='/users'>
            <UsersContainer />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


export default App;
