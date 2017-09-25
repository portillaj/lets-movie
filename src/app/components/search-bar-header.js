import React, {Component} from 'react';

class Searchbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchTerm: ""
        };

    }
        handleChange(e) {
            console.log(this.state.searchTerm);
            this.setState({searchTerm: e.target.value})
        }

        handleSubmit(event) {
            event.preventDefautl();
            var text = this.state.searchTerm;
            console.log("form submitted", text);
                this.setState({searchTerm: " "});
        //   this.setState({term});
        //   this.props.onSearchTermChange(term);
        }
    render() {
        return(
                <div className="top-app">
                    <div className="container search-bar-section bg-info">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="logo-section">
                                <h1 className="logo">Let's Movie</h1>
                                <p className="logo-sub">Search for your favorite movie</p>
                            </div>
                            </div>
                            <div className="col-md-5">
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                <div className="input-group search-movie">
                                        <input className="form-control bg-light" type="text" placeholder="Search Movie"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.searchTerm}/>
                                        <span className="input-group-btn">
                                            <button className="btn btn-dark" type="button">Go!</button></span>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Searchbar;
