export default (numberLeague, yearSeason, status, resource, matchOrTeam) => {
    return {
        url: `https://api.football-data.org/v2/${resource}/${numberLeague}/${matchOrTeam}?status=${status}&season=${yearSeason}`,
        method: 'GET',
        headers: {
            'X-Auth-Token': '31da4377f6bd472d89c5c79443bfb5db',
            'Content-type': 'application/json',
        }
    }
}
