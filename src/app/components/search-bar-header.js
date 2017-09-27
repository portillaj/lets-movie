import React, {Component} from 'react';

class Searchbar extends Component {
    
    //FUNCTIONS
        //function that handles the input search field when the user is entering a movie and getting value
        handleChange(e) {
          e.preventDefault();
          const movie = e.target.value;
          this.props.inputChange(movie);
        }
        
        //function that handles the submit button when the user enters a movie and clicks the search button
        handleSubmit(event) {
            
        }
        
render() {
    return(
        <div className="top-app">
            <div className="container search-bar-section bg-info">
            <div className="row">
                <div className="col-sm-5 col-md-7">
                    <div className="logo-section">
                        <h1 className="logo">Let's Movie</h1>
                    <p className="logo-sub">Search for your favorite movie</p>
                    </div>
                </div>
                <div className="col-sm-7 col-md-5">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="input-group search-movie">
                            <input className="form-control bg-light my-search" type="text" placeholder="Search Movie"
                            onChange={this.handleChange.bind(this)} />
                            <span className="input-group-btn">
                                <button className="btn btn-dark" type="button">Go!</button>
                            </span>
                        </div>
                    </form>
                    <h1>{this.props.movieTitle}</h1>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default Searchbar;
