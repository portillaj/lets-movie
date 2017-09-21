import React, {Component} from 'react';

class Poster extends Component {
    render() {
        return(
                <div>
                    <div className="container">
                    <img className="poster-img" src={this.props.poster} />
                    </div>
                </div>
        );
    }
}

export default Poster;
