import React, {useState, useEffect} from 'react'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useSelector, useDispatch} from "react-redux";
import AllTeamsCurrentLeague from "./AllTeamsCurrentLeague.jsx";
import {Link} from "react-router-dom";

function TeamCalendar() {
    const [listTeams, setListTeams] = useState([])
    const [selectIdTeam ,setSelectIdTeam] = useState('')
    const defaultProps = {
        options: listTeams,
        getOptionLabel: (option) => option.name,
    };

    const yearSeason = useSelector(state => state.yearSeason);

    useEffect(async () => {
        const nameLeague = JSON.parse(localStorage.getItem('name_league'))
        try {
            await axios({
                url: `https://api.football-data.org/v2/competitions/2001/teams?season=${yearSeason}`,
                method: 'GET',
                headers: {
                    'X-Auth-Token': '31da4377f6bd472d89c5c79443bfb5db',
                    'Content-type': 'application/json',
                }
            }).then(res => {
                // console.log(res.data.matches.filter(item => item.status.includes('SCHEDULED') ? item : null));
                setListTeams(res.data.teams)
            })

        } catch(e) {
            alert(`Что то пошло не так! ${e}`)
        }
    }, [yearSeason])


    return(
        <div className="league__body">
            <div className="container">
                <div className="league__row">
                    <div style={{ width: 'maxWidth' }}>
                        <Autocomplete
                            {...defaultProps}
                            id="debug"
                            onChange={(event, newValue) => {
                                const parametersSelectedTeam = {
                                    numberTeamId: newValue.id,
                                    imgTeam: newValue.crestUrl,
                                    nameTeam: newValue.name
                                }
                                localStorage.setItem('selectTeam', JSON.stringify(parametersSelectedTeam))
                            }}
                            renderInput={(params) => <TextField {...params}
                                                                label="Начните вводить команду"
                                                                margin="normal" />}
                        />
                        <Link to='/listleague/Team_Calendar/64'><button type='button'>press</button></Link>
                    </div>
                    <div className="league__body">
                        <div className="body__results">
                            <div className="latter-result">
                                <div className="tabs-body">
                                    <div className="tabs-text">
                                        <span>Выберите команду</span>
                                    </div>
                                </div>
                                <div className="league-statistics">
                                    <div className="league-statistics__body">
                                        <div className="league-statistics__header">
                                            League of Champions
                                        </div>
                                        <div className="league-statistics__item">
                                            {listTeams.map(({name, crestUrl, id}) => <AllTeamsCurrentLeague
                                                key={id}
                                                id={id}
                                                name={name}
                                                crestUrl={crestUrl}
                                            />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCalendar