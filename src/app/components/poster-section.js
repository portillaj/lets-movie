import React, {Component} from 'react';

class Poster extends Component {
    render() {
        return(
                <div>
                    <h1 className="testing">testing sass</h1>
                    <img className="poster-img" src={this.props.poster} />
                </div>
        );
    }
}

export default Poster;
