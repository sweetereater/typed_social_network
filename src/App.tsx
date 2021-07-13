import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import AppStatePropsType from './redux/stateTypes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App(props: AppStatePropsType) {

  const profilePage = <Profile
    profilePage={props.state.profilePage}
    addPost={props.addPost}
    handlePostChange={props.onPostTextChange}
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
              dialogsData={props.state.dialogsPage.dialogsData}
              messages={props.state.dialogsPage.messages}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
