import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from '../scss/main.scss';

//components
import Poster from './components/poster-section.js';

const MOVIE_API_KEY = '2d733da824cd8c252eab2c2990379324';
const YOUTUBE_API_KEY =  'AIzaSyAX-BBg9D4Zz5iDgjGuviEIMcsShqVgFmQ';

const url = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&language=en-US&query=star%20Wars&page=1&include_adult=false`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { };

  }

render() {
  fetch(url).then(response => {
    return  response.json();
  }).then(json => {
    this.setState({
      trailers: json.results[3].original_title,
      image: `https://image.tmdb.org/t/p/w500/${json.results[3].backdrop_path}`,
      summary: json.results[3].overview,
      popularity: json.results[3].popularity,
      release: json.results[3].release_date
    });
  }).catch(err => {
    console.log(err)
  });
    return (
      <div>
        <Poster poster={this.state.image}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
