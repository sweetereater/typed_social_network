import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import ProfileContainer from './Components/Profile/ProfileContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import Profile from './Components/Profile/Profile';

const App: React.FC = (props) => {

  const profilePage = <Profile />
  // const profilePage = <ProfileContainer />;

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
            <DialogsContainer />
          </Route>

          <Route path='/users'>
            <UsersContainer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


export default App;
