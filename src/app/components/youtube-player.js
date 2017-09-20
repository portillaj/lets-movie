import React, {Component} from 'react';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = { };

    this.getTrailer = this.getTrailer.bind(this)
  }

  getTrailer(movie) {
    fetch(movie).then(response => {
      return  response.json();
    }).then(json => {
      console.log(json)
      this.setState({
        trailers: json.results[3].original_title,
        image: `https://image.tmdb.org/t/p/w500/${json.results[3].backdrop_path}`,
        summary: json.results[3].overview,
        popularity: json.results[3].popularity,
        release: json.results[3].release_date
      });
    }).catch(err => {
      console.log(err)
    })
  }

  componentWillMount() {
    this.getTrailer(`${this.props.movie}`);
  }

render() {
    return (
      <div>
          <h1>{this.state.trailers}</h1>
          <img src={this.state.image} />
          <p><strong>Summary:</strong> {this.state.summary}</p>
          <p><strong>Poupularity:</strong> {this.state.popularity}</p>
          <p><strong>Release Date:</strong> {this.state.release}</p>
      </div>
    );
  }
}

export default VideoPlayer;
