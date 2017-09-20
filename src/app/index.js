import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './components/youtube-player';
import SearchBar from './components/search-bar';

const MOVIE_API_KEY = '2d733da824cd8c252eab2c2990379324';
const YOUTUBE_API_KEY =  'AIzaSyAX-BBg9D4Zz5iDgjGuviEIMcsShqVgFmQ';

const url = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&language=en-US&query=star%20Wars&page=1&include_adult=false`;

ReactDOM.render(<VideoPlayer movie={url} />, document.getElementById('app'));
