import React from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Home from './components/Home';
import CreateEditContact from './components/contact/CreateEdit';
import ListOfContact from './components/contact/List';

class App extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <div>
        <NavBar />
        <br />
        <div className="container">
          <Switch>
            <Route path={'/'} exact component={ListOfContact} />
            <Route path={'/contact'} exact component={ListOfContact} />
            <Route path={'/contact/create'} exact component={CreateEditContact} />
            <Route path={'/contact/edit/:contactId'} exact component={CreateEditContact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);