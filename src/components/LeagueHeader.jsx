import React from 'react'
import {useSelector} from "react-redux";
import SelectSeason from "./SelectSeason.jsx";

function LeagueHeader() {
    const nameLeague = JSON.parse(localStorage.getItem('name_league'))
    const yearSeason = useSelector(state => state.yearSeason);

    const currentSeason = () => {
        switch (yearSeason) {
            case '2020':
                return '2020 / 2021';
            case '2019':
                return '2019 / 2020';
            case '2018':
                return '2018 / 2019';
            default:
                return null;
        }
    };

    return(
        <>
            {(window.location.href.includes('/Team_Calendar/')) ?
            <React.Fragment>
                <div className="league__header" style={{margin: '15px 0 0 8px'}}>
                    <div className="header__logo">
                        <img
                            src={JSON.parse(localStorage.getItem('selectTeam')).imgTeam}
                            style={{height: '120px', width: '120px'}}
                            alt=""
                        />
                    </div>
                    <div className="header__info">
                        <span>{JSON.parse(localStorage.getItem('selectTeam')).nameTeam}</span>
                    </div>
                </div>
            </React.Fragment>
            :
            <React.Fragment>
                <SelectSeason />
                <div className="league__header">
                    <div className="header__logo">
                        <img src={nameLeague.numberLeagueImg} alt="" />
                    </div>
                    <div className="header__info">
                        <span>{nameLeague.nameLeagueName}</span>
                        <p>{currentSeason()}</p>
                    </div>
                </div>
            </React.Fragment>
            }
        </>
    )
}

export default LeagueHeader