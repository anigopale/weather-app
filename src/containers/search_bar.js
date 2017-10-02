import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
//fetchWeather action creator imported

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    //binds local this with global this
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }// constructor to initialize local component state

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }// onchange event, change state.term

  onFormSubmit(event){
    event.preventDefault(); //don't submit by default
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }// on submit, calls action creator with state.term as an argument


  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form> //form has its advantages
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}// bind actioncreator with container and middleware

export default connect(null, mapDispatchToProps)(SearchBar);
// export container, null, because there's no state bound
