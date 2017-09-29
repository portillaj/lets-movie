/* global fetch */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from '../scss/main.scss';
import YTSearch from 'youtube-api-search';
//components
import Searchbar from './components/search-bar-header';
import MovieDetails  from './components/movie-details';





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
      movieTitle: "star%20wars%20rogue%20one"
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

    // let title = this.state.movieTitle;
    // console.log(`component did mount: ${title}`);
    // //let url = `https://api.themoviedb.org/3/movie/${this.state.movieId}?&api_key=${MOVIE_API_KEY}`;
    // this.fetchMovieApi(title);

// call the movie api once when the page is rendered
//     let url = `https://api.themoviedb.org/3/movie/${this.state.movieId}?&api_key=${MOVIE_API_KEY}`;
//       let movieTitle = title.replace(/ /g,"%20");
fetchMovieApi(url) {

      fetch(url).then(response => {
        return  response.json();
      }).then(json => {
        console.log(json);
        //setting the state after the api is hit
        const newMovie = this.setState({
          title: json.results[0].original_title,
          image: `https://image.tmdb.org/t/p/w500${json.results[0].poster_path}`,
          summary: json.results[0].overview,
          vote: json.results[0].vote_average,
          box: json.results[0].revenue,
          release: json.results[0].release_date,
          runtime: json.results[0].runtime,
          tagline: json.results[0].tagline,
          backdrop: json.results[0].backdrop_path,
          movieId: json.results[0].id,
        });
      }).catch(err => {
        console.log(err);
      });
    }

fetchTrailer(youtubeUrl) {
      //use the youtube api to get the video trailer after the movie api is complete


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
          <Searchbar inputChange={this.inputChange.bind(this)} fetchTrailer={this.fetchTrailer.bind(this)} fetchMovie={this.fetchMovieApi.bind(this)}  />
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
