import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import YTSearch from 'youtube-api-search';

const MOVIE_API_KEY = '2d733da824cd8c252eab2c2990379324';
const YOUTUBE_API_KEY =  'AIzaSyAX-BBg9D4Zz5iDgjGuviEIMcsShqVgFmQ';


//create component
class App extends Component {
    constructor(props){
        super(props);

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&language=en-US&query=John%20Wick&page=1&include_adult=false`)
        .then(function (response) {
            YTSearch({key: YOUTUBE_API_KEY, term: `${response.data.results[0].original_title} movie trailer`}, (trailer) => {
                console.log( trailer[0]);
            });
        console.log(response);
        console.log(response.data.results[0].original_title);
        console.log(response.data.results[0].backdrop_path);
        })
        .catch(function (error) {
        console.log(error);
        });
}
    render() {
      return (
        <div>
          <h1>Hello World</h1>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
