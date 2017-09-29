/* global fetch */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from '../scss/main.scss';
import YTSearch from 'youtube-api-search';
//components
import Searchbar from './components/search-bar-header';
import MovieDetails  from './components/movie-details';

const MOVIE_API_KEY = '2d733da824cd8c252eab2c2990379324';
const YOUTUBE_API_KEY =  'AIzaSyAX-BBg9D4Zz5iDgjGuviEIMcsShqVgFmQ';

class App extends Component {
  constructor(props) {
    super(props);

    //set the initial state for the application
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
      backdrop: "",
      movieTitle: "star wars rogue one",
      movieId: 330459
    };

    //binding function moneyFormat
    this.moneyFormat = this.moneyFormat.bind(this);

  } //end constructor

  //FUNCTIONS
  moneyFormat(n, currency) {
      return currency + " " + parseInt(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }


  //function that updates the state when it is changed in the searchbar component
    inputChange(movieTitle) {
      this.setState({movieTitle})
    }

fetchMovieApi(url) {
      fetch(url).then(response => {
        return  response.json();
      }).then(json => {
        console.log(json.results[0].id);
        //getMovieId(json.results[0].id);
        this.getMovieId(json.results[0].id);
      }).catch(err => {
        console.log(err);
      });

    }

    getMovieId(id) {
      let fullUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIE_API_KEY}&language=en-US`;
      fetch(fullUrl).then(response => {
        return  response.json();
      }).then(json => {
        console.log(json);
        //setting the state after the api is hit
         this.setState({
          title: json.original_title,
          image: `https://image.tmdb.org/t/p/w500${json.poster_path}`,
          summary: json.overview,
          vote: json.vote_average,
          box: json.revenue,
          release: json.release_date,
          runtime: json.runtime,
          tagline: json.tagline,
          backdrop: json.backdrop_path,
        });
        console.log(json.results[0].id);
      }).catch(err => {
        console.log(err);
      });
  }

fetchTrailer(youtubeUrl) {
      fetch(youtubeUrl).then(response => {
        return response.json();
      }).then(json => {
        this.setState({
          trailer: json.items[0].id.videoId
      });
      }).catch(err => {
        console.log(err);
      });
  }

//when the app first initiates, this is the default movie that is shown
  componentDidMount() {
    let url = `https://api.themoviedb.org/3/movie/${this.state.movieId}?api_key=${MOVIE_API_KEY}&language=en-US`;
    //get url for default movie with movie api
console.log(url);
    //get url for default movie trailer
    let youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${this.state.movieTitle} trailer&key=${YOUTUBE_API_KEY}`;
    console.log(youtubeUrl);

//fetch the movie star wars rogue one first time app runs
    fetch(url).then(response => {
      return  response.json();
    }).then(json => {
      //setting the state after the api is hit
       this.setState({
        title: json.original_title,
        image: `https://image.tmdb.org/t/p/w500${json.poster_path}`,
        summary: json.overview,
        vote: json.vote_average,
        box: json.revenue,
        release: json.release_date,
        runtime: json.runtime,
        tagline: json.tagline,
        backdrop: json.backdrop_path,
      });
    }).catch(err => {
      console.log(err);
    });

//fetch youtube trailer of star wars rogue one
    fetch(youtubeUrl).then(response => {
      return response.json();
    }).then(json => {
      this.setState({
        trailer: json.items[0].id.videoId
    });
    }).catch(err => {
      console.log(err);
    });
  }

//when the component updated, add the background image from the movie that is being fetched from the api
  componentDidUpdate() {
    document.querySelector(".background").style.backgroundImage = `url(https://image.tmdb.org/t/p/original${this.state.backdrop})`;
  }

render() {

    return (
      <div>
          <div className="container">
          <Searchbar inputChange={this.inputChange.bind(this)} fetchTrailer={this.fetchTrailer.bind(this)} fetchMovie={this.fetchMovieApi.bind(this)} fetchId={this.getMovieId.bind(this)}  />
            <MovieDetails
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
    ); //end return
  } //end render
} //end Class

ReactDOM.render(<App />, document.getElementById('app'));
