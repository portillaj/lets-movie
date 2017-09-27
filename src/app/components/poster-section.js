import React, {Component} from 'react';

class Poster extends Component {
    render() {
        return(
            <div className="poster-section">
                    <img className="poster-img" src={this.props.poster} />
            </div>
        );
    }
}

export default Poster;
