import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from '../scss/main.scss';

//components
import Poster from './components/poster-section';
import Searchbar from './components/search-bar-header';
import MovieDetails from './components/movie-details';

const MOVIE_API_KEY = '2d733da824cd8c252eab2c2990379324';
const YOUTUBE_API_KEY =  'AIzaSyAX-BBg9D4Zz5iDgjGuviEIMcsShqVgFmQ';
const moviePoster = "star wars rogue one";

const url = `https://api.themoviedb.org/3/movie/330459?api_key=${MOVIE_API_KEY}`;

//`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&language=en-US&query=${moviePoster}&page=1&include_adult=false`; //

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US


//`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&language=en-US&query=${moviePoster}&page=1&include_adult=false`;

//`https://api.themoviedb.org/3/movie/330459/latest?api_key=${MOVIE_API_KEY}&language=en-US`


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { };

  }

render() {
  fetch(url).then(response => {
    return  response.json();

  }).then(json => {
    //console.log(json);
    this.setState({
      title: json.original_title,
      image: `https://image.tmdb.org/t/p/w500/${json.poster_path}`,
      summary: json.overview,
      vote: json.vote_average,
      box: json.revenue,
      release: json.release_date,
      runtime: json.runtime,
      tagline: json.tagline
    });
  }).catch(err => {
    console.log(err)
  });
    return (
      <div>
        <Searchbar />
        <div className="row">
          <div className="container">
            <div className="col-md-5">
                <Poster poster={this.state.image}/>
            </div>
            <div className="col-md-7">
                  <MovieDetails
                    vote={this.state.vote}
                    title={this.state.title}
                    summary={this.state.summary}
                    release={this.state.release}
                    box={this.state.box}
                    runtime={this.state.runtime}
                    tagline={this.state.tagline}
                  />
            </div>
        </div>
      </div>


      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
