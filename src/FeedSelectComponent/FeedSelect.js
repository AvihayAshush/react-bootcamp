import React from 'react'
import './FeedSelect.css'

export function FeedSelector(props){
  return (
      <select className='show-tick' defaultValue = "1" onChange={changeOption}>
          {props.leagues.map(function(league){
              return (
                  <optgroup label={league.league.name} key={league.id}>
                       {teams(league)};
                  </optgroup>
              )
          })}
      </select>
  )

  function teams(league){
      return league.teams.map(function(team, teamIndex){
            return (
                <option value={team.id} key={team.id}>{team.name}</option> 
            )
      }) 
  }

  function changeOption(event){
      const selectedTeam = props.leagues
            .reduce((acc, value)=>acc.concat(value.teams), [])
            .find((team)=>team.id === event.target.value)
      const teamData = {
          feedId: selectedTeam.id, 
          name: selectedTeam.name,
          logo: selectedTeam.logo_url
       }
       props.onOptionSelected(teamData);
  }
}