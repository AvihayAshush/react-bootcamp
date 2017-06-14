import React from 'react'
import * as api from './utils/api'
import {Logo} from './LogoComponent/Logo'
import {TeamSelector} from './TeamSelectorComponent/TeamSelector'
import {Feed} from './FeedComponent/Feed'

class FeedWraper extends React.Component{

   static get INITIAL_STATE(){
       return  {
           feed: null, 
           currentFeedId: 1,
           currentTeamName: 'Arsenal',
           currentTeamLogoUrl: 'http://static.minutemediacdn.com/assets/production/icons/teams/h50/arsenal.png', 
           leagues: null,
       }
   }

   constructor(props){
       super(props);
       Object.assign(this, {
            state: this.constructor.INITIAL_STATE, 
            updateFeed: this.updateFeed.bind(this), 
            onLeaguesReturn: this.onLeaguesReturn.bind(this), 
            onFeedReturn: this.onFeedReturn.bind(this), 
            resetFeedData: this.resetFeedData.bind(this), 
       })
   }

   componentDidMount(){
       const {currentFeedId, currentTeamName, currentTeamLogoUrl, } = this.state;
       const currentTeamData = {
          feedId: currentFeedId, 
          name: currentTeamName,
          logo: currentTeamLogoUrl
       }
       this.updateFeed(currentTeamData);
   }

   render(){
       const teamSelectorData = {
            teamLogoUrl:this.state.currentTeamLogoUrl,
            teamName: this.state.currentTeamName, 
            onOptionSelected: this.updateFeed.bind(this),
            leagues:this.state.leagues,
       }
       return(
           <div>
               <Logo/>               
               {!this.state.leagues? <p className= 'Loader'>Loading</p>:<TeamSelector {...teamSelectorData}/>}
               {!this.state.feed ? <p className= 'Loader'>Loading</p> : <Feed feedItems={this.state.feed}/>}
           </div>
       )
   }

   updateFeed({feedId, name, logo}){
        this.resetFeedData(feedId, name, logo);
        api.getFeed(feedId).then(this.onFeedReturn.bind(this));
        api.getLeagues().then(this.onLeaguesReturn.bind(this));
   }

   resetFeedData(feedId, name, logo){
         this.setState({
               feed: null,
               currentFeedId:feedId,
               currentTeamName: name, 
               currentTeamLogoUrl: logo
           });
   }

   onFeedReturn(feed){
       this.setState({feed})
   };

   onLeaguesReturn(data){
       this.setState(function(){
           return {
               leagues: data
           }
       })
   }
}

export default FeedWraper;