import React from 'react'

function AllTeamsCurrentLeague(props) {
    const {name, crestUrl, id} = props

    return (
        <div className="league-statistics__element team-calendar" onClick={() => {
            const parametersSelectedTeam = {
                numberTeamId: id,
                imgTeam: crestUrl,
                nameTeam: name
            }
            localStorage.setItem('selectTeam', JSON.stringify(parametersSelectedTeam))
            window.history.push('hello!')
        }}>
            <div className="league-statistics__date">
                <img src={crestUrl} alt="" />
            </div>
            <div className="league-statistics__matches">
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default AllTeamsCurrentLeague