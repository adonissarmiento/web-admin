import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Sidenav from './components/Sidenav';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Routes from './components/Routes';

class App extends Component {
  render () {
      return (
        <React.Fragment className='h-100'>
          <Sidenav />
          <Router>
            <Routes />
          </Router>
        </React.Fragment>
      );
    }
  }

export default App;
