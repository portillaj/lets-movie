import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from '../scss/main.scss';
import YTSearch from 'youtube-api-search';
//components
import MovieDetails  from './components/movie-details';

const MOVIE_API_KEY = '2d733da824cd8c252eab2c2990379324';

const YOUTUBE_API_KEY =  'AIzaSyAX-BBg9D4Zz5iDgjGuviEIMcsShqVgFmQ';
const url = `https://api.themoviedb.org/3/movie/284053?api_key=${MOVIE_API_KEY}`;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trailer: [],
      title: " ",
      image: " ",
      summary: " ",
      vote: " ",
      box: " ",
      release: " ",
      runtime: " ",
      tagline: " ",
      backdrop: ""
    };



    this.moneyFormat = this.moneyFormat.bind(this);
  }

  moneyFormat(n, currency) {
      return currency + " " + parseInt(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }

  componentDidMount() {

  fetch(url).then(response => {
    return  response.json();

  }).then(json => {

    this.setState({
      title: json.original_title,
      image: `https://image.tmdb.org/t/p/w500/${json.poster_path}`,
      summary: json.overview,
      vote: json.vote_average,
      box: json.revenue,
      release: json.release_date,
      runtime: json.runtime,
      tagline: json.tagline,
      backdrop: json.backdrop_path
    });
  }).catch(err => {
    console.log(err);
  });
} //end componentDidMount

  componentDidUpdate() {

    document.querySelector(".background").style.backgroundImage = `url(https://image.tmdb.org/t/p/original${this.state.backdrop})`;
  }
render() {
    var youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${this.state.title}&key=${YOUTUBE_API_KEY}`;
    fetch(youtubeUrl).then(response => {
      return response.json();
    }).then(json => {
      this.setState({
        trailer: json.items[0].id.videoId
    });

    }).catch(err => {
      console.log(err);
    });
    return (
      <div>
          <div className="container">
            <MovieDetails
               searchTerm= ""
                poster={this.state.image}
                vote={this.state.vote}
                title={this.state.title}
                summary={this.state.summary}
                release={this.state.release}
                box={this.state.box}
                runtime={this.state.runtime}
                tagline={this.state.tagline}
                moneyFormat={this.moneyFormat(this.state.box, "$")}
                trailer={this.state.trailer}
              />
            </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
