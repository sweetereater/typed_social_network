import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import AppPropsType from './redux/stateTypes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props: AppPropsType) {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route path='/profile'>
            <Profile posts={props.state.profilePage.postsData} />
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
