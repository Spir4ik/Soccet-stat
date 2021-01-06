import React, { useEffect } from 'react';
// import axios from 'axios';
import Header from "./components/Header.jsx";
import "./styles/index.scss"
import "./styles/stylesLeagueList.scss"

const App = () => {
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
  return (
    <div className="wrapper">
        {/*<header className="header">*/}
        {/*    <div className="container">*/}
        {/*        <div className="header__body">*/}
        {/*            <a href="#" className="header__logo">*/}
        {/*                SOCCER STAT*/}
        {/*            </a>*/}
        {/*            <div className="header__burger">*/}
        {/*                <span></span>*/}
        {/*            </div>*/}
        {/*            <nav className="header__menu">*/}
        {/*                <ul className="header__list">*/}
        {/*                    <li><a href="#" className="header__link">Список лиг</a></li>*/}
        {/*                    <li><a href="#" className="header__link">Список команд</a></li>*/}
        {/*                    <li><a href="#" className="header__link">Календарь лиги</a></li>*/}
        {/*                    <li><a href="#" className="header__link">Календарь одной команды</a></li>*/}
        {/*                </ul>*/}
        {/*            </nav>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</header>*/}
        <Header />
        <div className="content">
            <div className="container">
                <div className="card">
                    <div className="cardLeague">
                        <img src="./image/logo_cl.png" alt=""/>
                        <div className="cardLeague__footer">
                            <h4><b>Champions League</b></h4>
                        </div>
                    </div>
                    <div className="cardLeague">
                        <img src="./image/logo_cl.png" alt=""/>
                        <div className="cardLeague__footer">
                            <h4><b>Champions League</b></h4>
                        </div>
                    </div>
                    <div className="cardLeague">
                        <img src="./image/logo_cl.png" alt=""/>
                        <div className="cardLeague__footer">
                            <h4><b>Champions League</b></h4>
                        </div>
                    </div>
                    <div className="cardLeague">
                        <img src="./image/logo_cl.png" alt=""/>
                        <div className="cardLeague__footer">
                            <h4><b>Champions League</b></h4>
                        </div>
                    </div>
                    <div className="cardLeague">
                        <img src="./image/logo_cl.png" alt=""/>
                        <div className="cardLeague__footer">
                            <h4><b>Champions League</b></h4>
                        </div>
                    </div>
                    <div className="cardLeague">
                        <img src="./image/logo_cl.png" alt=""/>
                        <div className="cardLeague__footer">
                            <h4><b>Champions League</b></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default App;
