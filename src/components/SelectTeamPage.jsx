import React, {useEffect, useState} from 'react'
import Autocomplete from "@material-ui/lab/Autocomplete";
import {Link} from "react-router-dom";
import AllTeamsCurrentLeague from "./AllTeamsCurrentLeague.jsx";
import {useSelector} from "react-redux";
import axios from "axios";

function SelectTeamPage() {
    const [listTeams, setListTeams] = useState([])
    const [selectIdTeam ,setSelectIdTeam] = useState('')

    const yearSeason = useSelector(state => state.yearSeason);

    useEffect(async () => {
        const nameLeague = JSON.parse(localStorage.getItem('name_league'))
        try {
            await axios({
                url: `https://api.football-data.org/v2/competitions/${nameLeague.numberLeagueId}/teams?season=${yearSeason}`,
                method: 'GET',
                headers: {
                    'X-Auth-Token': '31da4377f6bd472d89c5c79443bfb5db',
                    'Content-type': 'application/json',
                }
            }).then(res => {
                setListTeams(res.data.teams)
            })

        } catch(e) {
            alert(`Что то пошло не так! ${e}`)
        }
    }, [yearSeason])

    return(
        <div className="league__row">
            <div className="league__autocomplete">
                <Autocomplete
                    id="custom-input-demo"
                    options={listTeams}
                    getOptionLabel={(option) => option.name}
                    onChange={(event, newValue) =>
                    {
                        const parametersSelectedTeam = {
                            numberTeamId: newValue.id,
                            imgTeam: newValue.crestUrl,
                            nameTeam: newValue.name
                        }
                        localStorage.setItem('selectTeam', JSON.stringify(parametersSelectedTeam))
                        setSelectIdTeam(newValue.name)}
                    }
                    renderInput={(params) => (
                        <div ref={params.InputProps.ref} style={{display: 'flex', margin: '0 0 15px 0'}}>
                            <input
                                   type="text"
                                   placeholder="Начните вводить команду"
                                   {...params.inputProps}
                            />
                            {
                                (selectIdTeam) ?
                                    <Link
                                        to={`/listleague/Team_Calendar/${JSON.parse(localStorage.getItem('selectTeam')).nameTeam.toLowerCase().replace(/\s+/g, '').trim()}`}>
                                        <button style={{margin: '2px 0 0 0'}}>
                                            Найти
                                        </button>
                                    </Link>
                                    :
                                    <button>Найти</button>
                            }
                        </div>
                    )}
                />
            </div>
            <div className="league__body">
                <div className="body__results">
                    <div className="latter-result">
                        <div className="tabs-body">
                            <div className="tabs-text">
                                <span>Команды в текущей лиге</span>
                            </div>
                        </div>
                        <div className="league-statistics">
                            <div className="league-statistics__body">
                                <div className="league-statistics__header">
                                    {JSON.parse(localStorage.getItem('name_league')).nameLeague}
                                </div>
                                <div className="league-statistics__item">
                                    {listTeams.map(({name, crestUrl, id}) =>
                                        <AllTeamsCurrentLeague
                                            key={id}
                                            id={id}
                                            name={name}
                                            crestUrl={crestUrl}
                                        />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SelectTeamPage