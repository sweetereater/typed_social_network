import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import { getInitialized } from './redux/appReducer';

import HeaderContainer from './Components/Header/HeaderContainer';
import Nav from './Components/Nav/Nav';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import Profile from './Components/Profile/ProfilePageContainer';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';
import { storeType } from './redux/redux-store';
import Preloader from './Components/Preloader/Preloader';


interface IAppPropsType {
  initialized: boolean
  getInitialized: () => void
}

class App extends React.Component<IAppPropsType> {

  componentDidMount() {
    this.props.getInitialized();
  }

  render() {

    if (!this.props.initialized) return <Preloader />

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
    )
  }
}

const mapStateToProps = (state: storeType) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { getInitialized })(App);
