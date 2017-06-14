import React from 'react'
import PropTypes from 'prop-types'
import './TeamSelector.css'
import {FeedSelector} from '../FeedSelectComponent/FeedSelect'

export function TeamSelector(props){
   return(
       <div className='TeamSelectorHolder'>
           <img
              className= 'TeamLogo'
              src ={props.teamLogoUrl}
              alt= 'team logo'
           />
           <p className= 'FeedName'>{props.teamName}</p>
           <FeedSelector leagues={props.leagues} onOptionSelected={props.onOptionSelected.bind(this)}/>
       </div>
   )
}

TeamSelector.propTypes = {
    teamLogoUrl: PropTypes.string.isRequired, 
    teamName: PropTypes.string.isRequired
}