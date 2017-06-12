// var axios = require('axios');
import Axios from 'axios';

    export function getFeed(teamId){
        var encodedURI = 'http://mobile-api.90min.com/api/partners/v1/feed/en/team/'+teamId+'?key=d1e5c21b';
        return Axios.get(encodedURI).then(function(response){
            return response.data.data.feed;
        });
    }

    export function getLeagues(){
        var leaguesUrl = 'http://mobile-api.12up.com/api/v8/leagues/en';
        return Axios.get(leaguesUrl).then(function(respone){
             return respone.data.data.leagues;
        });
    }