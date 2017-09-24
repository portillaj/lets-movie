import React, {Component} from 'react';

import Poster from './poster-section';

class MovieDetails extends Component {
    render() {
        return(
                <div className="container middle-section bg-dark">
                        <div className="row poster-section">
                                <div className="col-lg-5">
                                    <Poster poster= {this.props.poster}/>
                                </div>
                                <div className="col-lg-7 details">
                                            <div className="details-section">
                                                <h1 className="movie-title">{this.props.title}</h1>
                                                <h3>{this.props.tagline}</h3>
                                                <p className="summary">{this.props.summary}</p>
                                            </div>

                                            <div className="row movie-info">
                                                <div className="col-sm-12 col-md-6">
                                                    <h3>Movie Run Time</h3>
                                                    <p className="text-info">{this.props.runtime} Minutes</p>
                                                    <h3>Average Vote</h3>
                                                    <p className="text-info">{this.props.vote}/10</p>
                                                </div>

                                                <div className="col-sm-12 col-md-6">
                                                    <h3>Release Date</h3>
                                                    <p className="text-info">{this.props.release}</p>
                                                    <h3>Box Office</h3>
                                                    <p className="text-info">{this.props.box}</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
        );
    }
}

export default MovieDetails;
