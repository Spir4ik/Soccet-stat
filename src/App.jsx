import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import CardLeague from "./components/CardLeague.jsx";
import LeaguePage from "./components/LeaguePage.jsx";
import {Route, Switch} from "react-router";
import LoadComponent from "./components/LoadComponent.jsx";
import './styles/index.scss';
import './styles/stylesLeagueList.scss';

const App = () => {

  return(
          <div className="wrapper">
              <Header />
              <Switch>
                  <Route exact path='/' component={CardLeague} />
                  <Route path='/listleague' component={LeaguePage}/>
              </Switch>
          </div>
      );
}

// useEffect(async () => {
//   try {
//     await axios({
//       url: 'https://api.football-data.org/v2/competitions/CL/matches',
//       method: 'GET',
//       headers: {
//         'X-Auth-Token': '31da4377f6bd472d89c5c79443bfb5db',
//         'Content-type': 'application/json',
//       },
//     }).then((res) => {
//       const filterOne = res.data.matches.filter((item) => {
//         if (item.utcDate.includes('2020-08-18')) {
//           return item;
//         }
//       });
//       console.log(filterOne);
//     });
//   } catch (e) {
//     alert(`Что то пошло не так! ${e}`);
//   }
// });
export default App;
