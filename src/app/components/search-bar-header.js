import React, {Component} from 'react';

class Searchbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchTerm: ""
        };

        this.handleInput = this.handleInput.bind(this)
    }
        handleInput(e) {
            this.setState({searchTerm: e.target.value})
        }
        movieSearchBtn() {
            console.log("button clicked");
        //   this.setState({term});
        //   this.props.onSearchTermChange(term);
        }
    render() {
        return(
                <div>
                    <div className="container search-bar-section bg-info">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="logo-section">
                                <h1 className="logo">Let's Movie</h1>
                                <p className="logo-sub">Search for your favorite movie</p>
                            </div>
                            </div>
                            <div className="col-md-5">
                                <div className="input-group search-movie">
                                        <input className="form-control bg-light" type="text" placeholder="Search Movie"
                                        value={this.state.searchTerm}
                                        onChange={this.handleInput}/>
                                        <span className="input-group-btn">
                                            <button className="btn btn-dark" type="button"
                                                onClick={this.movieSearchBtn}>Go!</button></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Searchbar;
