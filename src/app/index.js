import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const API_KEY = '2d733da824cd8c252eab2c2990379324';
axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=John%20Wick&page=1&include_adult=false`)
.then(function (response) {
console.log(response);
console.log(response.data.results[0].original_title);
console.log(response.data.results[0].backdrop_path);
})
.catch(function (error) {
console.log(error);
});
//create component
class App extends Component {
    render() {
      return (
        <div>
          <h1>Hello World</h1>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
