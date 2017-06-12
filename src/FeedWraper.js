import React from 'react'
import * as api from './utils/api'
import {Logo} from './LogoComponent/Logo'
import {TeamSelector} from './TeamSelectorComponent/TeamSelector'
import {Feed} from './FeedComponent/Feed'


class FeedWraper extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           feed: null, 
           currentFeedId: 1,
           currentTeamName: 'Arsenal',
           currentTeamLogoUrl: 'http://static.minutemediacdn.com/assets/production/icons/teams/h50/arsenal.png', 
           leagues: null,
       }
       this.updateFeed = this.updateFeed.bind(this);
       this.onLeaguesReturn = this.onLeaguesReturn.bind(this);
       this.onFeedReturn = this.onFeedReturn.bind(this);
       this.resetFeedData = this.resetFeedData.bind(this);
   }

   componentDidMount(){
       this.updateFeed(this.state.currentFeedId, this.state.currentTeamName, this.state.currentTeamLogoUrl);
   }

   render(){
       return(
           <div>
               <Logo/>               
               {!this.state.leagues? <p>Loading</p>:<TeamSelector teamLogoUrl={this.state.currentTeamLogoUrl} teamName={this.state.currentTeamName} onOptionSelected={this.updateFeed.bind(this)} leagues={this.state.leagues}/>}
               {!this.state.feed ? <p>Loading</p> : <Feed feedItems={this.state.feed}/>}
           </div>
       )
   }

   updateFeed(feedId, name, logo){
        this.resetFeedData(feedId, name, logo);
        api.getFeed(feedId).then(this.onFeedReturn.bind(this));
        api.getLeagues().then(this.onLeaguesReturn.bind(this));
   }

   resetFeedData(feedId, name, logo){
         this.setState(function(){
           return{
               feed: null,
               currentFeedId:feedId,
               currentTeamName: name, 
               currentTeamLogoUrl: logo
           }
       });
   }

   onFeedReturn(data){
       this.setState(function(){
          return{
              feed: data
          }
       })
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