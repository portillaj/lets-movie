import React, {Component} from 'react';

import Poster from './poster-section';

class MovieDetails extends Component {
    render() {
        return(
                <div>
                    <div className="container">
                        <div className="row">
                                <div className="col-lg-6">
                                    <Poster poster= {this.props.poster}/>
                                </div>
                                <div className="col-lg-6">
                                            <div className="details-section">
                                                <h1 className="movie-title">{this.props.title}</h1>
                                                <h3>{this.props.tagline}</h3>
                                                <p className="summary">{this.props.summary}</p>
                                            </div>

                                            <div className="row movie-info">
                                                <div className="col-md-6">
                                                    <h3>Movie Run Time</h3>
                                                    <h2>{this.props.runtime} Minutes</h2>
                                                    <h3>Average Vote</h3>
                                                    <h2>{this.props.vote}/10</h2>
                                                </div>

                                                <div className="col-md-6">
                                                    <h3>Release Date</h3>
                                                    <h2>{this.props.release}</h2>
                                                    <h3>Box Office</h3>
                                                    <h2>{this.props.box}</h2>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        );
    }
}

export default MovieDetails;
