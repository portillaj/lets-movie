import React, {Component} from 'react';

const MOVIE_API_KEY = '2d733da824cd8c252eab2c2990379324';
const YOUTUBE_API_KEY =  'AIzaSyAX-BBg9D4Zz5iDgjGuviEIMcsShqVgFmQ';

class Searchbar extends Component {
    //FUNCTIONS
        //function that handles the submit button when the user enters a movie and clicks the search button
        handleSubmit(e) {
          e.preventDefault();
          let movie = this.refs.movieSearch.value;
          let movieTitle = movie.replace(/ /g,"%20");
          let url = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&language=en-US&query=${movieTitle}&page=1&include_adult=false`;
          var youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${movieTitle} trailer&key=${YOUTUBE_API_KEY}`;
          this.props.inputChange(movieTitle);
          this.props.fetchMovie(url);
          this.props.fetchTrailer(youtubeUrl);
        }

render() {
    return(
        <div className="top-app">
            <div className="container search-bar-section bg-info">
            <div className="row">
                <div className="col-sm-5 col-md-7">
                    <div className="logo-section">
                        <h1 className="logo">Let's Movie</h1>
                    <p className="logo-sub">Search for your favorite movie</p>
                    </div>
                </div>
                <div className="col-sm-7 col-md-5">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div id="remote" className="input-group search-movie">

                            <input className="typeahead form-control bg-light my-search" required ref="movieSearch" type="text"
                             placeholder="Search Movie" />

                            <span className="input-group-btn">
                                <button className="btn btn-dark" onClick={this.handleSubmit.bind(this)} type="button">Go!</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default Searchbar;
