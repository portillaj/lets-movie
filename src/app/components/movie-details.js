import React, {Component} from 'react';

import Poster from './poster-section';
import Searchbar from './search-bar-header';
import VideoSection from './video-section';

class MovieDetails extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <Searchbar />
                <div className="container middle-section bg-dark">
                        <div className="row poster-section">
                                <div className="col-lg-5 mx-auto">
                                    <Poster poster= {this.props.poster}/>

                                </div>
                                <div className="col-lg-6 details mx-auto">
                                            <div className="details-section">
                                                <h1 className="movie-title">{this.props.title}</h1>
                                                <h3>{this.props.tagline}</h3>
                                                <p className="summary">{this.props.summary}</p>
                                            </div>

                                            <div className="row movie-info">
                                                <div className="col-xs-6 col-md-6">
                                                    <h3>Run Time</h3>
                                                    <p className="text-info">{this.props.runtime} Minutes</p>
                                                    <h3>Average Vote</h3>
                                                    <p className="text-info">{this.props.vote}/10</p>
                                                </div>

                                                <div className="col-xs-6 col-md-6">
                                                    <h3>Release Date</h3>
                                                    <p className="text-info">{this.props.release}</p>
                                                    <h3>Box Office</h3>
                                                    <p className="text-info">{this.props.moneyFormat}</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hr-bar" />
                            <div className="video-section">
                                <VideoSection trailer={this.props.trailer} />
                            </div>
                        </div>
        );
    }
}

export default MovieDetails;
