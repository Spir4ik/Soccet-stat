import React from 'react';
import {Route, Switch} from "react-router-dom";
import Header from './components/Header.jsx';
import CardLeague from "./components/CardLeague.jsx";
import LeaguePage from "./components/LeaguePage.jsx";
import './styles/index.scss';
import './styles/stylesLeagueList.scss';
import 'react-datepicker/dist/react-datepicker.css';


const App = () => {
  return(
      <div className="wrapper">
          <Header />
          <Switch>
              <Route exact path='/' component={CardLeague} />
              <Route path='/listleague' component={LeaguePage} />
          </Switch>
      </div>
  );
}

export default App;
