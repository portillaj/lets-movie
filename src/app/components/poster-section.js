import React, {Component} from 'react';

class Poster extends Component {
    render() {
        return(
                <div>
                        <img className="poster-img" src={this.props.poster} />
                </div>
        );
    }
}

export default Poster;
