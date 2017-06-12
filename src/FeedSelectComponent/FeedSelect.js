import React from 'react'
import './FeedSelect.css'

export function FeedSelector(props){
  return (
      <select className='show-tick' defaultValue = "1" onChange={changeOption}>
          {props.leagues.map(function(league, leagueIndex){
              return (
                  <optgroup label={league.name} key={leagueIndex}>
                  {league.teams.map(function(team, teamIndex){
                      return (
                          <option value={team.id} key={teamIndex}>{team.name}</option> 
                      )
                  })}
                  </optgroup>
              )
          })}
      </select>
  )

  function changeOption(event){
      const selectedTeam = props.leagues
            .reduce((acc, value)=>acc.concat(value.teams), [])
            .find((team)=>team.id === event.target.value)
       props.onOptionSelected(selectedTeam.id, selectedTeam.name, selectedTeam.logo_url);
  }
}